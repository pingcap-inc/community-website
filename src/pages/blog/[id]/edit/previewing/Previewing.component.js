import React from 'react';
import { useEditContext } from '../edit.context';
import * as Styled from '../editing/editing.styled';
import * as PreviewingStyled from './previewing.styled';
import { BlogInfo } from '@tidb-community/ui';
import { OriginLabel, RepostLabel } from '../../components/labels';
import TiEditor from '@634750802/a-editor';

const noop = () => {};

const Previewing = () => {
  const { factory, title, origin, tags, content } = useEditContext();

  return (
    <>
      <Styled.Content>
        <Styled.TitleInput disabled value={title} />
        <Styled.Meta>
          {typeof origin === 'string' ? <RepostLabel>转载</RepostLabel> : <OriginLabel>原创</OriginLabel>}

          {tags.map((tag) => (
            <BlogInfo.Tag key={tag.value}>{tag.value}</BlogInfo.Tag>
          ))}
        </Styled.Meta>
        <Styled.Editor>
          <TiEditor value={content} onChange={noop} factory={factory} disabled />
        </Styled.Editor>
        {typeof origin === 'string' ? (
          <PreviewingStyled.Declaration>声明：本文转载于 ${origin}</PreviewingStyled.Declaration>
        ) : undefined}
      </Styled.Content>
    </>
  );
};
export default Previewing;
