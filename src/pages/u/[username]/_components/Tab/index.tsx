import * as React from 'react';
import * as Styled from './index.styled';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCurrentLogonUser } from '~/pages/u/[username]/profile.hook';

export enum EUgcType {
  answer,
  question,
  post,
  favorite,
}

export interface IPropsTab {
  selected: EUgcType;
  nums: {
    answer?: number;
    question?: number;
    post?: number;
    favorite?: number;
  };
  extendDom?: React.ReactNode;
}

export default function Tab(props: IPropsTab) {
  const { selected, nums, extendDom } = props;
  const router = useRouter();
  const { username } = router.query;
  const prefix = `/u/${username}`;
  const isCurrentLogonUser = useCurrentLogonUser(username as string);
  return (
    <Styled.Tab>
      <Styled.Start>
        <Link href={`${prefix}/answer`} passHref>
          <Styled.TabItem selected={selected === EUgcType.answer}>回答 {nums.answer}</Styled.TabItem>
        </Link>
        <Link href={`${prefix}/question`} passHref>
          <Styled.TabItem selected={selected === EUgcType.question}>提问 {nums.question}</Styled.TabItem>
        </Link>
        <Link href={`${prefix}/post/all`} passHref>
          <Styled.TabItem selected={selected === EUgcType.post}>文章 {nums.post}</Styled.TabItem>
        </Link>
        {isCurrentLogonUser && (
          <Link href={`${prefix}/favorite`} passHref>
            <Styled.TabItem selected={selected === EUgcType.favorite}>收藏 {nums.favorite}</Styled.TabItem>
          </Link>
        )}
      </Styled.Start>
      <Styled.End>{extendDom}</Styled.End>
    </Styled.Tab>
  );
}
