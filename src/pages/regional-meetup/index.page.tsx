import * as React from 'react';
import type { GetStaticProps, NextPage } from 'next';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import type { StaticImageData } from 'next/image';

import { CoreLayout } from '~/layouts';
import { CommunityHead } from '~/components';
import { getUserByUsername } from '~/api/asktug/profile';
import { downloadVideoCoverImage, getVideoBasicInfo } from '~/utils/bilibili';

import Header from './Header';
import VideoRecord from './VideoRecord';
import HowToJoin from './HowToJoin';
import SharedContent from './SharedContent';
import QandA from './QandA';
import JoinNow from './JoinNow';
import { sharedContents } from './SharedContent/data';
import { videoRecords } from './VideoRecord/data';

dayjs.extend(duration);

const NEXT_PUBLIC_ASKTUG_WEBSITE_BASE_URL = process.env.NEXT_PUBLIC_ASKTUG_WEBSITE_BASE_URL ?? '';

const title = 'TiDB 地区交流活动';
const description =
  'TiDB 地区活动是通过各地区组织者举办的地区技术交流活动，每期地区组织活动以“连接地区技术人，分享技术实践”为核心目的，目前我们已在天津、石家庄、济南、武汉、广州等地举办多场地区组织活动。';

const seo = {
  title,
  description,
  keywords: ['TiDB', 'Meetup', 'HTAP', '地区分享'],
};

export type TSharedContentCard = {
  username: string;
  title: string;
  description: React.ReactNode;
  authorName: string;
  authorTitle: string;
  avatarImage: StaticImageData;
  iconImages: (StaticImageData & { alt?: string })[];
};

export type TVideoRecordFull = {
  region: string;
  authorName: string;
  bvid: string;
  title: string;
  //videCoverImageUrl: string;
  videoCoverImage: StaticImageData;
  duration: string;
  playCount: number;
  createDatetime: string;
};

export type TVideoRecordFromServer = {
  [bvid: string]: {
    title: string;
    duration: string;
    playCount: number;
    createDatetime: string;
    videoCoverImage: StaticImageData;
  };
};

export type TSharedContentFromServer = {
  [username: string]: {
    iconImages: (StaticImageData & { alt?: string })[];
  };
};

export type TProps = {
  sharedContentFromServer: TSharedContentFromServer;
  videoRecordsFromServer: TVideoRecordFromServer;
};

const RegionalMeetupPage: NextPage<TProps> = ({ sharedContentFromServer, videoRecordsFromServer }) => {
  const sharedContentCards: TSharedContentCard[] = Object.keys(sharedContentFromServer).map((username) => {
    return { username, ...sharedContents[username], ...sharedContentFromServer[username] };
  });

  const videoRecordItems: TVideoRecordFull[] = Object.keys(videoRecords).map((bvid) => {
    return { bvid, ...videoRecords[bvid], ...videoRecordsFromServer[bvid] };
  });

  return (
    <CoreLayout>
      <CommunityHead title={seo.title} description={seo.description} keyword={seo.keywords} />

      <Header data={{ title, description }} />
      <VideoRecord data={{ videoRecordItems }} />
      <HowToJoin />
      <SharedContent data={{ sharedContentCards }} />
      <QandA />
      <JoinNow />
    </CoreLayout>
  );
};

export default RegionalMeetupPage;

export const getStaticProps: GetStaticProps<TProps> = async () => {
  const sharedContentFromServer: TSharedContentFromServer = {};
  const videoRecordsFromServer: TVideoRecordFromServer = {};

  // This is a quick fix for github not resolving our new domain

  // do not wait for request done.
  void Promise.all([
    ...Object.keys(sharedContents).map(async (username) => {
      try {
        const user = await getUserByUsername({ username });
        sharedContentFromServer[username] = {
          iconImages: (user.badges.filter((value) => value.image_url !== null).slice(0, 5) ?? []).map((value) => ({
            alt: value.name,
            src: `${NEXT_PUBLIC_ASKTUG_WEBSITE_BASE_URL}/${value.image_url}`,
            width: 32,
            height: 32,
          })),
        };
      } catch (e) {
        console.error('[Error] [/regional-meetup] [getServerSideProps] [sharedContentCards]', e);
      }
    }),
    ...Object.keys(videoRecords).map(async (bvid) => {
      try {
        const videoBasicInfo = await getVideoBasicInfo(bvid);
        if (videoBasicInfo.code === 0) {
          const { extensionName } = await downloadVideoCoverImage(bvid, videoBasicInfo.data.pic);
          videoRecordsFromServer[bvid] = {
            title: videoBasicInfo.data.title,
            duration: `${(videoBasicInfo.data.duration / 60).toFixed()}:${(
              videoBasicInfo.data.duration % 60
            ).toFixed()}`,
            playCount: videoBasicInfo.data.stat.view,
            createDatetime: dayjs.unix(videoBasicInfo.data.pubdate).format('YYYY-M-D'),
            videoCoverImage: { src: `/images/bilibili_video_cover/${bvid}.${extensionName}`, width: 160, height: 100 },
          };
        }
      } catch (e) {
        console.error('[Error] [/regional-meetup] [getServerSideProps] [videoRecordItems]', e);
      }
    }),
  ]);

  // directly return results after timeout.
  await new Promise((resolve) => {
    setTimeout(resolve, 10000);
  });

  return {
    props: {
      sharedContentFromServer,
      videoRecordsFromServer,
    },
    // revalidate per 1 hour
    revalidate: 60 * 60,
  };
};
