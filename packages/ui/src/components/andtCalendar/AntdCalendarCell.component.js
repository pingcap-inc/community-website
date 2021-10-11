import React from 'react';
import { Popover } from 'antd';
import moment from 'moment';

import * as Styled from './AntdCalendarCell.styled';
import AntdCalendarCellCard from './AntdCalendarCellCard.component';
import { getColorByType } from './utils';

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
            return (
              date.isSame(startDate) || date.isSame(endDate) || (date.isAfter(startDate) && date.isBefore(endDate))
            );
          })
          .map((value, key) => {
            const startDate = moment(value.startDate);
            const isStartDate = date.format('YYYYMMDD') === startDate.format('YYYYMMDD');
            const backgroundColor = `${getColorByType(value.type)}1E`;
            return (
              <Popover key={key} content={<AntdCalendarCellCard data={value} />} title="" trigger="click">
                <Styled.Event style={{ backgroundColor }}>
                  <Styled.EventInner>{isStartDate ? value.title : ''}</Styled.EventInner>
                </Styled.Event>
              </Popover>
            );
          })}
      </Styled.List>
    </Styled.Wrapper>
  );
};

export default AntdCalendarCell;
