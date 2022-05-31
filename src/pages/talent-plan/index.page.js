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
    <CommunityHead
      title={'Talent Plan'}
      description={
        '以 Talent Plan 开源数据库开发课程为依托，联合优秀高校和企业，建设成对全国各高校数据库开发人才培养的最佳实践平台。既能帮助学习者掌握数据库开发的理论知识，进行实际数据库开发锻炼，又能给与学习者使用开源资源，开发开源软件的培养。'
      }
    />
    <CoreLayout>
      <Banner />
      <Stories />
      <Ranking />
      <Labs />
      <Institutes />
      <Team />
      <Participation />
      <NextSteps />
      <Organizers />
      <Others />
    </CoreLayout>
  </PageDataContext.Provider>
);

export default Page;
