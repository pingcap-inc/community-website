import * as polished from 'polished';
import styled, { css } from 'styled-components';
import { Button, Carousel as AntCarousel } from 'antd';
import { colors, mixins, Styled } from '@tidb-community/ui';
import { getImage } from '~/pages/talent-plan/talent-plan.utils';

export const Container = styled(Styled.Section)`
  && {
    color: ${colors.F1};
    padding: 0;
    background: url(${getImage('banner-background.svg')});
    background-size: cover;
  }
`;

export const Content = styled(Styled.Content)`
  height: 100%;
  width: 100%;
  padding: 5rem 1rem;

  ${(props) =>
    props.isSmallScreen &&
    css`
      padding: 0 0 5.5rem;

      ${Intro} {
        width: 80%;
        text-align: center;
      }
    `}
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

export const Title = styled.h1`
  && {
    font-size: 30px;
  }
`;

export const LearnButton = styled(Button).attrs({ type: 'primary' })``;

// vertically center the carousel
export const CarouselWrapper = styled.div`
  ${(props) =>
    props.isSmallScreen
      ? css`
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          width: 100%;
        `
      : css`
          margin-top: 2rem;
        `}
`;

export const Carousel = styled(AntCarousel).attrs((props) => ({
  dotPosition: props.isSmallScreen ? 'bottom' : 'right',
  autoplay: process.env.NEXT_PUBLIC_RUNTIME_ENV !== 'local',
  speed: 1000,
  autoplaySpeed: 8000,
}))`
  width: 100%;

  .slick-slide {
    padding-right: 1.5rem;
    cursor: pointer;
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
  `}

;
`;

export const Recommendation = styled.div`
  margin: 0 auto;
  height: ${(props) => `${props.height}px`};
  background: ${(props) => `url(${props.image}) center no-repeat`};
  background-size: contain;
  position: relative;
  width: 110%;
`;
