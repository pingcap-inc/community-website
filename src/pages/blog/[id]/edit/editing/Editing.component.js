import * as Styled from './editing.styled';
import TiEditor from '@634750802/a-editor';
import { Button, Checkbox, Input } from 'antd';
import React from 'react';
import { useEditContext } from '../edit.context';

const demoCategories = [
  { label: 'cat1', value: 'cat1' },
  { label: 'cat2', value: 'cat2' },
];

const demoTags = Array(10)
  .fill(0)
  .map((_, i) => ({ label: `Label ${i}`, value: i }));

const Editing = () => {
  const { factory, title, setTitle, origin, setOrigin, category, setCategory, tags, setTags, value, setValue } =
    useEditContext();

  const onTitleChange = (e) => {
    setTitle(e.currentTarget.value);
  };

  const onChangeOrigin = (e) => {
    setOrigin(e.currentTarget.value);
  };

  return (
    <>
      <Styled.Content>
        <Styled.TitleInput placeholder="博客标题......" value={title} onChange={onTitleChange} />
        <Styled.Meta>
          <Styled.CategorySelect
            placeholder="请选择分类"
            options={demoCategories}
            value={category}
            onChange={setCategory}
          />
          <Styled.TagsSelect
            placeholder="最多选择 4 个标签 🏷️"
            options={demoTags}
            value={tags}
            onChange={setTags}
            labelInValue
          />
        </Styled.Meta>
        <Styled.Editor>
          <TiEditor value={value} onChange={setValue} factory={factory} placeholder="请在此处开始撰写正文……" />
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
        <Button type="primary">发布</Button>
        <Button type="default">保存草稿</Button>
      </Styled.Actions>
    </>
  );
};

export default Editing;
