import styled from 'styled-components';
import { Input } from 'antd';
import { colors, mixins } from '@tidb-community/ui';

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

  &:first-child {
    border-right: 1px solid ${colors.T2};
  }
`;

export const SearchWrapper = styled.div`
  padding: 16px;
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

      svg {
        ${mixins.size('12px')};
      }
    }
  }
`;

export const MemberList = styled.div`
  height: 338px;
  overflow-y: auto;

  label {
    ${mixins.flexVerticalCenter()};
    margin-left: 0 !important;
    padding: 8px 16px;

    img {
      ${mixins.size('32px')};
      border-radius: 50%;
      margin-right: 8px;
    }

    &:hover {
      background: ${colors.M2};
    }
  }
`;
