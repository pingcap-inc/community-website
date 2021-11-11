import styled from 'styled-components';
import { Col, Row as AntRow } from 'antd';
import { colors, Styled } from '@tidb-community/ui';

export const Container = styled(Styled.Section)`
  && {
    padding: 0;
  }
`;

export const Content = styled(Styled.Content)`
  position: relative;
  padding-top: 3rem;
  padding-bottom: 3rem;
`;

export const LabCard = styled.div`
  height: 100px;
  box-shadow: 1px 3px rgba(0, 0, 0, 0.2), 1px 1px rgba(0, 0, 0, 0.14), 2px 1px -1px rgba(0, 0, 0, 0.12);
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

export const Row = styled(AntRow)`
  width: 100%;
  align-items: center;
`;
