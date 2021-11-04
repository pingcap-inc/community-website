import styled from 'styled-components';
import { Col } from 'antd';
import { colors, Styled } from '@tidb-community/ui';

export const Container = styled(Styled.Section)`
  && {
    padding: 0;
  }
`;

export const Content = styled(Styled.Content)`
  position: relative;
  padding: 5rem 1rem 7.5rem;
`;

export const LabCard = styled.div`
  height: 100px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  background-color: ${colors.M2};
  padding: 1rem;
  margin-bottom: 1rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const LabCardImgWrapper = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LabCardTitle = styled.div`
  && {
    text-align: center;
    color: ${colors.F1};
  }
`;
