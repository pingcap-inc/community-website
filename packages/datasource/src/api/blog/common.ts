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
  // @ts-ignore
  return blogClient.get('/api/principal', {
    // @ts-ignore
    isDispatchApiError: ({ status }) => status !== 403 && status !== 401,
    // @ts-ignore
    isReturnErrorResponse: true,
  });
}

export function upload(filename: string, contentType: string): Promise<FileAuth> {
  return blogClient.post('/api/upload/image/auth', { filename, contentType });
}
