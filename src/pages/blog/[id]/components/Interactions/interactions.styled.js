import styled from 'styled-components';
import { colors } from '@tidb-community/ui';

export const Interaction = styled.div`
  margin-bottom: 18px;
  color: ${colors.F2};
  width: 28px;
  text-align: center;
  opacity: 0.6;

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
