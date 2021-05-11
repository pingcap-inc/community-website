import client from '../../../client';

export const uploadIncumbencyCert = ({ file, filename, onUploadProgress }) => {
  const formData = new FormData();
  formData.append(filename, file);
  return client.post('/api/orgs/enroll/upload-incumbency-cert', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      'Content-Disposition': `attachment; filename=${filename}`,
    },
    onUploadProgress,
  });
};
