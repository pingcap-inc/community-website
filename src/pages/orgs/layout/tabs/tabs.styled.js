import styled from 'styled-components';
import { Tabs as AntTabs } from 'antd';

export const Tabs = styled(AntTabs)`
  position: absolute;
  left: 0;
  bottom: -1px;
  width: 100%;

  .ant-tabs-nav {
    margin-bottom: 0;

    &::before {
      border-bottom: 0;
    }
  }
`;
