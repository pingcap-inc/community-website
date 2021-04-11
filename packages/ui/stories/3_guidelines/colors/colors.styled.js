import styled, { css } from 'styled-components';
import { colors, mixins } from '@tidb-community/ui';

export const Item = styled.div`
  ${mixins.flexVerticalCenter()};
`;

export const Box = styled.div`
  ${mixins.size('50px')};
  background: ${(props) => props.color};

  ${(props) =>
    props.border &&
    css`
      border: 1px solid ${colors.T2};
    `}
`;

export const Text = styled.ul`
  flex: 1;
  margin-left: 16px;
  color: ${colors.F2};
  list-style: none;
`;
