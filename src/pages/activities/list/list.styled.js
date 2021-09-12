import styled from 'styled-components';
import { Col } from 'antd';
import { Styled, mixins } from '@tidb-community/ui';

const { Content, Section, Title } = Styled;

export { Content, Title };

export const Container = styled(Section)`
  ${mixins.responsive()};
`;

export const DropdownWrapper = styled(Col).attrs({
  sm: 24,
  md: 6,
})`
  .ant-select {
    width: 100%;
  }
`;
