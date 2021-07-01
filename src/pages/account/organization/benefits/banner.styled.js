import styled from 'styled-components';
import { colors, mixins } from '@tidb-community/ui';

import { Button as AntButton } from 'antd';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap-reverse;
  max-width: 1210px;
  margin: auto;
`;

export const Content = styled.div`
  padding: 120px 0;

  h2 {
    margin: 0 0 2.5rem;
    font-size: 40px;
    font-weight: normal;
    color: ${colors.M1};
    line-height: 1;
  }

  p {
    margin: 0;
    font-size: 18px;
    font-weight: normal;
    color: ${colors.M1};

    &:last-child {
      margin-bottom: 2.5rem;
    }
  }
`;

export const Button = styled(AntButton)`
  margin-top: 2.5em;
  ${mixins.typography('h3')};
  color: ${colors.M1};
  font-weight: normal;
  border-radius: 8px;

  &.ant-btn-primary {
    background-color: #ce9f37;
    padding: 0 32px;
    height: 48px;

    &:hover {
      background-color: #bf8f27 !important;
    }

    &.ant-btn-background-ghost {
      color: #ce9f37;
      border: 2px solid #ce9f37;
    }
  }
`;
