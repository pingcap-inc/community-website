import * as Styled from './editing.styled';
import TiEditor from '@pingcap-inc/tidb-community-editor';
import { Alert, Button, Checkbox, Input, Upload } from 'antd';
import React, { useMemo } from 'react';
import { useEditContext, useEditMethods } from '../edit.context';
import { demoCategories, demoTags } from './demo-data';
import ImgCrop from 'antd-img-crop';
import { DeleteOutlined } from '@ant-design/icons';

const Editing = ({ blogInfo }) => {
  const {
    factory,
    coverImageURL,
    setCoverImageURL,
    uploadCoverImage,
    title,
    setTitle,
    origin,
    setOrigin,
    category,
    setCategory,
    tags,
    setTags,
    content,
    setContent,
  } = useEditContext();

  const { save, saveAndSubmit, operating } = useEditMethods();

  const onTitleChange = (e) => {
    setTitle(e.currentTarget.value);
  };

  const onChangeOrigin = (e) => {
    setOrigin(e.currentTarget.value);
  };

  const onClickRemoveCoverImage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCoverImageURL(undefined);
  };

  const mappedCategoriesCollection = useMemo(() => {
    return demoCategories.map(fromServerMeta);
  }, []);

  const mappedCategory = useMemo(() => {
    return fromServerMeta(category);
  }, [category]);

  const mappedTagsCollection = useMemo(() => {
    return demoTags.map(fromServerMeta);
  }, []);

  const mappedTags = useMemo(() => {
    return tags.map(fromServerMeta);
  }, [tags]);

  if (!process.browser) {
    return <></>;
  }

  return (
    <>
      <Styled.Content>
        <ImgCrop aspect={7}>
          <Upload maxCount={1} multiple={false} showUploadList={false} onChange={({ file }) => uploadCoverImage(file)}>
            {coverImageURL ? (
              <Styled.CoverImage style={{ backgroundImage: `url(${JSON.stringify(coverImageURL)})` }}>
                <Button
                  htmlType="button"
                  size="large"
                  danger
                  type="link"
                  icon={<DeleteOutlined />}
                  onClick={onClickRemoveCoverImage}
                />
              </Styled.CoverImage>
            ) : (
              <Styled.CoverImagePlaceholder>+ 插入封面图</Styled.CoverImagePlaceholder>
            )}
          </Upload>
        </ImgCrop>
        <Styled.TitleInput placeholder="博客标题......" value={title} onChange={onTitleChange} />
        <Styled.Meta>
          <Styled.CategorySelect
            placeholder="请选择分类"
            options={mappedCategoriesCollection}
            value={mappedCategory}
            onChange={(category) => setCategory(toServerMeta(category))}
            labelInValue
          />
          <Styled.TagsSelect
            placeholder="最多选择 5 个标签 🏷️"
            options={mappedTagsCollection}
            value={mappedTags}
            onChange={(tags) => setTags(tags.slice(0, 5).map(toServerMeta))}
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

const fromServerMeta = (obj) => {
  if (!obj) {
    return obj;
  }
  const { id, name } = obj;
  return { label: name, value: id, key: id };
};
const toServerMeta = (obj) => {
  if (!obj) {
    return obj;
  }
  const { label, value } = obj;
  return { id: value, name: label };
};

export default Editing;
