import styled, { css } from 'styled-components';
import { mixins } from '@tidb-community/ui';

export const Container = styled.div.attrs({})`
  z-index: 1;
  position: fixed;
  top: 50%;
  ${mixins.onDesktop(css`
    right: 56px;
  `)};
  ${mixins.onMobile(css`
    right: 16px;
  `)};
`;

export const Item = styled.div.attrs({})`
  text-align: center;
  cursor: pointer;
`;

export const ItemIcon = styled.div.attrs({})``;

export const ItemLabel = styled.div.attrs({})`
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  /* identical to box height, or 175% */
  color: #ffffff;
`;
