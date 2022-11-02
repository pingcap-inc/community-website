import * as React from 'react';
import type { GetStaticProps, NextPage } from 'next';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

import { CoreLayout } from '~/layouts';
import { CommunityHead } from '~/components';

import Header from './Header';
import VideoRecord from './VideoRecord';
import HowToJoin from './HowToJoin';
import SharedContent from './SharedContent';
import QandA from './QandA';
import JoinNow from './JoinNow';
import { sharedContents } from '~/data/regional-meetup/shared-content';
import { getUserByUsername } from '~/api/asktug/profile';
import type { StaticImageData } from 'next/image';
import { downloadVideoCoverImage, getVideoBasicInfo } from '~/utils/bilibili';
import { videoRecords } from '~/data/regional-meetup/video-record';

dayjs.extend(duration);

const NEXT_PUBLIC_ASKTUG_WEBSITE_BASE_URL = process.env.NEXT_PUBLIC_ASKTUG_WEBSITE_BASE_URL ?? '';

const title = '地区活动';
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

export type TProps = {
  sharedContentCards: TSharedContentCard[];
  videoRecordItems: TVideoRecordFull[];
};

const RegionalMeetupPage: NextPage<TProps> = ({ sharedContentCards, videoRecordItems }) => {
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
  const sharedContentCards: TSharedContentCard[] = [];
  for (const username of Object.keys(sharedContents)) {
    try {
      const user = await getUserByUsername({ username });
      sharedContentCards.push({
        username,
        title: sharedContents[username].title,
        description: sharedContents[username].description,
        authorName: sharedContents[username].authorName,
        authorTitle: sharedContents[username].authorTitle,
        //avatarImage: {
        //  src: process.env.NEXT_PUBLIC_ASKTUG_WEBSITE_BASE_URL + user.user.avatar_template.replace('{size}', '64'),
        //  width: 64,
        //  height: 64,
        //},
        avatarImage: sharedContents[username].avatarImage,
        iconImages: (user.badges.filter((value) => value.image_url !== null).slice(0, 5) ?? []).map((value) => ({
          alt: value.name,
          src: `${NEXT_PUBLIC_ASKTUG_WEBSITE_BASE_URL}/${value.image_url}`,
          width: 32,
          height: 32,
        })),
      });
    } catch (e) {
      console.error('[Error] [/regional-meetup] [getServerSideProps] [sharedContentCards]', e);
    }
  }

  const videoRecordItems: TVideoRecordFull[] = [];
  for (const bvid of Object.keys(videoRecords)) {
    try {
      const videoBasicInfo = await getVideoBasicInfo(bvid);
      if (videoBasicInfo.code === 0) {
        const { extensionName } = await downloadVideoCoverImage(bvid, videoBasicInfo.data.pic);
        videoRecordItems.push({
          bvid,
          region: videoRecords[bvid].region,
          authorName: videoRecords[bvid].authorName,
          title: videoBasicInfo.data.title,
          duration: `${(videoBasicInfo.data.duration / 60).toFixed()}:${(videoBasicInfo.data.duration % 60).toFixed()}`,
          playCount: videoBasicInfo.data.stat.view,
          createDatetime: dayjs.unix(videoBasicInfo.data.pubdate).format('YYYY-M-D'),
          //videoCoverImage: videoRecords[bvid].videoCoverImage,
          //videoCoverImage: { src: videoBasicInfo.data.pic, width: 160, height: 100 },
          videoCoverImage: { src: `/images/bilibili_video_cover/${bvid}.${extensionName}`, width: 160, height: 100 },
        });
      }
    } catch (e) {
      console.error('[Error] [/regional-meetup] [getServerSideProps] [videoRecordItems]', e);
    }
  }
  return {
    props: {
      sharedContentCards,
      videoRecordItems,
    },
  };
};
