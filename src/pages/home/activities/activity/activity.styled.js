import styled, { css } from 'styled-components';
import { Col, Row } from 'antd';
import { colors } from '@tidb-community/ui';

import { ModuleTitle, Text } from '~/pages/home/index.styled';

export { ModuleTitle, Text };

export const Container = styled(Row).attrs((props) => ({
  gutter: !props.$isSmallScreen && 64,
}))`
  cursor: pointer;
  padding: 1rem 0;
  border-bottom: 1px solid ${colors.T2};
  margin: 0 !important;

  h3 {
    font-weight: normal;
    margin-bottom: 0;
  }

  &:hover {
    border-color: ${colors.B1};

    h3 {
      color: ${colors.B1};
    }
  }

  &:first-child {
    padding-top: 0;
  }
`;

export const ImageWrapper = styled(Col).attrs({
  xs: 24,
  md: 9,
})`
  overflow: hidden;
  height: 150px;
`;

export const Content = styled(Col).attrs({
  xs: 24,
  md: 15,
})`
  ${(props) =>
    props.isSmallScreen &&
    css`
      padding-top: 1rem;
    `}
`;

export const Metadata = styled(Text)`
  margin-bottom: 2rem;
`;
