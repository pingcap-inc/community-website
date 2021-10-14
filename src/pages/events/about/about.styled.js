import styled from 'styled-components';
import { Col, Row } from 'antd';
import { colors, mixins, Styled } from '@tidb-community/ui';

const { Content, Section, Title } = Styled;

export { Content, Title };

export const Container = styled(Section)`
  && {
    background: ${colors.M2};
  }
`;

export const LeftPanel = styled(Col).attrs({
  sm: { span: 24, order: 2 },
  md: { span: 12, order: 1 },
})``;

export const RightPanel = styled(Col).attrs({
  sm: { span: 24, order: 1 },
  md: { span: 12, order: 2 },
})``;

export const Desc = styled.div`
  margin-bottom: 4rem;

  p {
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const Card = styled(Row)`
  ${mixins.boxShadow()};
  border-radius: 6px;
  border: 1px solid ${colors.T2};
  background: ${colors.M1};
  overflow: hidden;
`;

export const CardImg = styled(Col).attrs((props) => ({
  span: props.$isVertical ? 24 : 12,
}))`
  min-height: 150px;
`;

export const CardInfo = styled(Col).attrs((props) => ({
  span: props.$isVertical ? 24 : 12,
}))`
  padding: 1rem 2rem;
  max-height: 250px;

  h3,
  p {
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 20px;
    font-weight: normal;
    line-height: 1.2;
    text-decoration: underline;
  }

  p {
    font-size: 14px;
    color: ${colors.F2};
  }
`;

export const CalendarCard = styled.div`
  ${mixins.boxShadow()};
  padding: 20px;
  border-radius: 6px;
  border: 1px solid ${colors.T2};
  background: ${colors.M1};
  overflow: hidden;
  .fc-button-primary {
    color: #1e2b37;
    background-color: rgba(0,0,0,0) !important;
    border-color: rgba(0,0,0,0) !important;
    &:hover {
      color: #1e2b37;
    }
  }
`;