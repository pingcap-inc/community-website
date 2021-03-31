import styled from 'styled-components';

import * as colors from '../../colors';
import * as mixins from '../../mixins';

export const Container = styled.div`
  ${mixins.responsive()};
  ${mixins.flexVerticalCenter()};
  height: 84px;
  justify-content: space-between;
`;

export const Logo = styled.h1`
  ${mixins.logoTitle('h1')};
  cursor: pointer;

  img {
    ${mixins.size('32px', '37px')};
    margin-right: 0.3rem;
  }
`;

export const MenuWrapper = styled.div`
  && {
    /*
     * Menu's original stylings could be referred to
     * https://github.com/ant-design/ant-design/blob/master/components/menu/style/index.less
     */
    .ant-menu {
      border-bottom: none;

      &-submenu,
      &-submenu-selected {
        border-bottom-color: transparent !important;
      }

      &-item:hover,
      &-item-active,
      &:not(&-inline) &-submenu-open,
      &-submenu-active,
      &-submenu-title:hover {
        color: ${colors.B1} !important;
      }

      &-submenu-selected {
        &.ant-menu-submenu-title {
          color: ${colors.B1} !important;
        }
      }

      &-submenu:hover,
      &-submenu-title:hover,
      &-submenu-selected {
        position: relative;
        color: ${colors.B1} !important;

        &::after {
          ${mixins.size('24px', '4px')};
          position: absolute;
          bottom: 0;
          left: 50%;
          margin-left: -12px;
          content: '';
          background: ${colors.B1};
        }
      }
    }
  }
`;
