import * as polished from 'polished';
import styled from 'styled-components';
import { colors, mixins } from '@tidb-community/ui';
import { CaretUpOutlined } from '@ant-design/icons';

const calendarGrey = '#b6b9c3';

export const Calendar = styled.div`
  width: 36px;
  padding-top: 6px;
  margin-right: 1rem;
  text-align: center;

  svg {
    visibility: hidden;
  }
`;

export const Container = styled.div`
  display: flex;
  cursor: pointer;
  padding: 1rem 0;
  border-bottom: 1px solid ${colors.T2};

  &:hover {
    border-color: ${colors.B1};

    ${Calendar} {
      svg {
        visibility: visible;
      }
    }
  }
`;

export const CalendarHead = styled.div`
  ${mixins.verticalLineMiddle('20px')};
  font-size: 14px;
  color: ${colors.M1};
  background: ${calendarGrey};
`;

export const CalendarBody = styled.div`
  ${mixins.flexCenter()};
  height: 25px;
  font-size: 18px;
  font-weight: bold;
  color: #2d3758;
  background: ${colors.M1};
  position: relative;
`;

export const Arrow = styled(CaretUpOutlined)`
  position: absolute;
  bottom: -2px;
  right: -1px;
  color: ${calendarGrey};
  transform: rotate(-45deg);
  z-index: 2;

  svg {
    ${mixins.size('13px')};
  }
`;

export const OppsiteArrow = styled(Arrow)`
  color: ${colors.M2};
  transform: rotate(135deg);
  bottom: -5px;
  right: -5px;
  z-index: 1;
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
