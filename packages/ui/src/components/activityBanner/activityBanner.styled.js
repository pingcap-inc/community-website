import styled from 'styled-components';
import { colors, mixins } from '../../index';

export const Banner = styled.div`
  background-image: url('${(props) => props.$backgroundImage}');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 48px;
  ${mixins.flexVerticalCenter()};
  justify-content: center;
  ${mixins.typography('p2')};
  color: ${colors.M2};
`;

export const ImgBtn = styled.img`
  cursor: pointer;
  transition: opacity 0.2s;
  margin-left: 1em;
  &:hover {
    opacity: 0.8;
  }
`;
