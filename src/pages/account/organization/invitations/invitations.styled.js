import styled from 'styled-components';

import { colors, mixins } from '@tidb-community/ui';

export const Background = styled.div`
  background-color: ${colors.M2};
  padding-top: 40px;
  padding-bottom: 240px;
`;

export const Container = styled.div`
  ${mixins.centerBlock('768px')};
  background-color: white;
`;

export const TextContent = styled.div`
  ${mixins.typography('p2')};
  .ant-btn.ant-btn-link {
    height: inherit;
    line-height: inherit;
    padding-left: 0;
    padding-right: 0;
    text-transform: none;
  }
`;
