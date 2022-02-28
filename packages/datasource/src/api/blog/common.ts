import blogClient from '../blogClient';

export interface Principal {
  id: number;
  roles: string[];
  authorities: string[];
}

export interface FileAuth {
  downloadURL: string;
  uploadURL: string;
}

export function principal(): Promise<Principal> {
  return blogClient.get('/api/principal', {
    isDispatchApiError: ({ status }) => status !== 403 && status !== 401,
    isReturnErrorResponse: true,
  });
}

export function upload(filename: string, contentType: string): Promise<FileAuth> {
  return blogClient.post('/api/upload/image/auth', { filename, contentType });
}
