import styled, { css } from 'styled-components';
import { Button, Input, Row } from 'antd';
import { Styled, colors, mixins } from '@tidb-community/ui';

import { getImage } from '~/pages/home/home.utils';
import { Link as LinkComp } from '~/components';

export const Container = styled(Styled.Section)`
  && {
    background-image: url(${getImage('subscription-background.svg')});
    background-size: cover;
    padding: 4rem 0;

    ${(props) =>
      props.isSmallScreen &&
      css`
        ${Content} {
          ${mixins.flexCenter()};
          text-align: center;
        }

        ${JoinButton} {
          margin-top: 28px;
          margin-bottom: 50px;
        }
      `}
  }
`;

export const Content = styled.div`
  ${mixins.responsive()};
`;

export const SloganBox = styled(Row)`
  max-width: 634px;
  padding-right: 8px;
  padding-left: 8px;
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

export const Link = styled(LinkComp)`
  font-size: inherit;
  color: ${colors.M1};
  text-decoration: underline;
`;

export const JoinButton = styled(Button)`
  margin-top: 46px;
`;

export const EmailInput = styled(Input.Search).attrs({
  allowClear: true,
  size: 'large',
})`
  margin-top: 2rem;
  max-width: 350px;

  .ant-input-search-button {
    font-size: 16px;
    ${mixins.verticalLineMiddle('40px')};
  }
`;
