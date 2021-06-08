import styled from 'styled-components';

import { colors, mixins } from '@tidb-community/ui';

export const Background = styled.div`
  padding: 40px 0;
`;

export const Container = styled.div`
  ${mixins.responsive()};
  background: ${colors.M1};
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

export const MainWrapper = styled.div`
  flex: 1;
  background-color: ${colors.M2};
`;
