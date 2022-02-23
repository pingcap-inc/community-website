import styled from 'styled-components';
import { mixins } from '@tidb-community/ui';
import { Card as AntdCard } from 'antd';
import { borderRadius } from '../common.styled';

export const Container = styled.div`
  ${mixins.showOnDesktop()};
  ${borderRadius};
  ${mixins.anchor()};
  margin-top: 1rem;
`;

const iconSize = 16;
export const HeaderRight = styled.div`
  svg {
    width: ${iconSize}px;
    height: ${iconSize}px;
  }
`;

export const Card = styled(AntdCard)`
  ${borderRadius};
  ${mixins.anchor()};
  .ant-card-head-title {
    overflow: visible;
    white-space: unset;
  }
`;
