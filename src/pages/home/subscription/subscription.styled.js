import styled, { css } from 'styled-components';
import { Button, Checkbox, Input } from 'antd';
import { colors, mixins, Styled } from '@tidb-community/ui';

import TwoColumnsSection from '~/layouts/twoColumnsSection';
import { Link as LinkComp } from '~/components';
import { getImage } from '~/pages/home/home.utils';

export const TwoColumns = styled(TwoColumnsSection)`
  color: ${colors.M1};

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
  font-size: 20px;
`;

export const TermCaption = styled.div`
  margin-top: 2rem;
  font-size: 14px;
  line-height: 1;
`;

export const Link = styled(LinkComp)`
  color: inherit;
  font-size: inherit;
  text-decoration: underline;
`;

export const ActionButton = styled(Button).attrs({
  type: 'primary',
})`
  margin-top: 2rem;
`;

export const EmailInput = styled(Input.Search).attrs((props) => ({
  allowClear: true,
  size: 'large',
  onSearch: !props.$submitDisabled && props.onSubmit,
}))`
  margin-top: 2rem;
  max-width: 350px;

  && {
    .ant-input-search-button {
      ${(props) =>
        props.$submitDisabled &&
        css`
          cursor: not-allowed;
          opacity: 70%;
        `};
      ${mixins.verticalLineMiddle('40px')};
      font-size: 16px;
    }
  }
`;

export const LegalCheckbox = styled(Checkbox)`
  margin-right: 8px;
`;
