import React from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

import * as Styled from './activities.styled';
import * as mock from './activities.mock';
import Activity from './activity';
import TwoColumnsLayout from '~/pages/home/twoColumsLayout';
import { link as linkUtils } from '~/utils';

const Activities = () => {
  const router = useRouter();
  const { t } = useTranslation('page-home');

  const lang = t('activities', { returnObjects: true });

  const onClick = (link) => (e) => {
    e.preventDefault();
    linkUtils.handleRedirect(router, link);
  };

  return (
    <Styled.Container>
      <TwoColumnsLayout
        title={lang.title}
        leftPanel={
          <>
            {mock.activities.map((activity, idx) => {
              const props = {
                key: idx,
                ...activity,
                onClick,
              };
              return <Activity {...props} />;
            })}
          </>
        }
        rightPanel={<>Right Panel</>}
      />
    </Styled.Container>
  );
};

export default Activities;
