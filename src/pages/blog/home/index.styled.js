import styled from 'styled-components';
import { mixins, colors, Styled, constants } from '@tidb-community/ui';
import { Row, Col } from 'antd';

const { Content } = Styled;

export { Content };

export const Background = styled.div`
  background-color: ${colors.M2};
`;

export const Container = styled(Row).attrs({
  gutter: 24,
})`
  @media screen and (max-width: ${constants.breakPoints.md}) {
    padding: 1rem 0;
  }

  @media screen and (min-width: ${constants.breakPoints.md}) {
    padding: 2rem 0;
  }
`;

export const Start = styled(Col).attrs({
  sm: 24,
  md: 4,
})``;

export const Center = styled(Col).attrs({
  sm: 24,
  md: 14,
})``;

export const End = styled(Col).attrs({
  sm: 24,
  md: 6,
})``;

export const WriteBlog = styled.div`
  ${mixins.showOnDesktop()}
`;
