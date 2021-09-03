import { css } from 'styled-components';

import * as colors from './colors';
import { responsiveWidths, breakPoints } from './constants';

export const typography = (level) => {
  const levels = {
    h0: css`
      font-size: 30px;
      line-height: ${38 / 30};
      color: ${colors.F1};
      font-weight: 700;
    `,

    h1: css`
      font-size: 24px;
      line-height: ${32 / 24};
      color: ${colors.F1};
      font-weight: 600;
    `,

    h2: css`
      font-size: 20px;
      line-height: ${28 / 20};
      color: ${colors.F1};
      font-weight: 600;
    `,

    h3: css`
      font-size: 18px;
      line-height: ${26 / 18};
      color: ${colors.F1};
      font-weight: 600;
    `,

    p1: css`
      font-size: 16px;
      line-height: ${24 / 16};
      color: ${colors.F2};
      font-weight: 400;
    `,

    p2: css`
      font-size: 14px;
      line-height: ${22 / 14};
      color: ${colors.F2};
      font-weight: 400;
    `,

    p3: css`
      font-size: 12px;
      line-height: ${22 / 14};
      color: ${colors.F2};
      font-weight: 400;
    `,
  };

  return levels[level];
};

export const reset = () => css`
  margin: 0;
  padding: 0;
`;

export const centerBlock = (width) => css`
  display: block;
  margin-left: auto;
  margin-right: auto;
  ${width &&
  css`
    width: ${width};
  `};
`;

export const verticalLineMiddle = (height = 0) => css`
  line-height: ${height};
  height: ${height};
`;

export const flexVerticalCenter = (type = 'block') => css`
  display: ${type === 'inline' ? 'inline-flex' : 'flex'};
  align-items: center;
`;

export const flexCenter = (type = 'block') => css`
  ${flexVerticalCenter(type)};
  justify-content: center;
`;

export const flexEnd = (type = 'block') => css`
  ${flexVerticalCenter(type)};
  justify-content: flex-end;
`;

export const flexStart = (type = 'block') => css`
  ${flexVerticalCenter(type)};
  justify-content: flex-start;
`;

export const size = (width, height = width) => css`
  width: ${width};
  height: ${height};
`;

export const responsive = () => css`
  ${centerBlock()};

  @media screen and (max-width: ${breakPoints.md}) {
    padding-right: 16px;
    padding-left: 16px;
  }

  @media screen and (min-width: ${breakPoints.md}) {
    max-width: ${responsiveWidths.md};
  }

  @media screen and (min-width: ${breakPoints.lg}) {
    max-width: ${responsiveWidths.lg};
  }

  @media screen and (min-width: ${breakPoints.xl}) {
    max-width: ${responsiveWidths.lx};
  }
`;

export const lineClamp = (lineNum) => css`
  display: -webkit-box;
  -webkit-line-clamp: ${lineNum};
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const logoTitle = (level) => css`
  ${reset()};
  ${typography(level)};
  ${flexVerticalCenter()};
  color: #172d72;
  font-family: 'PingFang SC', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
    'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
`;

export const resetList = () => css`
  ${reset()};
  list-style: none;
`;

export const resetLink = () => css`
  &,
  &:hover {
    color: ${colors.B1};
  }
`;

export const resetFontFamily = () => css`
  font-family: 'PingFang SC', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, 'Noto Sans',
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
`;
