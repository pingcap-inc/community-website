import styled from 'styled-components';

export const Container = styled.div.attrs({})`
  z-index: 1;
  position: fixed;
  right: 56px;
  top: 50%;
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
