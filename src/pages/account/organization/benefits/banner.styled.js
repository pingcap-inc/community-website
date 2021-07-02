import styled from 'styled-components';
import { colors as _colors, mixins } from '@tidb-community/ui';

import { Button as AntButton } from 'antd';

const colors = _colors.VI;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1210px;
  margin: auto;

  @media screen and (max-width: 1269px) {
    padding: 4rem 15px 0;
    flex-direction: column-reverse;
    justify-content: center;
    text-align: center;
  }
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

  @media screen and (max-width: 1269px) {
    padding: 4rem 0;
  }
`;

export const Button = styled(AntButton)`
  margin-top: 2.5em;
  ${mixins.typography('h3')};
  color: ${colors.M1};
  font-weight: normal;
  border-radius: 8px;

  &.ant-btn-primary {
    background-color: ${colors.B5};
    padding: 0 32px;
    height: 48px;

    &:hover {
      background-color: #bf8f27 !important;
    }

    &.ant-btn-background-ghost {
      color: ${colors.B5};
      border: 2px solid ${colors.B5};
    }
  }
`;
