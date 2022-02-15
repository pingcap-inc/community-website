import styled from 'styled-components';
import { colors, mixins } from '../../index';

export const Banner = styled.div`
  ${mixins.typography('p2')};
  ${mixins.flexVerticalCenter()};
  justify-content: center;
  height: 48px;
  color: ${colors.M2};
  ${(props) => (props.$backgroundImage !== '' ? `background: url('${props.$backgroundImage}') center no-repeat;` : '')}
  ${(props) => (props.$backgroundColor !== '' ? `background-color: ${props.$backgroundColor};` : '')}
  background-size: cover;
  cursor: pointer;
`;

export const ImgBtn = styled.img`
  margin-left: 1em;
`;
