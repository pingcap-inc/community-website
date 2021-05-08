import styled from 'styled-components';
import { Input } from 'antd';
import { colors } from '@tidb-community/ui';

import { Modal as AntModal } from 'antd';

export const Modal = styled(AntModal).attrs({ width: 690 })`
  .ant-modal {
    &-body {
      display: flex;
      padding: 0;
    }
  }
`;

export const Panel = styled.div`
  flex: 1;
  padding: 16px;

  &:first-child {
    border-right: 1px solid ${colors.T2};
  }
`;

export const Searchbox = styled(Input)`
  .anticon {
    &-search {
      color: ${colors.C4};
    }

    &-close-circle {
      color: ${colors.C4};
      cursor: pointer;

      &:hover {
        color: ${colors.F2};
      }
    }
  }
`;
