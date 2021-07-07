import React from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { api } from '@tidb-community/datasource';
import { message } from 'antd';

import * as Styled from './form.styled';
import { errors as errorUtils } from '~/utils';

const Upload = ({ infoResp, lang, mutateInfo, slug }) => {
  const { data } = infoResp;

  const props = {
    listType: 'picture-card',
    showUploadList: false,

    beforeUpload: (file) => {
      const isJpgOrPng = ['image/jpeg', 'image/png'].includes(file.type);
      if (!isJpgOrPng) {
        message.error(lang.logoTypeError);
      }

      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        message.error(lang.logoSizeError);
      }

      return isJpgOrPng && isLt2M;
    },

    customRequest: ({ file, filename, onProgress, onSuccess, onError }) => {
      api.orgs.org
        .uploadLogo({ slug, file, onUploadProgress: onProgress })
        .then((resp) => {
          onSuccess();
          mutateInfo(
            {
              ...infoResp,
              data: {
                ...data,
                logo: resp.data.logo,
              },
            },
            false
          );
          message.success('更新成功');
        })
        .catch((err) => {
          onError(err);
          message.error(errorUtils.getFirstApiErrorMsg(err));
        });
    },
  };

  return (
    <Styled.Upload {...props}>
      {data.logo && <Styled.Logo alt={data.name} src={data.logo} />}
      <UploadOutlined />
    </Styled.Upload>
  );
};

export default Upload;
