import styled from 'styled-components';
import { colors, mixins } from '@tidb-community/ui';

import { Content, Section, Title } from '~/pages/home/index.styled';
import { Row } from 'antd';

export { Content, Title };

export const Container = styled(Section)`
  && {
    ${mixins.responsive()};
  }
`;

export const Subtitle = styled.h2`
  font-size: 20px;
`;

export const More = styled.span`
  font-size: 16px;
  color: ${colors.B1};
`;

export const SubsectionHeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export const Text = styled.span`
  font-weight: lighter;
  font-size: 16px;
`;

export const Logo = styled.img`
  height: 57px;
`;

export const LogosBox = styled(Row)`
  padding-top: 2rem;
`;
