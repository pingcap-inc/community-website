import React from 'react';
import useSWR from 'swr';
import { Popover } from 'antd';
import { createAppGlobalStyle, constants } from '@tidb-community/ui';

import * as Styled from './contactUs.styled';
import Icon from './icon.svg';

const { appClassName } = constants;
const GlobalStyle = createAppGlobalStyle();

const ContactUs = () => {
  const { data: resp } = useSWR('contactUs.qualifications');
  const data = resp?.data || {};

  const content = (
    <Styled.PopoverContainer>
      <ul>
        <li>
          <h3>紧急事故处理</h3>
          <p>紧急事故处理</p>
        </li>
        <li>
          <h3>技术专家交流</h3>
          <p>业务咨询、技术交流</p>
        </li>
        <li>
          <h3>社区生态合作</h3>
          <p>技术合作、社区活动</p>
        </li>
        <li>
          <h3>商业咨询</h3>
          <p>4006790886</p>
        </li>
      </ul>
    </Styled.PopoverContainer>
  );

  const popoverProps = {
    content,
    trigger: 'hover',
    placement: 'leftBottom',
    overlayClassName: appClassName,
  };

  return (
    <>
      <GlobalStyle />
      <Popover {...popoverProps}>
        <Styled.Container className={appClassName}>
          <Icon />
        </Styled.Container>
      </Popover>
    </>
  );
};

export default ContactUs;
