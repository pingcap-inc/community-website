import React, { useContext } from 'react';

import Apply from './Apply.component';
import { AuthContext } from '~/context';
import { CommunityHead } from '~/components';
import { getI18nProps } from '~/utils/i18n.utils';
import { title, description } from './apply.data';

export const getStaticProps = async (ctx) => {
  const i18nProps = await getI18nProps(['common'])(ctx);

  return {
    props: {
      ...i18nProps,
    },
  };
};

const PageContent = () => {
  const { isAnonymous, login } = useContext(AuthContext);

  if (isAnonymous) {
    login();
    return null;
  }

  return <Apply />;
};

const Page = () => (
  <>
    <CommunityHead title={title} description={description} />
    <PageContent />
  </>
);

export default Page;
