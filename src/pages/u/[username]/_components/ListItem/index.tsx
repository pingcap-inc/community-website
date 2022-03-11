import * as React from 'react';
import * as Styled from './index.styled';
import BlogStatusBadge from '~/pages/blog/_components/BlogStatusBadge/BlogStatusBadge';
import { TPostStatus } from '../../../../../../packages/datasource/src/api/blog';

export interface IProps {
  url: string;
  title: string;
  summary: string;
  metadataStart?: React.ReactNode;
  metadataEnd?: React.ReactNode;
  status?: TPostStatus;
}

export default function ListItem(props: IProps) {
  const { url, title, summary, metadataStart, metadataEnd, status } = props;
  return (
    <Styled.ListItem>
      <Styled.Title>
        <Styled.TitleText href={url}>{title}</Styled.TitleText>
        <Styled.TitleBadge>
          <BlogStatusBadge status={status} />
        </Styled.TitleBadge>
      </Styled.Title>
      <Styled.Summary dangerouslySetInnerHTML={{ __html: summary }} />
      {(metadataStart || metadataEnd) && (
        <Styled.Metadata>
          <Styled.MetadataStart>{metadataStart}</Styled.MetadataStart>
          <Styled.MetadataEnd>{metadataEnd}</Styled.MetadataEnd>
        </Styled.Metadata>
      )}
    </Styled.ListItem>
  );
}
