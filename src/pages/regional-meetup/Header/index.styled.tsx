import * as polished from 'polished';
import styled, { css } from 'styled-components';
import { Button, Space } from 'antd';
import { colors, mixins } from '@tidb-community/ui';

export const Container = styled.div`
  width: 100%;
  background-color: #f7f8f9;
  padding: 64px 0;
`;

export const Card = styled.div``;

export const Carousel = styled.div<{ $isSmallScreen: boolean }>`
  ${(props) =>
    !props.$isSmallScreen &&
    css`
      .slick-list {
        width: calc(100% - 24px) !important;
      }
    `}
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
    props.$isSmallScreen &&
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

export const CarouselItem = styled.div`
  //width: 100%;
  img {
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 30px;
  line-height: 42px;
  color: #890707;
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #2c2c2c;
`;

export const Actions = styled(Space)``;

export const JoinButton = styled(Button).attrs({
  type: 'primary',
})``;

export const NominateButton = styled(Button).attrs({
  type: 'link',
})``;
