import styled from 'styled-components';
import { Menu } from 'antd';
import { colors, mixins } from '@tidb-community/ui';

export const Title = styled.h3`
  ${mixins.typography('p1')}
  ${mixins.flexVerticalCenter()};
  font-weight: bold;
  color: ${colors.F1};
  margin-bottom: 0;

  span {
    ${mixins.verticalLineMiddle('16px')}
    font-size: 12px;
    background: ${colors.T2};
    margin-left: 0.5rem;
    padding: 0 0.5rem;
    border-radius: 16px;
    font-weight: normal;
  }
`;

export const Header = styled.div`
  ${mixins.flexVerticalCenter()};
  justify-content: space-between;
  margin-bottom: 2rem;
`;

export const Name = styled.div`
  ${mixins.flexVerticalCenter()};

  span {
    font-size: 10px;
    color: ${colors.F2};
    background: ${colors.T2};
    padding: 0.1rem 0.25rem;
    margin-left: 0.5rem;
  }
`;

export const Role = styled.div`
  ${mixins.flexVerticalCenter()};

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

export const Delete = styled.span`
  color: ${colors.B1};
  cursor: pointer;
`;
