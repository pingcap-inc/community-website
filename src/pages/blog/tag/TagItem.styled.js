import styled from 'styled-components';
import { colors, mixins } from '@tidb-community/ui';
import { Card as AntdCard } from 'antd';
import { borderRadius } from '../components/common.styled';

export const Card = styled(AntdCard)`
  ${borderRadius};
  transition: all 250ms;
  box-shadow: none;
  &:hover {
    box-shadow: 6px 6px 12px 12px ${colors.C2};
  }
`;

export const Title = styled.div`
  ${mixins.typography('h3')}
  a {
    color: ${colors.F1};
  }
`;

export const Description = styled.div`
  ${mixins.lineClamp(3)}
  ${mixins.typography('p2')}
  margin-top: 1rem;
`;

export const Footer = styled.div`
  ${mixins.typography('p2')}
  color: ${colors.C4};
  margin-top: 1rem;
`;
