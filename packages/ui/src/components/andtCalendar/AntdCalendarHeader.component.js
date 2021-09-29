import React from 'react';

import * as Styled from './AntdCalendarHeader.styled';

const AntdCalendarHeader = ({ value }) => {
  return (
    <Styled.Wrapper>
      {value.format('MMMM')} {value.year()}
    </Styled.Wrapper>
  );
};

export default AntdCalendarHeader;
