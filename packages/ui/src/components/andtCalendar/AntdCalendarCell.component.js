import React from 'react';

import * as Styled from './AntdCalendarCell.styled';

const AntdCalendarCell = ({ date, data }) => {
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

export default AntdCalendarCell;
