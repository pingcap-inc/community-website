import * as polished from 'polished';
import styled, { css } from 'styled-components';
import { Button, Carousel as AntCarousel, Col, Row, Tooltip } from 'antd';
import { Styled, colors, mixins } from '@tidb-community/ui';
import { getImage } from '~/pages/talent-plan/talent-plan.utils';
import { useIsSmallScreen } from '~/hooks';
const githubBlack = '#24292e';
const githubLightGrey = '#f0f0f0';

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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export const Carousel = styled(AntCarousel).attrs((props) => ({
  dots: !props.isSmallScreen,
  dotPosition: props.isSmallScreen ? 'bottom' : 'right',
  autoplay: process.env.NEXT_PUBLIC_RUNTIME_ENV !== 'local',
  speed: 1000,
  autoplaySpeed: 8000,
}))`
  .slick-slide {
    padding-right: 1rem;
    cursor: pointer;
  }

  .slick-current {
    margin-bottom: 0.2rem;
  }

  .slick-track {
    width: 100%;
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
`;

export const Recommendation = styled.img`
  width: 100%;
`;
