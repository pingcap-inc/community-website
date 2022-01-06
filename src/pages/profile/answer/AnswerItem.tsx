import * as React from 'react';
import * as Styled from './AnswerItem.styled';
import dayjs from 'dayjs';

export interface IProps {
  title: string;
  summary: string;
  date: Date;
}

export default function AnswerItem(props: IProps) {
  const { title, summary, date } = props;
  return (
    <Styled.AnswerItem>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Summary>{summary}</Styled.Summary>
      <Styled.Metadata>{dayjs(date).format()}</Styled.Metadata>
    </Styled.AnswerItem>
  );
}
