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

export const RoleMenu = styled(Menu)``;

export const Delete = styled.span`
  color: ${colors.B1};
  cursor: pointer;
`;
