import styled, { css } from 'styled-components';
import { mixins } from '@tidb-community/ui';

export const Container = styled.div.attrs({})`
  ${mixins.transition()};
  z-index: 1;
  position: fixed;
  top: 50%;
  ${mixins.onDesktop(css`
    right: 56px;
  `)};
  ${mixins.onMobile(css`
    right: 8px;
  `)};
`;

export const Item = styled.div.attrs({})`
  text-align: center;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const mobileIconSize = 48;
export const ItemIcon = styled.div.attrs({})`
  ${mixins.onMobile(css`
    width: ${mobileIconSize}px;
    height: ${mobileIconSize}px;
  `)};
  img {
    width: 100%;
    height: 100%;
  }
`;

export const ItemLabel = styled.div.attrs({})`
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  /* identical to box height, or 175% */
  color: #ffffff;
  ${mixins.onMobile(css`
    font-size: 14px;
  `)};
`;
