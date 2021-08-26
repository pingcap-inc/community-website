import * as polished from 'polished';
import styled, { css } from 'styled-components';
import { Badge } from 'antd';
import { colors, mixins } from '@tidb-community/ui';

const smallFontMixin = () => css`
  font-size: 12px;
  color: ${polished.rgba(colors.F1, 0.6)};
`;

export const Container = styled.div`
  padding: 1rem 0;
  border-bottom: 1px solid ${colors.T2};
  cursor: pointer;

  h3 {
    font-size: 18px;
    font-weight: normal !important;
    margin-bottom: 1rem;
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
    ${smallFontMixin()};
    width: 115px;
    text-align: right;
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
    ${mixins.flexVerticalCenter()};
    flex: 1;
  }
`;

export const User = styled.div`
  ${smallFontMixin()};

  img {
    ${mixins.size('21px')};
    border-radius: 50%;
    margin-right: 6px;
  }
`;

export const Tag = styled(Badge)`
  margin-left: 2rem;

  .ant-badge {
    &-status-dot {
      ${mixins.size('8px')};
      top: 0;
    }

    &-status-text {
      ${smallFontMixin()};
    }
  }
`;
