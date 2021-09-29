import React from 'react';

import * as Styled from './CalendarCell.styled';

const CalendarCell = ({ date, data }) => {
  return (
    <Styled.Wrapper>
      <div>
        {data
          .filter((value) => value.date === date.format('YYYY-MM-DD'))
          .map((value, key) => (
            <div key={key}>{value.title}</div>
          ))}
      </div>
    </Styled.Wrapper>
  );
};

export default CalendarCell;
