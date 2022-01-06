import { createContext } from 'react';

interface MeData {
  id: number;
  username: string;
  avatar_url: string;
  org: Org;
  org_invitations?: OrgInvitationsEntity[] | null;
}
export interface Org {
  slug: string;
  role: string;
}
export interface OrgInvitationsEntity {
  id: number;
  org_name: string;
  org_slug: string;
  org_company: string;
  inviter_username: string;
  valid: boolean;
}

export const MeContext = createContext<{ meData: MeData; mutateMe: any; isMeValidating: boolean }>({
  meData: undefined,
  mutateMe: undefined,
  isMeValidating: undefined,
});

MeContext.displayName = 'MeContext';
