import * as polished from 'polished';
import styled, { css } from 'styled-components';
import { Button, Carousel as AntCarousel, Col, Row, Tooltip } from 'antd';
import { colors, mixins, Styled } from '@tidb-community/ui';

import LogoSvg from './logo.svg';
import Anchor from '~/components/Anchor';

const githubBlack = '#24292e';

export const Container = styled(Styled.Section)`
  && {
    color: ${colors.M1};
    background: ${colors.B4};
    padding: 0;
  }
`;

export const Content = styled(Styled.Content)`
  position: relative;
  padding: 5rem 1rem 7.5rem;

  ${(props) =>
    props.isSmallScreen &&
    css`
      padding: 0 0 5.5rem;

      ${LeftPanel} {
        display: flex;
        flex-direction: column;
        align-items: center;

        > * {
          display: block;
        }

        p {
          text-align: center;
        }

        .ant-btn-primary {
          margin-bottom: 2rem;
        }
      }

      ${Intro} {
        width: 80%;
        text-align: center;
      }
    `}
`;

export const LeftPanel = styled(Col).attrs({
  xs: {
    order: 2,
  },
  sm: {
    order: 2,
  },
  md: {
    order: 1,
    span: 10,
  },
  lg: {
    order: 1,
    span: 8,
  },
})`
  height: 250px;
  display: flex;
  flex-direction: column;
  align-content: space-between;

  & > * {
    flex: 1;
  }
`;

export const RightPanel = styled(Col).attrs({
  xs: {
    order: 1,
    span: 24,
  },
  sm: {
    order: 1,
    span: 24,
  },
  md: {
    order: 2,
    span: 14,
  },
  lg: {
    order: 2,
    span: 16,
  },
})``;

export const Logo = styled(LogoSvg)`
  min-height: 3rem;
  max-width: 350px;
`;

export const Intro = styled.h2`
  && {
    ${mixins.reset()};
    font-size: 16px;
    color: ${colors.F1};
    font-weight: normal;
    margin-bottom: 2rem;
  }
`;

export const TryButton = styled(Button).attrs({
  type: 'primary',
  size: 'large',
})`
  padding: 0 2rem !important;

  span {
    font-size: 18px;
  }
`;

export const StarButton = styled.span`
  position: relative;
  background: linear-gradient(top to bottom, ${colors.M1}, ${colors.M2});
  box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
  display: inline-block;
  border-radius: 4px;
  font-weight: bold;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif;
  cursor: pointer;

  .anticon {
    font-size: 16px;
    margin-right: 5px;
  }

  &,
  .ant-tooltip-inner {
    ${mixins.verticalLineMiddle('26px')};
    font-size: 14px;
    color: ${githubBlack};
    min-height: auto;
    padding: 0 8px;
  }
`;

export const TooltipContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 6px;
`;

export const StarButtonTooltip = styled(Tooltip).attrs({
  visible: true,
  color: colors.M2,
})`
  z-index: 10;
`;

export const NavItem = styled(Anchor)`
  ${mixins.flexCenter()};
  height: 40px;
  border-right: 1px solid ${colors.T2};
  cursor: pointer;

  &:last-child {
    border-right: none;
  }

  svg {
    height: 40px;
    margin-right: 40px;
  }

  span {
    font-size: 18px;
    color: ${colors.F1};
  }
`;

export const Navs = styled(Row).attrs({
  justify: 'center',
  align: 'middle',
})`
  ${mixins.boxShadow()};
  background: ${colors.M1};
  position: absolute;
  bottom: -45px;
  left: 0;
  right: 0;
  padding: 25px 0;
  margin: 0 16px;
  border-radius: 10px;
  border: 1px solid ${colors.T2};

  ${(props) =>
    props.$isSmallScreen &&
    css`
      padding: 12px 0;

      ${NavItem} {
        height: 66px;
        flex-direction: column;
        border-right: none;

        svg {
          height: 30px;
          margin-right: 0;
          margin-bottom: 12px;
        }

        span {
          font-size: 14px;
          line-height: 1;
        }
      }
    `};
`;

export const Promotion = styled.div`
  height: ${(props) => `${props.height}px`};
  background: ${(props) => `url(${props.image}) center center no-repeat`};
  background-size: cover;
  position: relative;
  width: 100%;
`;

export const PromotionOverlay = styled.div`
  ${mixins.lineClamp()};
  ${mixins.verticalLineMiddle('50px')}
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: rgb(0, 0, 0, 0.4);
  padding: 0 1rem;
  color: ${colors.M1};
`;

export const Carousel = styled(AntCarousel).attrs((props) => ({
  dotPosition: props.isSmallScreen ? 'bottom' : 'right',
  autoplay: false,
  speed: 1000,
  autoplaySpeed: 3000,
}))`
  .slick-slide {
    padding-right: 2.5rem;
    cursor: pointer;
    height: ${({ height }) => height}px !important;
  }

  .slick-track {
    height: auto !important;
  }

  .slick-dots {
    li {
      margin: 8px 3px;

      &,
      button {
        ${mixins.size('6px', '40px')}
        background: ${polished.rgba(colors.F2, 0.1)};
        border-radius: 3px;
      }

      &.slick-active {
        &,
        button {
          ${mixins.size('6px', '50px')}
          background: ${polished.rgba(colors.F2, 0.3)};
        }
      }
    }
  }

  ${(props) =>
    props.isSmallScreen &&
    css`
      margin-bottom: 3rem;

      .slick-slide {
        padding-right: 0;
      }

      .slick-dots {
        margin: 0 auto;
        bottom: -32px;

        li {
          margin: 3px 8px;

          &,
          button {
            ${mixins.size('40px', '6px')}
          }

          &.slick-active {
            &,
            button {
              ${mixins.size('50px', '6px')}
            }
          }
        }
      }
    `};
`;
