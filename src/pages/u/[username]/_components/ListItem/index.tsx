import * as React from 'react';
import * as Styled from './index.styled';
import Link from 'next/link';

export interface IProps {
  url: string;
  title: string;
  summary: string;
  metadataStart?: React.ReactNode;
  metadataEnd?: React.ReactNode;
}

export default function ListItem(props: IProps) {
  const { url, title, summary, metadataStart, metadataEnd } = props;
  return (
    <Styled.ListItem>
      <Link href={url} passHref>
        <Styled.Title>{title}</Styled.Title>
      </Link>
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
