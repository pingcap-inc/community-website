import styled, { css } from 'styled-components';
import { Button, Input } from 'antd';
import { Styled, colors, mixins } from '@tidb-community/ui';

import TwoColumnsLayout from '~/pages/home/twoColumsLayout';
import { Link as LinkComp } from '~/components';
import { getImage } from '~/pages/home/home.utils';

export const Layout = styled(TwoColumnsLayout)`
  ${(props) =>
    props.isSmallScreen &&
    css`
      ${mixins.flexCenter()};
      text-align: center;

      ${ActionButton} {
        margin-bottom: 3rem;
      }
    `}
`;

export const Container = styled(Styled.Section)`
  && {
    background-image: url(${getImage('subscription-background.svg')});
    background-size: cover;
    padding: 4rem 0;
  }
`;

export const Slogan = styled.div`
  color: ${colors.M1};
  font-size: 20px;
`;

export const TermCaption = styled.div`
  margin-top: 2rem;
  color: ${colors.M1};
  font-size: 14px;
  line-height: 1;
`;

export const Link = styled(LinkComp)`
  font-size: inherit;
  color: ${colors.M1};
  text-decoration: underline;
`;

export const ActionButton = styled(Button)`
  margin-top: 2rem;
`;

export const EmailInput = styled(Input.Search).attrs({
  allowClear: true,
  size: 'large',
})`
  margin-top: 2rem;
  max-width: 350px;

  && {
    .ant-input-search-button {
      ${mixins.verticalLineMiddle('40px')};
      font-size: 16px;
    }
  }
`;
