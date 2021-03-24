import styled from 'styled-components';
import { Col } from 'antd';

import { mixins } from '@pingcap/pingcap-ui';

export const Container = styled.div`
  ${mixins.centerBlock()};
  ${mixins.responsive()};
  padding: 5rem 0;
`;

export const Header = styled(Col)`
  text-align: center;
`;

export const Title = styled.h2`
  ${mixins.reset()};
  ${mixins.typography('h1')};
  margin-bottom: 1rem;
`;

export const Desc = styled.p`
  ${mixins.reset()};
  ${mixins.typography('p1')};
  margin-bottom: 3rem;
`;
