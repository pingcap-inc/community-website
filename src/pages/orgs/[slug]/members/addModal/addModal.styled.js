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
  display: flex;
  flex-direction: column;
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

export const Header = styled.div`
  ${mixins.verticalLineMiddle('56px')};
  color: ${colors.F1};
  padding-left: 16px;
`;

export const Content = styled.div`
  flex: 1;
  padding: 0 16px;
`;

export const Footer = styled.div`
  ${mixins.flexVerticalCenter()};
  justify-content: space-between;
  padding: 16px;
`;

export const AssignRole = styled.div``;
