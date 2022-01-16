import React from 'react';

import { CommunityHead } from '~/components';
import { CoreLayout } from '~/layouts';
import { getI18nProps } from '~/utils/i18n.utils';
import Banner from '~/pages/talent-plan/banner';
import Institutes from '~/pages/talent-plan/institutes';
import { PageDataContext } from '~/context';
import Labs from '~/pages/talent-plan/labs';
import Team from '~/pages/talent-plan/team';
import Participation from '~/pages/talent-plan/participation';
import NextSteps from '~/pages/talent-plan/nextSteps';
import Organizers from '~/pages/talent-plan/organizers';
import Stories from '~/pages/talent-plan/stories';
import Others from '~/pages/talent-plan/others';
import Ranking from '~/pages/talent-plan/ranking';

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
      <Ranking />
      <Labs />
      <Institutes />
      <Team />
      <Participation />
      <NextSteps />
      <Organizers />
      <Others />
      <Stories />
    </CoreLayout>
  </PageDataContext.Provider>
);

export default Page;
