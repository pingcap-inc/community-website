import Axios from 'axios';

export const uploadIncumbencyCert = ({ file, filename, onUploadProgress }) => {
  const formData = new FormData();
  formData.append(filename, file);
  return Axios.post('/api/orgs/enroll/upload-incumbency-cert', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    onUploadProgress,
  });
};
