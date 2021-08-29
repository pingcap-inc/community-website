import * as polished from 'polished';
import styled from 'styled-components';
import { colors, mixins } from '@tidb-community/ui';

const calendarGrey = '#b6b9c3';

export const Container = styled.div`
  ${mixins.flexVerticalCenter()};
  cursor: pointer;
  padding: 1rem 0;
  border-bottom: 1px solid ${colors.T2};

  &:hover {
    border-color: ${colors.B1};
  }
`;

export const Calendar = styled.div`
  ${mixins.size('36px', '44px')};
  margin-right: 1rem;
  text-align: center;
`;

export const CalendarHead = styled.div`
  ${mixins.verticalLineMiddle('18px')};
  font-size: 14px;
  color: ${colors.M1};
  background: ${calendarGrey};
`;

export const CalendarBody = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #2d3758;
  background: ${colors.M1};
`;

export const Content = styled.div`
  flex: 1;

  h3 {
    font-size: 16px;
    font-weight: normal;
    margin-bottom: 0;
  }

  .ant-badge {
    margin-left: 2rem;

    &-status-text {
      font-size: 12px;
      color: ${polished.rgba(colors.F1, 0.6)};
    }

    &:first-child {
      margin-left: 0;
    }
  }
`;
