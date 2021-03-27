import styled from 'styled-components';
import { Menu as AntMenu } from 'antd';

import * as mixins from '../../mixins';

export const Container = styled.div`
  ${mixins.responsive()};
  ${mixins.flexVerticalCenter()};
  height: 84px;
  justify-content: space-between;
`;

export const Logo = styled.h1`
  ${mixins.logoTitle('h1')};
  cursor: pointer;

  img {
    ${mixins.size('32px', '37px')};
    margin-right: 0.3rem;
  }
`;

export const Menu = styled(AntMenu).attrs({
  mode: 'horizontal'
})``;
