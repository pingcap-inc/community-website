export interface Principal {
  id: number;
  roles: string[];
  authorities: string[];
}

export function principal(): Promise<Principal>;
