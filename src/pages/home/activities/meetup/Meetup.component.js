import React from 'react';
import dayjs from 'dayjs';
import { Badge } from 'antd';
import { colors } from '@tidb-community/ui';

import * as Styled from './meetup.styled';
import Anchor from '~/components/Anchor';

const Meetup = ({ title, status, type, date, link }) => {
  const dayObj = dayjs(date);
  const month = dayObj.format('MMM');
  const day = dayObj.format('D');

  return (
    <Anchor href={link}>
      <Styled.Container>
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
    </Anchor>
  );
};

export default Meetup;
