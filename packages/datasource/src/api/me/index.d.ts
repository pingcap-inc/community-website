import { ApiRequestFunction } from '../index';

type MeData = {
  id: number;
  username: string;
  avatar_url: string;
  org: {
    slug: string;
    role: string;
  };
  org_enroll: {
    audit_status: number;
    audit_status_display: string;
    audit_reason: string;
  };
};

export const me: ApiRequestFunction<void, MeData>;
