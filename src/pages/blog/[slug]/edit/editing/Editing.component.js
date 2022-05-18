import * as Styled from './editing.styled';
import TiEditor from '@pingcap-inc/tidb-community-editor';
import { Alert, Button, Radio, Input, message, notification, Spin } from 'antd';
import React, { useCallback, useMemo, useState } from 'react';
import { useEditContext, useEditMethods } from '../edit.context';
// import ImgCrop from 'antd-img-crop';
import { InfoCircleOutlined } from '@ant-design/icons';
import { api } from '@tidb-community/datasource';
import Axios from 'axios';
import { useCategories, useTags } from './editing.hooks';
import { usePrincipal } from '~/pages/blog/blog.hooks';
import { LoadingOutlined } from '@ant-design/icons';
import Anchor from '~/components/Anchor';

const spinIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const Editing = ({ blogInfo }) => {
  const {
    factory,
    // coverImageURL,
    // setCoverImageURL,
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

  const { save, saveAndSubmit, saveAndPublish, operating } = useEditMethods();

  const { hasAuthority } = usePrincipal();
  const hasPermission = hasAuthority('PUBLISH_POST');

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

  const [hanging, setHanging] = useState(false);

  const onAlert = useCallback((title, content) => {
    notification.warn({
      message: title,
      description: content,
    });
  }, []);

  const isCdnHost = useCallback((url) => {
    return /tidb-blog/.test(url);
  }, []);

  const setHang = useCallback((val) => {
    setHanging(val);
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
        {blogInfo?.status === 'PUBLISHED' ? <PublishedAlert /> : undefined}
        {blogInfo?.status === 'PENDING' ? <PendingAlert /> : undefined}
        <Styled.TitleInput placeholder="文章标题......" value={title} onChange={onTitleChange} />
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
        <Spin spinning={hanging} indicator={spinIcon}>
          <Styled.Editor>
            <TiEditor
              value={content}
              onChange={setContent}
              factory={factory}
              placeholder="请在此处开始撰写正文……"
              uploadFile={uploadFile}
              onAlert={onAlert}
              isCdnHost={isCdnHost}
              setHang={setHang}
            />
          </Styled.Editor>
        </Spin>
      </Styled.Content>
      <Styled.Footer>
        <Radio.Group onChange={(e) => setOrigin(e.target.value ? '' : false)} value={origin !== false}>
          <Radio value={false}>原创</Radio>
          <Radio value={true}>转载</Radio>
        </Radio.Group>
        {/*<Checkbox checked={origin === false} onChange={() => setOrigin(false)}>*/}
        {/*  原创*/}
        {/*</Checkbox>*/}
        {/*<Checkbox checked={origin !== false} onChange={() => setOrigin('')}>*/}
        {/*  转载自*/}
        {/*</Checkbox>*/}
      </Styled.Footer>
      <Styled.Definition>
        {origin !== false ? (
          <Input
            value={origin === false ? '' : origin}
            disabled={origin === false}
            onChange={onChangeOrigin}
            placeholder="请填写原文链接"
          />
        ) : (
          <div>
            <InfoCircleOutlined /> 申请原创将启用{' '}
            <Anchor href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</Anchor>{' '}
            版权协议，如果不是原创文章，请选择转载。
          </div>
        )}
      </Styled.Definition>
      <Styled.Actions>
        <div className="btns">
          {hasPermission ? (
            <Button type="primary" onClick={() => validationPublish(saveAndPublish)} loading={operating}>
              发布
            </Button>
          ) : (
            <Button type="primary" onClick={() => validationPublish(saveAndSubmit)} loading={operating}>
              提交
            </Button>
          )}
          <Button type="default" onClick={() => validationSaveDraft(() => save(true))} loading={operating}>
            保存草稿
          </Button>
        </div>
      </Styled.Actions>
    </>
  );
};

export const PublishedAlert = () => {
  return <Alert type="warning" message="您正在编辑一个已发布的文章，修改或重新提交会将该文章下线。" />;
};

export const PendingAlert = () => {
  return <Alert type="warning" message="您正在编辑一个审核中的文章，修改则需要重新提交审核。" />;
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
