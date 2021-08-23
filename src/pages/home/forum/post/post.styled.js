import * as polished from 'polished';
import styled from 'styled-components';
import { colors, mixins } from '@tidb-community/ui';

export const Container = styled.div`
  padding: 1rem 0;
  border-bottom: 1px solid ${colors.T2};

  h3 {
    font-size: 18px;
    font-weight: normal;
    cursor: pointer;
  }

  &:hover {
    border-color: ${colors.B1};

    h3 {
      color: ${colors.B1};
    }
  }

  &:first-child {
    padding-top: 0;
  }
`;

const Row = styled.div`
  display: flex;

  > span {
    width: 115px;
    text-align: right;
    font-size: 12px;
    color: ${polished.rgba(colors.F1, 0.6)};
  }
`;

export const TitleRow = styled(Row)`
  align-items: flex-start;

  h3 {
    flex: 1;
  }
`;

export const InformationRow = styled(Row)`
  align-items: flex-end;

  > div {
    flex: 1;
  }
`;

export const User = styled.div``;

export const Tag = styled.div``;
