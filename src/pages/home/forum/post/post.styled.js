import styled from 'styled-components';
import { colors, mixins } from '@tidb-community/ui';

export const Container = styled.div`
  ${mixins.flexVerticalCenter()};

  h3 {
    font-size: 18px;
    font-weight: normal;
    cursor: pointer;

    &:hover {
      color: ${colors.B1};
    }
  }
`;

export const LeftPanel = styled.div`
  flex: 1;
`;

export const RightPanel = styled.div`
  width: 115px;
`;
