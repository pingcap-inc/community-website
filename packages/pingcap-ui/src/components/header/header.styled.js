import styled from 'styled-components';
import { Menu as AntMenu } from 'antd';

import * as mixins from '../../mixins';

export const Container = styled.div`
  ${mixins.centerBlock()};
  ${mixins.responsive()};
  ${mixins.flexVerticalCenter()};
  height: 84px;
  justify-content: space-between;
`;

export const Logo = styled.h1`
  ${mixins.reset()};
  ${mixins.typography('h1')};
  cursor: pointer;

  img {
    ${mixins.size('45px', '52px')};
    margin-right: 0.5rem;
  }
`;

export const Menu = styled(AntMenu).attrs({
  mode: 'horizontal'
})``;
