import * as React from 'react';
// import * as Styled from './index.styled';
import * as CommonStyled from '../common.styled';
import { getI18nProps } from '~/utils/i18n.utils';
import { getPageQuery } from '~/utils/pagination.utils';
import Tab, { EUgcType } from '../_components/Tab';
import ProfileLayout from '../_components/ProfileLayout';
import { GetServerSideProps } from 'next';
import { Select } from 'antd';
import ListItem from '../_components/ListItem';
import {
  getAnswersByUsername,
  getBadgesByUsername,
  getPostUrl,
  getUserProfileByUsername,
  IProfile,
  IRawBadges,
  IUserAction,
} from '../api';
import { getRelativeDatetime } from '~/utils/datetime.utils';
import { ParsedUrlQuery } from 'querystring';
import { useRouter } from 'next/router';

interface IProps {
  badges: IRawBadges[];
  profile: IProfile;
  answers: IUserAction[];
}
interface IQuery extends ParsedUrlQuery {
  username: string;
  page?: string;
  size?: string;
}

export const getServerSideProps: GetServerSideProps<IProps, IQuery> = async (ctx) => {
  const { username } = ctx.params;
  const pageInfo = getPageQuery(ctx.query);
  const [i18nProps, badges, profile, answers] = await Promise.all([
    // @ts-ignore
    getI18nProps(['common'])(ctx),
    getBadgesByUsername(username),
    getUserProfileByUsername(username),
    getAnswersByUsername(username, pageInfo.page, pageInfo.size),
  ]);
  return { props: { ...i18nProps, badges, profile, answers } };
};

export default function ProfileAnswerPage(props: IProps) {
  const { badges, profile, answers } = props;
  const router = useRouter();
  const pageInfo = getPageQuery(router.query);
  return (
    <ProfileLayout badges={badges} profile={profile}>
      <CommonStyled.Action>
        <Tab selected={EUgcType.answer} nums={{ answer: 3, question: 4, post: 5, favorite: 6 }} />
        <Select defaultValue={''}>
          <Select.Option value={''}>回答状态</Select.Option>
          <Select.Option value={'1'}>回答状态</Select.Option>
          <Select.Option value={'2'}>回答状态</Select.Option>
        </Select>
      </CommonStyled.Action>
      <CommonStyled.List>
        {answers.map((value) => (
          <ListItem
            key={value.post_id}
            url={getPostUrl(value.topic_id, value.post_number)}
            title={value.title}
            summary={value.excerpt}
            metadataEnd={getRelativeDatetime(value.created_at)}
          />
        ))}
      </CommonStyled.List>
    </ProfileLayout>
  );
}
