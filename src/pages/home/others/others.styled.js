import styled, { css } from 'styled-components';
import { Row } from 'antd';
import { Styled, colors, mixins } from '@tidb-community/ui';

import { Link as RawLink } from '~/components';

const { ModuleTitle, Section, Text } = Styled;

export { ModuleTitle, Text };

export const SmallerText = styled(Text)`
  font-size: 14px;
`;

export const Link = styled(RawLink)`
  display: inline-block;
`;

export const SmallerLink = styled(Link)`
  font-size: 14px;
`;

export const Container = styled(Section)`
  && {
    ${mixins.responsive()};
  }
`;

export const Subtitle = styled.span`
  font-size: 20px;
`;

export const LogoWrapper = styled.div`
  display: flex;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export const Logo = styled.img`
  max-height: ${(props) => props.height}px;
`;

export const LogosBox = styled(Row)`
  margin-top: 2rem;

  ${(props) =>
    props.$isSmallScreen &&
    css`
      margin-bottom: 1rem;
    `}
`;

export const Divider = styled.hr`
  border: 0;
  border-bottom: 1px solid ${colors.T2};
  margin-top: 2rem;
  margin-bottom: 2rem;
`;
