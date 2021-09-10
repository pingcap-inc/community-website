import styled from 'styled-components';
import { colors, mixins } from '@tidb-community/ui';

import logoSvg from '@/public/images/tidb-logo.svg?url';
import { SIZES } from '~/theme';

export const Container = styled.div`
  ${mixins.flexCenter()};
  background-color: ${({ $size }) => ($size === SIZES.small ? 'white' : colors.M2)};
  min-height: 100vh;
`;

export const Main = styled.main`
  box-sizing: content-box;
  padding: 24px;
  border: 1px solid #ededed;
  border-radius: 4px;
  background-color: ${colors.M1};
  width: 360px;
  ${({ $size }) =>
    $size === SIZES.small &&
    `
    border: none;
    padding: 12px 12px 64px;
  `}
`;

export const Logo = styled.img.attrs({ alt: 'logo', src: logoSvg })`
  display: block;
  margin: 0 auto;
`;

export const Title = styled.h2`
  ${mixins.typography('h2')};
  text-align: center;
  margin: 24px 0 0;
`;

export const SubTitle = styled.p`
  ${mixins.typography('p')};
  text-align: center;
  margin: 0 0 32px;
`;
