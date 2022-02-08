import { FC, HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { colors, mixins } from '@tidb-community/ui';

export const Container = styled.ul`
  ${mixins.reset()};
  ${mixins.typography('p2')};
  background: ${colors.M1};
  list-style: none;
  border: 1px solid ${colors.T2};
`;

export const Item = styled.li<FC<HTMLAttributes<HTMLDivElement>> & { isActive?: boolean; indent?: boolean }>`
  ${mixins.flexVerticalCenter()};
  ${mixins.verticalLineMiddle('2.5rem')};
  justify-content: space-between;
  padding: 0 1rem;
  cursor: pointer;

  &:hover {
    background: ${colors.M2};
  }

  ${(props) =>
    props.isActive &&
    css`
      cursor: default;
      border-left: 3px solid ${colors.B1};
      background: ${colors.M1} !important;
    `}

  ${(props) =>
    props.indent &&
    css`
      padding-left: 3rem;
    `}
`;
