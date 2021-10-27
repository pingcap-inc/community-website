import React, { useState } from 'react';

import * as Styled from './edit.styled';
import { CoreLayout } from '~/layouts';
import TiEditor, { createFactory } from '@634750802/a-editor';
// TODO: fixit
import '../../../../../node_modules/@634750802/a-editor/dist/style.css';
import { Button, Checkbox, Input } from 'antd';

const demoCategories = [
  { label: 'cat1', value: 'cat1' },
  { label: 'cat2', value: 'cat2' },
];
const demoTags = Array(10)
  .fill(0)
  .map((_, i) => ({ label: `Label ${i}`, value: i }));

const factory = createFactory();

const BlogEditPage = () => {
  const [title, setTitle] = useState('');
  const [origin, setOrigin] = useState(false);
  const [category, setCategory] = useState(undefined);
  const [tags, setTags] = useState([]);
  const [value, setValue] = useState([{ type: 'paragraph', children: [{ text: '' }] }]);

  const onTitleChange = (e) => {
    setTitle(e.currentTarget.value);
  };

  const onChangeOrigin = (e) => {
    setOrigin(e.currentTarget.value);
  };

  return (
    <CoreLayout MainWrapper={Styled.MainWrapper}>
      <Styled.Container>
        <Styled.Content>
          <Styled.TitleInput placeholder="博客标题......" value={title} onChange={onTitleChange} />
          <Styled.Meta>
            <Styled.CategorySelect
              placeholder="请选择分类"
              options={demoCategories}
              value={category}
              onChange={setCategory}
            />
            <Styled.TagsSelect placeholder="最多选择 4 个标签 🏷️" options={demoTags} value={tags} onChange={setTags} />
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
      </Styled.Container>
    </CoreLayout>
  );
};

export default BlogEditPage;
