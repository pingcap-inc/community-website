import { useContext } from 'react';
import { MeContext } from '~/context/me.context';

export function useCurrentLogonUser(username: string): boolean {
  const me = useContext(MeContext);
  const currentUsername = me?.meData?.username;
  const isCurrentLogonUser: boolean = username === currentUsername;
  return isCurrentLogonUser;
}
