import React from 'react';
import { Button, Space } from 'antd';
import { CaretLeftOutlined, AimOutlined, CaretRightOutlined } from '@ant-design/icons';

import * as Styled from './AntdCalendarHeader.styled';

const AntdCalendarHeader = ({ value, handlePrev, handleNext, handleNow }) => {
  return (
    <Styled.Wrapper>
      <Styled.Start>
        {value.format('MMMM')} {value.year()}
      </Styled.Start>
      <Styled.End>
        <Space>
          <Button onClick={handlePrev}>
            <CaretLeftOutlined />
          </Button>
          <Button onClick={handleNow}>
            <AimOutlined />
          </Button>
          <Button onClick={handleNext}>
            <CaretRightOutlined />
          </Button>
        </Space>
      </Styled.End>
    </Styled.Wrapper>
  );
};

export default AntdCalendarHeader;
