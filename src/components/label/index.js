import styled, { css } from 'styled-components';
import { transparentize } from 'polished';

const Label = styled.span`
  display: inline-block;
  border-radius: 6px;
  padding: 2px 14px;
  font-size: 14px;
  ${({ $color }) => css`
    color: ${$color};
    background-color: ${transparentize(0.9, $color)};
  `}
`;

export default Label;
