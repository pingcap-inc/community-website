import styled from 'styled-components';
import { Button } from 'antd';
import { colors } from '../../../src';

export const UserButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0) !important;
  padding: 0 !important;
  color: ${colors.F1};
`;
