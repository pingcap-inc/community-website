import { useContext } from 'react';
import { MeContext } from '~/context/me.context';

export function useCurrentLogonUser(username: string): boolean | null {
  const me = useContext(MeContext);
  const currentUsername = me?.meData?.username;
  if (currentUsername === undefined) {
    return null;
  } else {
    return username === currentUsername;
  }
}
