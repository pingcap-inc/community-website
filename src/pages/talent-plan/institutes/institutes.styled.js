import styled from 'styled-components';
import { colors, mixins, Styled } from '@tidb-community/ui';
import * as polished from 'polished';
import { getImage } from '~/pages/talent-plan/talent-plan.utils';
import { Carousel as AntdCarousel } from 'antd';

export const Container = styled(Styled.Section)`
  && {
    color: ${colors.M1};
    padding: 0;
  }
`;

export const Content = styled(Styled.Content)`
  position: relative;
`;

export const ListCard = styled.div`
  box-shadow: 1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  background-color: ${colors.M2};
  padding: 48px;
  height: 100%;
`;

export const ListItem = styled.div`
  font-size: 16px;
  color: ${colors.F1};
  line-height: 2.5;
  vertical-align: middle;

  &:before {
    vertical-align: middle;
    background-size: 24px 24px;
    height: 24px;
    width: 24px;
    display: inline-block;
    content: '  ';
    background-image: url('${getImage('institutes-item-icon.svg')}');
  }
`;

export const Carousel = styled(AntdCarousel).attrs({ autoplay: true, autoplaySpeed: 4000 })`
  .slick-dots {
    li {
      &,
      button {
        ${mixins.size('8px', '8px')}
        background: ${polished.rgba(colors.F2, 0.3)};
        border-radius: 4px;
      }

      &.slick-active {
        &,
        button {
          ${mixins.size('8px', '8px')}
          background: ${polished.rgba(colors.F2, 0.5)};
        }
      }
    }
  }
`;

export const CarouselContent = styled.div`
  padding-bottom: 3rem;
  padding-right: 0.2rem;
  padding-left: 0.2rem;
`;
