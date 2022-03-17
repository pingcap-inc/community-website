import React from 'react';
import dayjs from 'dayjs';
import { Badge } from 'antd';
import { colors } from '@tidb-community/ui';

import * as Styled from './meetup.styled';
import { useRouter } from 'next/router';
import { link as linkUtils } from '~/utils';

const Meetup = ({ title, link, status, type, date }) => {
  const router = useRouter();
  const dayObj = dayjs(date);
  const month = dayObj.format('MMM');
  const day = dayObj.format('D');
  const onClick = (link) => (e) => {
    e.preventDefault();
    linkUtils.handleRedirect(router, link);
  };

  return (
    <Styled.Container onClick={onClick(link)}>
      <Styled.Calendar>
        <Styled.CalendarHead>{month}</Styled.CalendarHead>
        <Styled.CalendarBody>
          {day}
          <Styled.Arrow />
          <Styled.OppsiteArrow />
        </Styled.CalendarBody>
      </Styled.Calendar>
      <Styled.Content>
        <h3>{title}</h3>
        <div>
          {status && <Badge color={colors.T3} text={status} />}
          {type && <Badge color={colors.T1} text={type} />}
        </div>
      </Styled.Content>
    </Styled.Container>
  );
};

export default Meetup;
