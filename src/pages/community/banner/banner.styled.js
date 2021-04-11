import styled, { css } from 'styled-components';
import { colors, mixins } from '@tidb-community/ui';

import { bgHeight } from './banner.constants';

export const Background = styled.div`
  ${mixins.size('100%', `${bgHeight}px`)};
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: -1;
`;

export const Content = styled.div`
  ${mixins.responsive()};
  ${mixins.flexCenter()};
  flex-direction: column;
  height: ${bgHeight}px;

  h2,
  h3,
  p {
    text-align: center;
    ${mixins.reset()};
  }

  h2 {
    font-size: 48px;
    line-height: 1;
    color: ${colors.M1};
    margin-bottom: 1.5rem;
  }

  p {
    ${mixins.typography('p1')}
    color: ${colors.M1};
  }
`;

export const NavDesc = styled.div`
  margin-top: 0.2rem;
  text-transform: uppercase;
`;

export const NavCard = styled.div`
  ${mixins.flexCenter()};
  ${mixins.size('188px', '100px')};
  padding: 0 1rem;
  flex-direction: column;
  background: ${colors.M1};
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.08);
  border-radius: 6px;
  margin-right: 2rem;
  cursor: pointer;
  text-align: center;

  &:last-child {
    margin-right: 0 !important;
  }

  h3 {
    ${mixins.typography('h2')};
    position: relative;

    svg {
      ${mixins.size('16px')};
      position: absolute;
      top: 0;
      right: -18px;
      fill: ${colors.F1};
    }
  }

  &:hover {
    background-color: ${colors.B1};

    h3,
    ${NavDesc} {
      color: ${colors.M1} !important;

      svg {
        fill: ${colors.M1};
      }
    }
  }
`;

export const Navs = styled.div`
  ${mixins.flexCenter()};
  position: absolute;
  bottom: -50px;
`;

export const Container = styled.div`
  position: relative;
  margin-bottom: 50px;

  ${(props) =>
    props.md &&
    css`
      ${NavCard} {
        width: 150px;
        margin-right: 1rem;
      }
    `}

  ${(props) =>
    props.sm &&
    css`
      margin-bottom: 40px;

      ${Navs} {
        box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.08);
        border-radius: 6px;
        bottom: -40px;
      }

      ${NavCard} {
        ${mixins.size('85px', '80px')};
        box-shadow: none;
        border-radius: 0;
        margin-right: 0;
        border-right: 1px solid ${colors.T2};

        h3 {
          ${mixins.typography('p1')};
          font-weight: 600;
          color: ${colors.F1};
          line-height: 1;

          svg {
            ${mixins.size('14px')};
            top: -3px;
            right: -15px;
          }
        }
      }

      ${NavDesc} {
        margin-top: 0;
        line-height: 1.2;

        span {
          display: none;
        }
      }
    `}
`;
