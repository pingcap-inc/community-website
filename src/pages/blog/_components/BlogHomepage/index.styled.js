import styled from 'styled-components';
import { colors, constants, mixins, Styled } from '@tidb-community/ui';
import { Col, Row } from 'antd';

const { Content } = Styled;

export { Content };

const headerHeightPx = 56;
const topPx = headerHeightPx + 32;

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

export const Start = styled(Col).attrs(({ $forTag }) => ({
  sm: 24,
  md: $forTag ? 6 : 4,
}))`
  position: sticky !important;
  top: ${topPx}px;
  height: 100%;
`;

export const Center = styled(Col).attrs(({ $forTag }) => ({
  sm: 24,
  md: $forTag ? 12 : 14,
}))``;

export const End = styled(Col).attrs({
  sm: 24,
  md: 6,
})`
  position: sticky !important;
  top: ${topPx}px;
  height: 100%;
`;

export const Breadcrumb = styled.div`
  padding-top: 2rem;
`;

export const WriteBlog = styled.div`
  ${mixins.showOnDesktop()}
`;
