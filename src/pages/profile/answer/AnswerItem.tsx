import * as React from 'react';
import * as Styled from './AnswerItem.styled';
import dayjs from 'dayjs';
import Link from 'next/link';

export interface IProps {
  url: string;
  title: string;
  summary: string;
  date: Date;
}

export default function AnswerItem(props: IProps) {
  const { url, title, summary, date } = props;
  return (
    <Styled.AnswerItem>
      <Link href={url} passHref>
        <Styled.Title>{title}</Styled.Title>
      </Link>
      <Styled.Summary>{summary}</Styled.Summary>
      <Styled.Metadata>{dayjs(date).format()}</Styled.Metadata>
    </Styled.AnswerItem>
  );
}
