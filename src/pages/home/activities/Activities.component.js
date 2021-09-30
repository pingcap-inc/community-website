import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

import * as Styled from './activities.styled';
import Activity from './activity';
import Meetup from './meetup';
import TwoColumnsSection from '~/layouts/twoColumnsSection';
import { Link } from '~/components';
import { PageDataContext } from '~/context';
import { link as linkUtils } from '~/utils';
import { useIsSmallScreen } from '~/hooks';

const Meetups = ({ onClick, meetups }) => (
  <>
    {meetups.map((item, idx) => {
      const props = {
        key: idx,
        ...item,
        onClick,
      };
      return <Meetup {...props} />;
    })}
  </>
);

const Activities = () => {
  const router = useRouter();
  const { data } = useContext(PageDataContext);
  const { isSmallScreen } = useIsSmallScreen();
  const { t } = useTranslation('page-home');

  const lang = t('activities', { returnObjects: true });
  const viewAllLang = t('common:viewAll');

  const onClick = (link) => (e) => {
    e.preventDefault();
    linkUtils.handleRedirect(router, link);
  };

  return (
    <Styled.Container isSmallScreen={isSmallScreen}>
      <TwoColumnsSection
        title={lang.title}
        leftPanel={
          <Styled.ActivitiesBox isSmallScreen={isSmallScreen}>
            {data.activities.map((item) => {
              const props = {
                key: item.id,
                ...item,
                onClick,
                isSmallScreen,
              };
              return <Activity {...props} />;
            })}
          </Styled.ActivitiesBox>
        }
        rightPanel={
          <>
            <Styled.Module>
              <Styled.ModuleTitle>
                {lang.meetupTitle}
                <Link href="https://tidb.io/events">{viewAllLang}</Link>
              </Styled.ModuleTitle>
              <Meetups onClick={onClick} meetups={data.meetups} />
            </Styled.Module>

            <Styled.Module>
              <Styled.ModuleTitle>
                {lang.devActivitiesTitle}
                <Link href="https://tidb.io/events">{viewAllLang}</Link>
              </Styled.ModuleTitle>
              <Meetups onClick={onClick} meetups={data.devActivities} />
            </Styled.Module>
          </>
        }
      />
    </Styled.Container>
  );
};

export default Activities;
