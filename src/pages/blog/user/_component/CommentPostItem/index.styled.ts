import styled from 'styled-components';
import { mixins } from '@tidb-community/ui';
import { Card as AntdCard } from 'antd';
import { borderRadiusSize } from '~/pages/blog/_components/common.styled';

export const Container = styled(AntdCard)`
  ${borderRadiusSize};
  ${mixins.anchor()};
`;

export const Header = styled.div`
  font-size: 16px;
`;

export const Content = styled.div`
  font-size: 16px;
  margin-top: 0.5rem;
`;
