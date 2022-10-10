import React, { useContext } from 'react';

import TwoColumnsSection from '~/layouts/twoColumnsSection';
import { Link } from '~/components';
import { PageDataContext } from '~/context';
import { useIsSmallScreen } from '~/hooks';

import * as Styled from './activities.styled';
import Activity from './activity';
import Meetup from './meetup';

const Meetups = ({ meetups }) => (
  <>
    {meetups.map((item, idx) => {
      const props = {
        key: idx,
        ...item,
      };
      return <Meetup {...props} />;
    })}
  </>
);

const Activities = () => {
  const { data } = useContext(PageDataContext);
  const { isSmallScreen } = useIsSmallScreen();

  return (
    <Styled.Container isSmallScreen={isSmallScreen}>
      <TwoColumnsSection
        title={'活动'}
        leftPanel={
          <Styled.ActivitiesBox isSmallScreen={isSmallScreen}>
            {data.activities.map((item) => {
              const props = {
                key: item.id,
                ...item,
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
                Meetup 相关活动专区
                <Link href="/events?category=meetup#all-events">查看全部</Link>
              </Styled.ModuleTitle>
              <Meetups meetups={data.meetups} />
            </Styled.Module>

            <Styled.Module>
              <Styled.ModuleTitle>
                开发者活动/竞赛专区
                <Link href="/events?category=开发者活动%2F竞赛#all-events">查看全部</Link>
              </Styled.ModuleTitle>
              <Meetups meetups={data.devActivities} />
            </Styled.Module>
          </>
        }
      />
    </Styled.Container>
  );
};

export default Activities;
