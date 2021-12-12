export interface Principal {
  id: number;
  roles: string[];
  authorities: string[];
}

export interface FileAuth {
  downloadURL: string;
  uploadURL: string;
}

export function principal(): Promise<Principal>;

export function upload(filename: string, contentType: string): Promise<FileAuth>;
