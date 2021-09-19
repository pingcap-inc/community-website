import styled, { css } from 'styled-components';
import { Button, Col, Input, Row } from 'antd';
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

        ${ActionButton} {
          margin-top: 2rem;
          margin-bottom: 3rem;
        }
      `}
  }
`;

export const Content = styled(Styled.Content)``;

export const LeftPanel = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  line-height: 1;
`;

export const Link = styled(LinkComp)`
  font-size: inherit;
  color: ${colors.M1};
  text-decoration: underline;
`;

export const ActionButton = styled(Button)``;

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
