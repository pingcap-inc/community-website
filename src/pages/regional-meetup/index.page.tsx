import * as React from 'react';
import type { GetServerSideProps, NextPage } from 'next';

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
import { StaticImageData } from 'next/image';

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
  iconImages: StaticImageData[];
};

export type TProps = {
  sharedContentCards: TSharedContentCard[];
};

const RegionalMeetupPage: NextPage<TProps> = ({ sharedContentCards }) => {
  return (
    <CoreLayout>
      <CommunityHead title={seo.title} description={seo.description} keyword={seo.keywords} />

      <Header data={{ title, description }} />
      <VideoRecord />
      <HowToJoin />
      <SharedContent data={{ sharedContentCards }} />
      <QandA />
      <JoinNow />
    </CoreLayout>
  );
};

export default RegionalMeetupPage;

export const getServerSideProps: GetServerSideProps = async () => {
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
        avatarImage: {
          src: process.env.NEXT_PUBLIC_ASKTUG_WEBSITE_BASE_URL + user.user.avatar_template.replace('{size}', '64'),
          width: 64,
          height: 64,
        },
        iconImages: user.badges.map((value) => ({ src: value.image, width: 32, height: 32 })),
      });
    } catch (e) {
      console.error('[Error] [/regional-meetup] [getServerSideProps]', e);
    }
  }
  return {
    props: {
      sharedContentCards,
    },
  };
};
