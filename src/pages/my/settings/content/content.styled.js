import styled from 'styled-components';
import { colors, mixins } from '@tidb-community/ui';

import Github from './github.svg';
import WeChat from './wechat.svg';

export const Desc = styled.p`
  font-size: 12px !important;
`;

export const Account = styled.div`
  span {
    cursor: pointer;

    &:hover {
      color: ${colors.B1};
    }
  }
`;

export const SocialAccounts = styled.div`
  margin-top: 1rem;

  .ant-btn,
  ${Account} {
    ${mixins.flexVerticalCenter('inline')};
    margin-right: 2rem;

    &:last-child {
      margin-right: 0;
    }

    svg {
      ${mixins.size('18px')};
      margin-right: 6px;
    }
  }

  .ant-btn {
    padding: 0;
    text-transform: none;
    height: initial;
    line-height: 1;
  }
`;

export const GithubIcon = styled(Github)`
  fill: #000;
`;

export const WeChatIcon = styled(WeChat)`
  fill: #04d468;
`;
