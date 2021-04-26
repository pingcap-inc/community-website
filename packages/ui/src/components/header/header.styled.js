import styled, { createGlobalStyle, css } from 'styled-components';

import * as colors from '../../colors';
import * as mixins from '../../mixins';
import { menuPopupId } from './header.constants';

export const Container = styled.div`
  border-bottom: 1px solid ${colors.T2};
`;

export const Content = styled.div`
  ${mixins.responsive()};
  ${mixins.flexVerticalCenter()};
  height: 84px;
`;

export const Logo = styled.h1`
  ${mixins.logoTitle('h1')};
  cursor: pointer;

  img {
    ${mixins.size('32px', '37px')};
    margin-right: 5px;
  }
`;

export const MenuWrapper = styled.div`
  flex: 1;
  /* HACK: set width to 0 for a AntD's issue of calculating the menu witdh */
  width: 0;

  ${(props) =>
    props.xs &&
    css`
      display: flex;
      justify-content: flex-end;
    `}

  && {
    /*
     * Menu's original stylings could be referred to
     * https://github.com/ant-design/ant-design/blob/master/components/menu/style/index.less
     */
    .ant-menu {
      display: flex;
      justify-content: flex-end;
      border-bottom: none;

      ${(props) =>
        props.xs &&
        css`
          width: 60px;
        `}

      &-item:hover,
      &-submenu-title:hover {
        color: ${colors.B1} !important;
      }

      &-submenu:hover,
      &-item-active,
      &-item-selected,
      &-submenu-active,
      &-submenu-selected {
        position: relative;
        color: ${colors.B1} !important;
        border-bottom-color: transparent !important;
        cursor: pointer;

        &::after {
          ${mixins.size('24px', '4px')};
          position: absolute;
          bottom: 0;
          left: 50%;
          margin-left: -12px;
          background: ${colors.B1};
          content: '';
        }
      }
    }
  }
`;

export const GlobalStyle = createGlobalStyle`
  #${menuPopupId} {
    .ant-menu {
      color: ${colors.F1};

      &-item:hover,
      &-item-active,
      &-item-selected {
        color: ${colors.B1};
      }

      &-item-selected {
        background-color: ${colors.M2};
      }

      &-submenu {
        &-arrow {
          color: ${colors.F1};
        }

        &.ant-menu-submenu-selected,
        &.ant-menu-submenu-active {
          > .ant-menu-submenu-title,
          > .ant-menu-submenu-arrow {
            color: ${colors.B1};
          }
        }
      }
    }
  }
`;
