import styled from 'styled-components';
import { colors, mixins } from '@tidb-community/ui';

import { Section } from '~/pages/home/index.styled';
import { Button, Input, Row } from 'antd';

export const Container = styled.div`
  ${mixins.reset()}
  ${mixins.centerBlock()}
  ${mixins.responsive()}

  ${(props) =>
    props.isMobile &&
    `
    text-align: center;
    ${mixins.flexCenter()}
  `}
`;

export const SloganBox = styled(Row)`
  max-width: 634px;
  padding-right: 8px;
  padding-left: 8px;
`;

export const SubscriptionSection = styled(Section)`
  ${mixins.flexCenter()}
  background-image: url("images/tugHome/subscription-background.svg");
  background-size: cover;
  padding-top: 62px;
  padding-bottom: 62px;
`;

export const Slogan = styled.div`
  color: ${colors.M1};
  font-size: 20px;
`;
export const TermCaption = styled.div`
  margin-top: 36px;
  color: ${colors.M1};
  font-size: 14px;
`;

export const Underline = styled(Slogan)`
  display: inline;
  text-decoration: underline;

  &:hover {
    cursor: pointer;
  }
`;

export const JoinButton = styled(Button)`
  ${mixins.flexCenter()}
  ${(props) => (props.isMobile ? `margin-bottom: 50px; margin-top: 28px` : `margin-top: 46px;`)}
`;

export const EmailInput = styled(Input.Search)`
  height: 45px;
  margin-top: 33px;
  border-radius: 6px;
  max-width: 350px;

  span {
    font-size: 16px;
  }

  span.ant-input-affix-wrapper {
    height: 45px;
  }

  button.ant-btn {
    height: 45px;
  }
`;
