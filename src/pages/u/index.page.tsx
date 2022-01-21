import * as React from 'react';
import { useContext, useEffect } from 'react';
import { AuthContext, MeContext } from '~/context';
import { useRouter } from 'next/router';

export default function ProfilePage() {
  const router = useRouter();
  const { login, isAnonymous } = useContext(AuthContext);
  const me = useContext(MeContext);
  const currentUsername = me?.meData?.username;
  useEffect(() => {
    router.push(`/u/${currentUsername}`);
  }, []);
  if (isAnonymous) {
    login();
    return null;
  }
  return <p>正在跳转至个人主页...</p>;
}
