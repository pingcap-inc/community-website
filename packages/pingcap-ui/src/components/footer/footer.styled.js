import { Row, Col } from 'antd';
import styled from 'styled-components';

import * as colors from '../../colors';
import * as mixins from '../../mixins';

export const Container = styled.div`
  background: ${colors.M2};
`;

export const Content = styled.div`
  ${mixins.centerBlock()};
  ${mixins.responsive()};
  padding: 3rem 0;
`;

export const NavRow = styled(Row)`
  max-width: 750px;
`;

export const NavCol = styled(Col)``;

export const NavTitle = styled.h3`
  ${mixins.reset()};
  ${mixins.typography('h2')};
  margin-bottom: 2rem;
`;

export const NavItem = styled.div`
  ${mixins.typography('p1')};
  cursor: pointer;
  color: ${colors.B4};
  margin-bottom: 1rem;

  &:hover {
    color: ${colors.B1};
  }

  &:last-child {
    margin-bottom: 0;
  }
`;
