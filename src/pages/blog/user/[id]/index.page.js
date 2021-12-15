import * as React from 'react';
import { useRouter } from 'next/router';
import { getI18nProps } from '~/utils/i18n.utils';
import { useEffect } from 'react';

export const getServerSideProps = async (ctx) => {
  const i18nProps = await getI18nProps(['common'])(ctx);

  const { id } = ctx.params;

  return {
    props: {
      ...i18nProps,
      id,
    },
  };
};

export default function UserIndexPage({ id }) {
  const router = useRouter();
  useEffect(() => {
    router.replace(`/blog/user/${id}/posts`);
  });
  return <></>;
}
