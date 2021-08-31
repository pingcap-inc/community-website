import styled, { css } from 'styled-components';
import { Button, Input, Row } from 'antd';
import { colors, mixins } from '@tidb-community/ui';

import { getImage } from '~/pages/home/index.utils';
import { Section } from '~/pages/home/index.styled';

export const Container = styled.div`
  ${mixins.responsive()};

  ${(props) =>
    props.isSmallScreen &&
    css`
      ${mixins.flexCenter()};
      text-align: center;
    `}
`;

export const SloganBox = styled(Row)`
  max-width: 634px;
  padding-right: 8px;
  padding-left: 8px;
`;

export const SubscriptionSection = styled(Section)`
  background-image: url(${getImage('subscription-background.svg')});
  background-size: cover;
  padding-top: 4rem;
  padding-bottom: 4rem;
`;

export const Slogan = styled.div`
  color: ${colors.M1};
  font-size: 20px;
`;

export const TermCaption = styled.div`
  margin-top: 2rem;
  color: ${colors.M1};
  font-size: 14px;
`;

export const Link = styled.a`
  color: ${colors.M1};
  font-size: 20px;
  text-decoration: underline;

  &:hover {
    text-decoration: underline;
    color: inherit;
    cursor: pointer;
  }
`;

export const JoinButton = styled(Button)`
  ${mixins.flexCenter()};

  ${(props) =>
    props.isSmallScreen
      ? css`
          margin-bottom: 50px;
          margin-top: 28px;
        `
      : css`
          margin-top: 46px;
        `}
`;

export const EmailInput = styled(Input.Search)`
  margin-top: 2rem;
  border-radius: 6px;
  max-width: 350px;

  &,
  .ant-btn,
  .ant-input-affix-wrapper {
    font-size: 16px;
    height: 45px;
  }
`;
