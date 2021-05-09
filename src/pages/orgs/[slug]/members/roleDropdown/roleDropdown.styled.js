import styled from 'styled-components';
import { Menu } from 'antd';

import { colors, mixins } from '@tidb-community/ui';

export const Role = styled.div`
  ${mixins.flexVerticalCenter()};
  color: ${colors.F1};
  cursor: pointer;

  .anticon {
    margin-left: 0.5rem;
  }
`;

export const RoleMenu = styled(Menu)`
  padding: 0;

  .ant-dropdown-menu-item {
    position: relative;
    padding-right: 3rem;

    h3,
    p {
      ${mixins.typography('p2')};
      margin: 0;
    }

    h3 {
      color: ${colors.F1};
    }

    p {
      font-size: 12px;
    }

    .anticon {
      visibility: hidden;
      position: absolute;
      right: 12px;
      top: 50%;
      margin-top: -7px;
    }

    &-selected {
      background: ${colors.M2};

      .anticon {
        color: ${colors.F1};
        visibility: visible;
      }
    }
  }
`;
