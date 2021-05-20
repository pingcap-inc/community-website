import client from '../../../client';

export const uploadIncumbencyCert = ({ file, onUploadProgress }) => {
  if (file.size > 5 << 20) {
    return Promise.reject({
      detail: '上传图片大小需要限制在 5MB 以内',
    });
  }
  return client.post('/api/orgs/enroll/upload-incumbency-cert', file, {
    headers: {
      'Content-Disposition': `attachment; filename=${encodeURI(file.name)}`,
    },
    onUploadProgress,
  });
};
