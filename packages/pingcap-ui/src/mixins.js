import { css } from 'styled-components';

import * as colors from './colors';
import { responsiveWidths, breakPoints } from './constants';

export const typography = (level) => {
  const levels = {
    h0: css`
      font-size: 1.875rem;
      line-height: ${38 / 30};
      color: ${colors.F1};
      font-weight: 700;
      &:lang(zh-CN) {
        font-weight: 600;
      }
    `,

    h1: css`
      font-size: 1.5rem;
      line-height: ${32 / 24};
      color: ${colors.F1};
      font-weight: 600;
      &:lang(zh-CN) {
        font-weight: 400;
      }
    `,

    h2: css`
      font-size: 1.25rem;
      line-height: ${28 / 20};
      color: ${colors.F1};
      font-weight: 600;
      &:lang(zh-CN) {
        font-weight: 400;
      }
    `,

    h3: css`
      font-size: 1.125rem;
      line-height: ${26 / 18};
      color: ${colors.F1};
      font-weight: 600;
      &:lang(zh-CN) {
        font-weight: 400;
      }
    `,

    p1: css`
      font-size: 1rem;
      line-height: ${24 / 16};
      color: ${colors.F2};
      font-weight: 500;
      &:lang(zh-CN) {
        font-weight: 300;
      }
    `,

    p2: css`
      font-size: 0.875rem;
      line-height: ${22 / 14};
      color: ${colors.F2};
      font-weight: 500;
      &:lang(zh-CN) {
        font-weight: 300;
      }
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

export const size = (width, height = width) => css`
  width: ${width};
  height: ${height};
`;

export const responsive = () => css`
  ${centerBlock()};

  @media screen and (max-width: ${breakPoints.md}) {
    padding-left: 16px;
    padding-right: 16px;
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
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
`;
