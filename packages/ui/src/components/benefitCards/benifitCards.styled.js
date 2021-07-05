import styled from 'styled-components';

import * as mixins from '../../mixins';
import { VI as colors } from '../../colors';

const CARD_WIDTH = 383;
const CARD_BORDER_RADIUS = 10;
const CARD_HEAD_HEIGHT = 64;
const CARD_BODY_HEIGHT = 336;

export const Card = styled.div`
  width: ${CARD_WIDTH}px;
  min-width: ${CARD_WIDTH}px;
  max-width: ${CARD_WIDTH}px;
  border-radius: ${CARD_BORDER_RADIUS}px;

  grid-row: auto;
  grid-column: auto;

  @media screen and (max-width: 413px) {
    width: unset;
    min-width: unset;
  }
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

  background-color: ${colors.B5};

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

    background-color: ${colors.B7};
    font-size: 12px;
    color: ${colors.M1};
    line-height: 18px;
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

  ${mixins.typography('p1')};

  @media screen and (max-width: 810px) {
    height: unset;
  }
`;

export const Details = styled.ul`
  ${mixins.resetList()};
`;

export const Detail = styled.li`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  max-width: max-content;

  margin-bottom: 1rem;

  // round dot
  &::before {
    display: inline-block;
    content: '';
    width: 9px;
    min-width: 9px;
    height: 9px;
    border-radius: 50%;
    margin: 7.5px 20px 0 0; // 7.5 === (24 - 9) / 2

    background-color: ${colors.B5};
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
    background-color: ${colors.B6};
    color: ${colors.M1};

    transition: opacity 0.2s ease, transform 0.2s ease;
    transform-origin: top center;
  }

  ${({ $tooltips }) =>
    $tooltips &&
    `
    color: ${colors.B5};
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
  background-color: ${colors.B5};
  text-align: center;
  line-height: 21px;
`;

export const Cards = styled.div`
  display: grid;
  max-width: 1210px;
  width: max-content;
  margin: auto;
  @media screen and (min-width: 1270px) {
    grid-template-rows: repeat(2, auto);
    grid-template-columns: repeat(3, auto);
    grid-column-gap: 30px;
    grid-row-gap: 3em;
  }
  @media screen and (min-width: 811px) and (max-width: 1269px) {
    grid-template-rows: repeat(3, auto);
    grid-template-columns: repeat(2, auto);
    grid-column-gap: 15px;
    grid-row-gap: 2em;
  }
  @media screen and (max-width: 810px) {
    grid-template-rows: repeat(6, auto);
    grid-template-columns: repeat(1, auto);
    grid-column-gap: 0;
    grid-row-gap: 2em;
  }
  @media screen and (max-width: 413px) {
    width: unset;
    padding: 0 15px;
  }
`;
