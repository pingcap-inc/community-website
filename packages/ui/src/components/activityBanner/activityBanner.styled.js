import styled from 'styled-components';
import { colors, mixins } from '../../index';

export const Banner = styled.div`
  ${mixins.typography('p2')};
  ${mixins.flexVerticalCenter()};
  justify-content: center;
  height: 32px;
  color: ${colors.M2};
  ${(props) => (props.$backgroundImage !== '' ? `background: url('${props.$backgroundImage}') center no-repeat;` : '')}
  ${(props) => (props.$backgroundColor !== '' ? `background-color: ${props.$backgroundColor};` : '')}
  background-size: cover;
  cursor: pointer;
  a {
    color: #ffffff;
  }
`;

export const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImgBtn = styled.img`
  margin-left: 1em;
`;
