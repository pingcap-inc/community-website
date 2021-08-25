import styled from 'styled-components';
import { colors, mixins } from '@tidb-community/ui';

import { Section } from '~/pages/home/index.styled';
import { Row } from 'antd';

export const Container = styled(Section)`
  && {
    ${mixins.responsive()};
  }
`;

export const Subtitle = styled.span`
  font-size: 20px;
  font-weight: normal;
`;

export const Text = styled.div`
  font-weight: lighter;
  font-size: 16px;
`;

export const LinkText = styled.a`
  font-size: 16px;
  text-decoration: underline;
  color: ${colors.B1};

  &:hover {
    text-decoration: underline;
    color: inherit;
    cursor: pointer;
  }
`;

export const LogoWrapper = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export const Logo = styled.img`
  max-height: 40px;
`;

export const LogosBox = styled(Row)`
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export const Divider = styled.hr`
  border: 0;
  border-bottom: 1px solid ${colors.T2};
  margin-top: 2rem;
  margin-bottom: 2rem;
`;
