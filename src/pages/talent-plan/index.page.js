import React from 'react';

import { CommunityHead } from '~/components';
import { CoreLayout } from '~/layouts';
import { getI18nProps } from '~/utils/i18n.utils';
import Banner from '~/pages/talent-plan/banner';
import { PageDataContext } from '~/context';

export const getServerSideProps = async (ctx) => {
  const i18nProps = await getI18nProps(['common', 'page-talent-plan'])(ctx);

  return {
    props: {
      ...i18nProps,
    },
  };
};

const Page = ({ data }) => (
  <PageDataContext.Provider value={{ data }}>
    <CommunityHead />
    <CoreLayout>
      <Banner />
    </CoreLayout>
  </PageDataContext.Provider>
);

export default Page;
