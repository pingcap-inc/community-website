import * as React from 'react';
// import * as Styled from './index.styled';
import * as CommonStyled from '../common.styled';
import { getI18nProps } from '~/utils/i18n.utils';
import Tab, { EUgcType } from '../_components/Tab';
import ProfileLayout from '../_components/ProfileLayout';
import { GetServerSideProps } from 'next';
import { Pagination, Select, Space } from 'antd';
import ListItem from '../_components/ListItem';
import { HeartOutlined, MessageOutlined, StarOutlined, EyeOutlined } from '@ant-design/icons';
import { getBadgesByUsername, getPostsByUsername, getUserProfileByUsername, IPost, IProfile, IRawBadges } from '../api';
import { getRelativeDatetime } from '~/utils/datetime.utils';
import { ParsedUrlQuery } from 'querystring';

interface IProps {
  badges: IRawBadges[];
  profile: IProfile;
  posts: IPost[];
}
interface IQuery extends ParsedUrlQuery {
  username: string;
  page?: string;
  size?: string;
}

export const getServerSideProps: GetServerSideProps<IProps, IQuery> = async (ctx) => {
  const { username } = ctx.params;
  const [i18nProps, badges, profile, posts] = await Promise.all([
    // @ts-ignore
    getI18nProps(['common'])(ctx),
    getBadgesByUsername(username),
    getUserProfileByUsername(username),
    getPostsByUsername(username),
  ]);
  return { props: { ...i18nProps, badges, profile, posts } };
};

export default function ProfileAnswerPage(props: IProps) {
  const { badges, profile, posts } = props;
  const onChange = () => {
    //  TODO: handle page change
  };
  return (
    <ProfileLayout badges={badges} profile={profile}>
      <CommonStyled.Action>
        <Tab selected={EUgcType.post} nums={{ answer: 3, question: 4, post: 5, favorite: 6 }} />
        <Select defaultValue={''}>
          <Select.Option value={''}>文章状态</Select.Option>
          <Select.Option value={'1'}>文章状态</Select.Option>
          <Select.Option value={'2'}>文章状态</Select.Option>
        </Select>
      </CommonStyled.Action>
      <CommonStyled.List>
        {posts.map((value) => (
          <ListItem
            key={value.id}
            url={`/blog/${value.slug}`}
            title={value.title}
            summary={value.title}
            metadataStart={
              <Space size={24}>
                <div>
                  <HeartOutlined /> {value.likes}
                </div>
                <div>
                  <MessageOutlined /> {value.comments}
                </div>
                {/*<div>*/}
                {/*  <StarOutlined /> xx*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*  <EyeOutlined /> xx*/}
                {/*</div>*/}
              </Space>
            }
            metadataEnd={getRelativeDatetime(value.publishedAt)}
          />
        ))}
      </CommonStyled.List>
      <CommonStyled.Pagination>
        <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />
      </CommonStyled.Pagination>
    </ProfileLayout>
  );
}
