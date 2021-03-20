import { css } from 'styled-components';

import * as colors from './colors';

export const typography = (level) => {
  const levels = {
    h0: css`
      font-size: 1.875rem;
      line-height: 38/30;
      color: ${colors.F1};
      font-weight: 700;
      &:lang(zh-CN) {
        font-weight: 600;
      }
    `,

    h1: css`
      font-size: 1.5rem;
      line-height: 32/24;
      color: ${colors.F1};
      font-weight: 600;
      &:lang(zh-CN) {
        font-weight: 400;
      }
    `,

    h2: css`
      font-size: 1.25rem;
      line-height: 28/20;
      color: ${colors.F1};
      font-weight: 600;
      &:lang(zh-CN) {
        font-weight: 400;
      }
    `,

    h3: css`
      font-size: 1.25rem;
      line-height: 26/18;
      color: ${colors.F1};
      font-weight: 600;
      &:lang(zh-CN) {
        font-weight: 400;
      }
    `,

    p1: css`
      font-size: 1rem;
      line-height: 24/16;
      color: ${colors.F2};
      font-weight: 500;
      &:lang(zh-CN) {
        font-weight: 300;
      }
    `,

    p2: css`
      font-size: 0.875rem;
      line-height: 22/14;
      color: ${colors.F2};
      font-weight: 500;
      &:lang(zh-CN) {
        font-weight: 300;
      }
    `,
  };

  return levels[level];
};

export const reset = () => `
  margin: 0;
  padding: 0;
`;

export const centerBlock = (width) => `
  display: block;
  margin-left: auto;
  margin-right: auto;
  ${width && 'width: ' + width};
`;

export const verticalLineMiddle = (height = 0) => `
  line-height: ${height};
  height: ${height};
`;

export const flexVerticalCenter = (type = 'block') => `
  display: ${type === 'inline' ? 'inline-flex' : 'flex'};
  align-items: center;
`;

export const flexCenter = (type = 'block') => `
  ${flexVerticalCenter(type)};
  justify-content: center;
`;

export const size = (width, height = width) => `
  width: ${width};
  height: ${height};
`;
