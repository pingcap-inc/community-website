import * as Styled from './editing.styled';
import TiEditor from '@pingcap-inc/tidb-community-editor';
import { Alert, Button, Checkbox, Input } from 'antd';
import React from 'react';
import { useEditContext, useEditMethods } from '../edit.context';

const demoCategories = [
  { name: 'cat1', id: 'cat1' },
  { name: 'cat2', id: 'cat2' },
];

const demoTags = Array(10)
  .fill(0)
  .map((_, i) => ({ name: `Label ${i}`, id: i }));

const Editing = ({ blogInfo }) => {
  const { factory, title, setTitle, origin, setOrigin, category, setCategory, tags, setTags, content, setContent } =
    useEditContext();

  const { save, saveAndSubmit, operating } = useEditMethods();

  const onTitleChange = (e) => {
    setTitle(e.currentTarget.value);
  };

  const onChangeOrigin = (e) => {
    setOrigin(e.currentTarget.value);
  };

  if (!process.browser) {
    return <></>;
  }

  return (
    <>
      <Styled.Content>
        <Styled.TitleInput placeholder="博客标题......" value={title} onChange={onTitleChange} />
        <Styled.Meta>
          <Styled.CategorySelect
            placeholder="请选择分类"
            options={demoCategories.map(({ name, id }) => ({ label: name, value: id }))}
            value={category && { label: category.name, value: category.id }}
            onChange={setCategory}
            labelInValue
          />
          <Styled.TagsSelect
            placeholder="最多选择 4 个标签 🏷️"
            options={demoTags.map(({ name, id }) => ({ label: name, value: id }))}
            value={tags}
            onChange={setTags}
            labelInValue
          />
        </Styled.Meta>
        <Styled.Editor>
          <TiEditor value={content} onChange={setContent} factory={factory} placeholder="请在此处开始撰写正文……" />
        </Styled.Editor>
      </Styled.Content>
      <Styled.Footer>
        <Checkbox checked={origin === false} onChange={() => setOrigin(false)}>
          原创
        </Checkbox>
        <Checkbox checked={origin !== false} onChange={() => setOrigin('')}>
          转载自
        </Checkbox>
        <Input
          value={origin === false ? '' : origin}
          disabled={origin === false}
          onChange={onChangeOrigin}
          placeholder="原文章链接"
        />
      </Styled.Footer>
      <Styled.Actions>
        {blogInfo?.status === 'PUBLISHED' ? <PublishedAlert /> : undefined}
        {blogInfo?.status === 'PENDING' ? <PendingAlert /> : undefined}
        <Button type="primary" onClick={saveAndSubmit} disabled={operating}>
          发布
        </Button>
        <Button type="default" onClick={save} disabled={operating}>
          保存草稿
        </Button>
      </Styled.Actions>
    </>
  );
};

const PublishedAlert = () => {
  return <Alert type="warning" message="您正在编辑一个已发布的博客，修改或重新提交会将该博客下线。" />;
};

const PendingAlert = () => {
  return <Alert type="warning" message="您正在编辑一个审核中的博客，修改则需要重新提交审核。" />;
};

export default Editing;
