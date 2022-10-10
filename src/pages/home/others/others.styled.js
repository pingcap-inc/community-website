import styled, { css } from 'styled-components';
import { Space } from 'antd';
import { colors, Styled } from '@tidb-community/ui';

import Anchor from '~/components/Anchor';

const { ModuleTitle, Section, Text } = Styled;

export { ModuleTitle, Text };

export const SmallerText = styled(Text)`
  font-size: 14px;
`;

export const Link = styled(Anchor)`
  display: inline-block;
  font-size: 16px;
  text-decoration: underline;
  &:hover {
    color: ${colors.B1};
    text-decoration: underline;
  }
`;

export const SmallerLink = styled(Link)`
  font-size: 14px;
`;

export const Container = styled(Section)`
  background-color: ${colors.M2};
`;

export const Subtitle = styled.span`
  font-size: 20px;
`;

export const LogoWrapper = styled.div`
  display: flex;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export const LogosBox = styled(Space)`
  margin-top: 2rem;

  ${(props) =>
    props.$isSmallScreen &&
    css`
      margin-bottom: 1rem;
    `}

  img {
    width: auto;
    height: 40px;
  }
`;

export const Divider = styled.hr`
  border: 0;
  border-bottom: 1px solid ${colors.T2};
  margin-top: 2rem;
  margin-bottom: 2rem;
`;
