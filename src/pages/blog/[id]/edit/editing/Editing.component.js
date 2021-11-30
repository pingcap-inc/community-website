import * as Styled from './editing.styled';
import TiEditor from '@pingcap-inc/tidb-community-editor';
import { Alert, Button, Checkbox, Input } from 'antd';
import React, { useCallback, useMemo } from 'react';
import { useEditContext, useEditMethods } from '../edit.context';
// import ImgCrop from 'antd-img-crop';
// import { DeleteOutlined } from '@ant-design/icons';
import { api } from '@tidb-community/datasource';
import Axios from 'axios';
import { useCategories, useTags } from './editing.hooks';

const Editing = ({ blogInfo }) => {
  const {
    factory,
    // coverImageURL,
    setCoverImageURL,
    // uploadCoverImage,
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

  // const onClickRemoveCoverImage = (e) => {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   setCoverImageURL(undefined);
  // };

  const allCategories = useCategories();
  const allTags = useTags();

  const mappedCategoriesCollection = useMemo(() => {
    return allCategories.map(fromServerMeta);
  }, [allCategories]);

  const mappedCategory = useMemo(() => {
    return fromServerMeta(category);
  }, [category]);

  const mappedTagsCollection = useMemo(() => {
    return allTags.map(fromServerMeta);
  }, [allTags]);

  const mappedTags = useMemo(() => {
    return tags.map(fromServerMeta);
  }, [tags]);

  const uploadFile = useCallback(async (file) => {
    const { uploadURL, downloadURL } = await api.blog.common.upload(file.name, file.type);
    await Axios.put(uploadURL, file, {
      headers: {
        'content-type': file.type,
        'x-oss-object-acl': 'public-read',
      },
    });
    return downloadURL;
  }, []);

  if (!process.browser) {
    return <></>;
  }

  return (
    <>
      <Styled.Content>
        {/*disable cover image*/}
        {/*<ImgCrop aspect={7} modalTitle="调整图片" modalOk="确认" modalCancel="返回">*/}
        {/*  <Upload*/}
        {/*    maxCount={1}*/}
        {/*    multiple={false}*/}
        {/*    showUploadList={false}*/}
        {/*    onChange={({ file }) => file.status === 'done' && uploadCoverImage(file.originFileObj)}*/}
        {/*  >*/}
        {/*    {coverImageURL ? (*/}
        {/*      <Styled.CoverImage style={{ backgroundImage: `url(${JSON.stringify(coverImageURL)})` }}>*/}
        {/*        <Button*/}
        {/*          htmlType="button"*/}
        {/*          size="large"*/}
        {/*          danger*/}
        {/*          type="link"*/}
        {/*          icon={<DeleteOutlined />}*/}
        {/*          onClick={onClickRemoveCoverImage}*/}
        {/*        />*/}
        {/*      </Styled.CoverImage>*/}
        {/*    ) : (*/}
        {/*      <Styled.CoverImagePlaceholder>+ 插入封面图</Styled.CoverImagePlaceholder>*/}
        {/*    )}*/}
        {/*  </Upload>*/}
        {/*</ImgCrop>*/}
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
          <TiEditor
            value={content}
            onChange={setContent}
            factory={factory}
            placeholder="请在此处开始撰写正文……"
            uploadFile={uploadFile}
          />
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
        <div className="btns">
          <Button type="primary" onClick={saveAndSubmit} disabled={operating}>
            发布
          </Button>
          <Button type="default" onClick={save} disabled={operating}>
            保存草稿
          </Button>
        </div>
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
