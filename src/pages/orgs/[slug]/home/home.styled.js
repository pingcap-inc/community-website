import styled from 'styled-components';
import { List as AntList } from 'antd';
import { colors, mixins } from '@tidb-community/ui';
import { InfoCircleFilled as AntInfoCircleFilled } from '@ant-design/icons';

export { Badge } from '../members/members.styled';

export const ListHeading = styled.div`
  ${mixins.typography('h2')};
  ${mixins.flexVerticalCenter()};
  padding: 0 1rem;
`;

export const List = styled(AntList)`
  background-color: ${colors.M1};

  .ant-list-item {
    padding: 1rem;

    h3 {
      ${mixins.typography('h2')};
    }

    p {
      margin-top: 12px;
      ${mixins.typography('p1')}
    }

    .meta {
      ${mixins.flexVerticalCenter()};
      justify-content: space-between;
      color: ${colors.F2};

      .name,
      .time {
        font-weight: bold;
      }

      .author {
        ${mixins.flexVerticalCenter()};

        .name {
          margin: 0 8px;
        }
      }
    }

    .stats {
      margin-top: 12px;

      .stat {
        margin-right: 12px;

        &:nth-child(3) {
          margin-right: 0;
        }
      }

      .ant-btn {
        height: 20px;
        line-height: 18px;
        padding: 0 6px;

        svg {
          vertical-align: center;
        }

        span:not(.anticon) {
          margin-left: 2px;
          font-size: 12px;
        }
      }
    }
  }

  .ant-list-pagination {
    margin-top: 0;
    padding-bottom: 8px;
  }

  .ant-pagination {
    margin: 8px 8px 0;
  }
`;

export const PopContent = styled.div`
  ${mixins.typography('p2')};
`;

export const InfoCircleFilled = styled(AntInfoCircleFilled)`
  color: ${colors.B2} !important;
`;
