import styled from 'styled-components';
import { mixins } from '@tidb-community/ui';

import Github from './github.svg';
import WeChat from './wechat.svg';

export const Desc = styled.p`
  font-size: 12px !important;
`;

export const SocialAccounts = styled.div`
  margin-top: 1rem;

  .ant-btn {
    ${mixins.flexVerticalCenter('inline')};
    padding: 0;
    margin-right: 2rem;
    text-transform: none;
    height: initial;
    line-height: 1;

    svg {
      ${mixins.size('18px')};
      margin-right: 6px;
    }

    &:hover {
      background: transparent;
    }

    &:last-child {
      margin-right: 0;
    }
  }
`;

export const GithubIcon = styled(Github)`
  fill: #000;
`;

export const WeChatIcon = styled(WeChat)`
  fill: #04d468;
`;
