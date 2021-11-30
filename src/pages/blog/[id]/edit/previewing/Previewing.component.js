import React from 'react';
import { useEditContext } from '../edit.context';
import * as Styled from '../editing/editing.styled';
import * as PreviewingStyled from './previewing.styled';
import { BlogInfo } from '@tidb-community/ui';
import { OriginLabel, RepostLabel } from '../../components/labels';
import TiEditor from '@pingcap-inc/tidb-community-editor';

const noop = () => {};

const Previewing = () => {
  const { factory, title, origin, tags, content, coverImageURL } = useEditContext();

  if (!process.browser) {
    return <></>;
  }

  return (
    <>
      <Styled.Content>
        {coverImageURL ? (
          <Styled.CoverImage style={{ backgroundImage: `url(${JSON.stringify(coverImageURL)})` }} />
        ) : undefined}
        <Styled.TitleInput readOnly value={title} />
        <Styled.Meta>
          {typeof origin === 'string' ? <RepostLabel>转载</RepostLabel> : <OriginLabel>原创</OriginLabel>}

          {tags.map((tag) => (
            <BlogInfo.Tag key={tag.id}>{tag.name}</BlogInfo.Tag>
          ))}
        </Styled.Meta>
        <Styled.Editor>
          <TiEditor value={content} onChange={noop} factory={factory} disabled />
        </Styled.Editor>
        {typeof origin === 'string' ? (
          <PreviewingStyled.Declaration>声明：本文转载于 {origin}</PreviewingStyled.Declaration>
        ) : undefined}
      </Styled.Content>
    </>
  );
};
export default Previewing;
