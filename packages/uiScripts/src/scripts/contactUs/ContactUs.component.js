import * as R from 'ramda';
import React from 'react';
import useSWR from 'swr';
import { Popover } from 'antd';
import { InfoCircleFilled } from '@ant-design/icons';
import { createAppGlobalStyle, constants } from '@tidb-community/ui';

import * as Styled from './contactUs.styled';
import Icon from './icon.svg';

const { appClassName } = constants;
const GlobalStyle = createAppGlobalStyle();

const getUrl = (path) => `${process.env.NEXT_PUBLIC_HOME_URL}/contact-us/${path}`;

const ContactUs = () => {
  const { data: resp } = useSWR('contactUs.qualifications');
  const data = resp?.data || {};

  const isEnabled = !R.isEmpty(data) && R.pipe(R.values, R.all(R.equals(true)))(data);
  const isDisabled = !isEnabled;

  const Link = ({ path, children }) => (
    // eslint-disable-next-line no-script-url
    <a target="_blank" rel="noreferrer" href={isEnabled ? getUrl(path) : 'javascript:;'}>
      {children}
    </a>
  );

  const content = (
    <Styled.PopoverContainer isDisabled={isDisabled}>
      {isDisabled && (
        <Styled.PopoverDesc>
          <InfoCircleFilled />
          联系社区专家之前，请先完善公司信息，一般更好地处理您的问题
        </Styled.PopoverDesc>
      )}

      <ul>
        <li>
          <Link path="incident">
            <h3>紧急事故处理</h3>
            <p>紧急事故处理</p>
          </Link>
        </li>
        <li>
          <Link path="incident">
            <h3>技术专家交流</h3>
            <p>业务咨询、技术交流</p>
          </Link>
        </li>
        <li>
          <Link path="incident">
            <h3>社区生态合作</h3>
            <p>技术合作、社区活动</p>
          </Link>
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
    trigger: 'click',
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
