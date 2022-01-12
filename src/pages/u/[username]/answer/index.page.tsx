import * as React from 'react';
// import * as Styled from './index.styled';
import * as CommonStyled from '../common.styled';
import { getI18nProps } from '~/utils/i18n.utils';
import Tab, { EUgcType } from '../_components/Tab';
import ProfileLayout from '../_components/ProfileLayout';
import { GetServerSideProps } from 'next';
import { Pagination, Select } from 'antd';
import ListItem from '../_components/ListItem';
import {
  getAnswersById,
  getBadgesById,
  getPostUrl,
  getUserProfileById,
  IProfile,
  IRawBadges,
  IUserAction,
} from '../api';
import { getRelativeDatetime } from '~/utils/datetime.utils';
import { ParsedUrlQuery } from 'querystring';

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
  const { username, page, size } = ctx.params;
  const actualPage: number = page !== undefined ? Number(page) ?? 1 : 1;
  const actualSize: number = size !== undefined ? Number(size) ?? 30 : 30;
  const offset = actualPage * 30 - actualSize;
  const [i18nProps, badges, profile, answers] = await Promise.all([
    // @ts-ignore
    getI18nProps(['common'])(ctx),
    getBadgesById(username),
    getUserProfileById(username),
    getAnswersById(username, offset),
  ]);
  return { props: { ...i18nProps, badges, profile, answers } };
};

export default function ProfileAnswerPage(props: IProps) {
  const { badges, profile, answers } = props;
  const onChange = () => {
    //  TODO: handle page change
  };
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
      <CommonStyled.Pagination>
        <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />
      </CommonStyled.Pagination>
    </ProfileLayout>
  );
}
