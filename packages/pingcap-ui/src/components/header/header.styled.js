import styled from 'styled-components';
import { Menu as AntMenu } from 'antd';

import * as mixins from '../../mixins';

export const Container = styled.div`
  ${mixins.flexVerticalCenter()};
  justify-content: space-between;
`;

export const Logo = styled.div``;

export const Title = styled.h1``;

export const Menu = styled(AntMenu).attrs({
  mode: 'horizontal',
})``;
