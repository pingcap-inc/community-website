import styled from 'styled-components';
import { colors, mixins } from '@tidb-community/ui';
import { Badge as AntBadge, Table as AntTable } from 'antd';

export const Title = styled.h3`
  ${mixins.typography('p1')}
  ${mixins.flexVerticalCenter()};
  font-weight: bold;
  color: ${colors.F1};
  margin-bottom: 0;
`;

export const Badge = styled(AntBadge).attrs({
  style: {
    backgroundColor: colors.T2,
  },
})`
  margin-left: 0.5rem;

  .ant-badge-count {
    color: ${colors.F1};
  }
`;

export const Header = styled.div`
  ${mixins.flexVerticalCenter()};
  justify-content: space-between;
  margin-bottom: 1rem;
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

export const Delete = styled.span`
  color: ${colors.B1};
  cursor: pointer;
`;

export const DisabledDelete = styled.span`
  color: ${colors.C4};
  cursor: not-allowed;
`;

export const Table = styled(AntTable)`
  .ant-table-thead {
    tr th {
      background-color: ${colors.T2};
    }
  }
`;
