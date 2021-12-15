import styled from 'styled-components';
import { colors } from '@tidb-community/ui';

export const Interaction = styled.div`
  margin-bottom: 18px;
  color: ${colors.F2};
  width: 28px;
  text-align: center;
  opacity: 0.6;
  transition: opacity 0.25s ease, color 0.25s ease;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
    color: ${colors.B1};
  }

  .anticon > svg {
    width: 28px;
    height: 28px;
  }
  .count {
    margin-top: 6px;
    line-height: 30px;
    font-size: 14px;
  }
`;
