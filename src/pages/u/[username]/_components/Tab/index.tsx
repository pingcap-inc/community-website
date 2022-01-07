import * as React from 'react';
import * as Styled from './index.styled';
import Link from 'next/link';

export enum EUgcType {
  // eslint-disable-next-line no-unused-vars
  answer,
  // eslint-disable-next-line no-unused-vars
  question,
  // eslint-disable-next-line no-unused-vars
  post,
  // eslint-disable-next-line no-unused-vars
  favorite,
}

export interface IPropsTab {
  selected: EUgcType;
  nums: {
    answer: number;
    question: number;
    post: number;
    favorite: number;
  };
}

export default function Tab(props: IPropsTab) {
  const { selected, nums } = props;
  return (
    <Styled.Tab>
      <Link href={`/profile/answer`} passHref>
        <Styled.TabItem selected={selected === EUgcType.answer}>回答 {nums.answer}</Styled.TabItem>
      </Link>
      <Link href={`/profile/question`} passHref>
        <Styled.TabItem selected={selected === EUgcType.question}>提问 {nums.question}</Styled.TabItem>
      </Link>
      <Link href={`/profile/post`} passHref>
        <Styled.TabItem selected={selected === EUgcType.post}>文章 {nums.post}</Styled.TabItem>
      </Link>
      <Link href={`/profile/favorite`} passHref>
        <Styled.TabItem selected={selected === EUgcType.favorite}>收藏 {nums.favorite}</Styled.TabItem>
      </Link>
    </Styled.Tab>
  );
}
