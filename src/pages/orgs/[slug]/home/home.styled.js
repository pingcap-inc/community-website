import styled from 'styled-components';
import { List as AntList } from 'antd';
import { colors, mixins } from '@tidb-community/ui';

export const ListHeading = styled.div`
  ${mixins.typography('h2')};
  ${mixins.flexVerticalCenter()};

  margin-left: 16px;

  .ant-badge {
    margin-left: 8px;
    .ant-badge-count {
      background-color: ${colors.B3};
    }
  }
`;

export const List = styled(AntList)`
  background-color: white;
  max-width: 768px;
  margin: auto;

  .ant-list-item {
    padding: 16px;

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
    padding-bottom: 8px;
  }

  .ant-pagination {
    margin: 8px 8px 0;
  }
`;
