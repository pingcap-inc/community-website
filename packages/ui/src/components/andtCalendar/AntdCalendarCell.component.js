import React from 'react';
import { Popover } from 'antd';
import moment from 'moment';

import * as Styled from './AntdCalendarCell.styled';
import AntdCalendarCellCard from './AntdCalendarCellCard.component';

const AntdCalendarCell = ({ date, data }) => {
  return (
    <Styled.Wrapper>
      <Styled.Line />
      <Styled.Day>{date.format('DD')}</Styled.Day>
      <Styled.List>
        {data
          .filter((value) => {
            const startDate = moment(value.startDate);
            const endDate = moment(value.endDate);
            return date.isAfter(startDate) && date.isBefore(endDate);
          })
          .map((value, key) => (
            <Popover content={<AntdCalendarCellCard data={value} />} title="" trigger="click">
              <Styled.Event key={key}>{value.title}</Styled.Event>
            </Popover>
          ))}
      </Styled.List>
    </Styled.Wrapper>
  );
};

export default AntdCalendarCell;
