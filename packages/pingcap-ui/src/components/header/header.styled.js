import styled from 'styled-components';
import { Menu as AntMenu } from 'antd';

import * as mixins from '../../mixins';

console.log('responsive!!', mixins.responsive());

export const Container = styled.div`
  ${mixins.centerBlock()};
  ${mixins.responsive()};
  ${mixins.flexVerticalCenter()};
  justify-content: space-between;
`;

export const Logo = styled.div``;

export const Title = styled.h1`
  ${mixins.typography('h1')};
  cursor: pointer;

  img {
    ${mixins.size('45px', '52px')};
    margin-right: 0.5rem;
  }
`;

export const Menu = styled(AntMenu).attrs({
  mode: 'horizontal',
})``;
