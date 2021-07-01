import styled from 'styled-components';

import * as mixins from '../../mixins';
import { V4 as colors } from '../../colors';

const COLOR_YELLOW = '#ce9f37';
const COLOR_DARKBLUE = '#190f4b';
const COLOR_PURPLE = '#4f38c3';

const CARD_WIDTH = 383;
const CARD_BORDER_RADIUS = 10;
const CARD_HEAD_HEIGHT = 64;
const CARD_BODY_HEIGHT = 336;

export const Card = styled.div`
  width: ${CARD_WIDTH}px;
  min-width: ${CARD_WIDTH}px;
  max-width: ${CARD_WIDTH}px;
  border-radius: ${CARD_BORDER_RADIUS}px;

  margin-bottom: ${($size) => ($size === 'lg' ? 3 : 2)}em;

  grid-row: auto;
  grid-column: auto;
`;

export const CardHead = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  height: ${CARD_HEAD_HEIGHT}px;
  padding: 0 35px;

  overflow: hidden;
  border-top-left-radius: ${CARD_BORDER_RADIUS}px;
  border-top-right-radius: ${CARD_BORDER_RADIUS}px;

  background-color: ${COLOR_YELLOW};

  color: ${colors.M1};
  font-size: 20px;
  line-height: ${CARD_HEAD_HEIGHT}px;

  // new tag
  &::before {
    position: absolute;
    display: block;
    top: 24px;
    left: 0;
    width: 60px;
    height: 18px;

    transform: rotate(-45deg);
    transform-origin: left bottom;

    background-color: ${COLOR_PURPLE};
    font-size: 12px;
    color: ${colors.M1};
    line-height: 12px;
    text-align: center;
  }

  ${({ $tag }) =>
    $tag &&
    `
    &::before {
      content: ${JSON.stringify($tag)};
    }
  `}
`;

export const CardBody = styled.div`
  box-sizing: border-box;
  height: ${CARD_BODY_HEIGHT}px;
  padding: 2.5rem;

  border-bottom-left-radius: ${CARD_BORDER_RADIUS}px;
  border-bottom-right-radius: ${CARD_BORDER_RADIUS}px;

  background-color: ${colors.M1};

  ${mixins.typography('p1')}
`;

export const Details = styled.ul`
  ${mixins.resetList()};
`;

export const Detail = styled.li`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  margin-bottom: 1rem;

  // round dot
  &::before {
    display: inline-block;
    content: '';
    width: 9px;
    height: 9px;
    border-radius: 50%;
    margin-right: 20px;

    background-color: ${COLOR_YELLOW};
  }

  // tooltips
  &::after {
    position: absolute;
    z-index: 1;
    display: block;
    width: 265px;
    box-sizing: border-box;
    padding: 1rem;
    top: 28px;

    border-radius: 8px;
    opacity: 0;
    transform: scale(0.9);
    pointer-events: none;

    ${mixins.typography('p3')};
    background-color: ${COLOR_DARKBLUE};
    color: ${colors.M1};

    transition: opacity 0.2s ease, transform 0.2s ease;
    transform-origin: top center;
  }

  ${({ $tooltips }) =>
    $tooltips &&
    `
    color: ${COLOR_YELLOW};
    cursor: pointer;
    text-decoration: underline;
    
    &::after {
      content: ${JSON.stringify($tooltips)};
    }
    
    &:hover {
      &::after {
        opacity: .85;
        transform: scale(1);
      }
    }
  `}
`;

export const DetailTag = styled.span`
  display: inline-block;
  width: 47px;
  height: 21px;
  margin-left: 12px;

  border-radius: 10px;

  font-size: 12px;
  color: ${colors.M1};
  background-color: ${COLOR_YELLOW};
  text-align: center;
  line-height: 21px;
`;

export const Cards = styled.div`
  display: grid;
  max-width: 1210px;
  width: max-content;
  grid-template-rows: repeat(${({ $size }) => ($size === 'lg' ? 2 : $size === 'md' ? 3 : 6)}, auto);
  grid-template-columns: repeat(${({ $size }) => ($size === 'lg' ? 3 : $size === 'md' ? 2 : 1)}, auto);
  grid-column-gap: ${({ $size }) => ($size === 'lg' ? 30 : $size === 'md' ? 15 : 0)}px;
  margin: auto;
`;
