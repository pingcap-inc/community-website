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
`;

export const NavContainer = styled(Row)``;

export const NavCol = styled(Col)``;

export const NavTitle = styled.h3`
  ${mixins.reset()};
  ${mixins.typography('h2')};
`;

export const NavItem = styled.div`
  ${mixins.typography('p1')};
`;
