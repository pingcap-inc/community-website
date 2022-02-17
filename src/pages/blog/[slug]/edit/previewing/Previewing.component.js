import React from 'react';
import { useEditContext, useEditMethods } from '../edit.context';
import * as Styled from '../editing/editing.styled';
import * as PreviewingStyled from './previewing.styled';

import BlogInfo from '../../../_components/blogInfo';
import { OriginLabel, RepostLabel } from '../../components/labels';
import TiEditor from '@pingcap-inc/tidb-community-editor';
import { Button, message } from 'antd';
import { PendingAlert, PublishedAlert } from '../editing/Editing.component';
import { usePrincipal } from '~/pages/blog/blog.hooks';

const noop = () => {};

const Previewing = ({ blogInfo }) => {
  const { category, factory, title, origin, tags, content, coverImageURL } = useEditContext();

  const { save, saveAndSubmit, saveAndPublish, operating } = useEditMethods();

  const { hasAuthority } = usePrincipal();
  const hasPermission = hasAuthority('PUBLISH_POST');

  const validationPublish = (callback) => {
    if (title === '') {
      message.warn('请输入标题');
      return;
    }
    if (category === undefined || category === null) {
      message.warn('请选择分类');
      return;
    }
    return callback();
  };

  const validationSaveDraft = (callback) => {
    if (title === '') {
      message.warn('请输入标题');
      return;
    }
    return callback();
  };

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
      <Styled.Actions>
        {blogInfo?.status === 'PUBLISHED' ? <PublishedAlert /> : undefined}
        {blogInfo?.status === 'PENDING' ? <PendingAlert /> : undefined}
        <div className="btns">
          {hasPermission ? (
            <Button type="primary" onClick={() => validationPublish(saveAndPublish)} disabled={operating}>
              发布
            </Button>
          ) : (
            <Button type="primary" onClick={() => validationPublish(saveAndSubmit)} disabled={operating}>
              提交
            </Button>
          )}
          <Button type="default" onClick={() => validationSaveDraft(save)} disabled={operating}>
            保存草稿
          </Button>
        </div>
      </Styled.Actions>
    </>
  );
};
export default Previewing;
