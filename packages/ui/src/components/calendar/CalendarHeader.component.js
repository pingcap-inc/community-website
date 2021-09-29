import React from 'react';

import * as Styled from './CalendarHeader.styled';

const CalendarHeader = ({ value }) => {
  return (
    <Styled.Wrapper>
      {value.format('MMMM')} {value.year()}
    </Styled.Wrapper>
  );
};

export default CalendarHeader;
