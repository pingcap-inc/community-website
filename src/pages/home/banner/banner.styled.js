import * as polished from 'polished';
import Image from 'next/image';
import styled from 'styled-components';
import { Button, Col, Tooltip } from 'antd';
import { colors, mixins } from '@tidb-community/ui';

import LogoSvg from './logo.svg';
import { Section } from '~/pages/home/index.styled';

export const Container = styled(Section)`
  && {
    color: ${colors.M1};
    background: ${colors.B4};
    padding: 5rem 0 7.5rem;
  }
`;

export const Content = styled.div`
  ${mixins.responsive()};
  width: 100%;
`;

export const LeftPanel = styled(Col).attrs({
  md: 10,
  lg: 8,
})``;

export const RightPanel = styled(Col).attrs({
  md: 14,
  lg: 12,
})`
  .slick-slide {
    padding-right: 2.5rem;
  }

  .slick-dots {
    li {
      margin: 8px 3px;

      &,
      button {
        ${mixins.size('6px', '40px')}
        background: ${polished.rgba(colors.M1, 0.2)};
        border-radius: 3px;
      }

      &.slick-active {
        &,
        button {
          ${mixins.size('6px', '50px')}
          background: ${polished.rgba(colors.M1, 0.6)};
        }
      }
    }
  }
`;

export const Logo = styled(LogoSvg)`
  max-width: 350px;
  margin-bottom: 0.5rem;
`;

export const Intro = styled.p`
  ${mixins.reset()};
  color: ${colors.M1};
  font-size: 20px;
  margin-bottom: 2rem;
`;

export const TryButton = styled(Button).attrs({
  type: 'primary',
  size: 'large',
})`
  width: 142px;
  border-radius: 6px;

  span {
    font-size: 18px;
  }
`;

const githubBlack = '#24292e';
const githubLightGrey = '#f0f0f0';

export const StarButton = styled.span`
  position: relative;
  display: inline-block;
  border-radius: 4px;
  background: ${githubLightGrey};
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
  color: githubLightGrey,
  visible: true,
})``;

export const CarouselImage = styled(Image).attrs({
  src: '/cover.png',
  height: 235,
})``;
