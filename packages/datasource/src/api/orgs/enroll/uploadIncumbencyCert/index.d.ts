import { ApiRequestFunction } from '../../../index';

type UploadIncumbencyCertParams = {
  file: string | Blob;
  onUploadProgress: (progress: number) => void;
};

type CertData = {
  cert_id: number;
};

export const uploadIncumbencyCert: ApiRequestFunction<UploadIncumbencyCertParams, CertData>;
