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

const getUrl = (path) => `${process.env.NEXT_PUBLIC_HOME_URL}${path}`;

const ContactUs = () => {
  const { data: resp } = useSWR('contactUs.qualifications');
  const data = resp?.data || {};

  const isEnabled = !R.isEmpty(data) && R.pipe(R.values, R.all(R.equals(true)))(data);
  const isDisabled = !isEnabled;

  const Link = ({ path, children }) => (
    <a target="_blank" rel="noreferrer" href={getUrl(path)} onClick={(e) => isDisabled && e.preventDefault()}>
      {children}
    </a>
  );

  const links = R.intersperse(
    '、',
    [
      data.company_info_is_completed === false && (
        <a key="company" target="_blank" rel="noreferrer" href={getUrl('/my/company')}>
          完善公司信息
        </a>
      ),
      data.phone_email_is_completed === false && (
        <a key="settings" target="_blank" rel="noreferrer" href={getUrl('/my/settings')}>
          绑定手机号和邮箱
        </a>
      ),
    ].filter(Boolean)
  );

  const content = (
    <Styled.PopoverContainer isDisabled={isDisabled}>
      {!R.isEmpty(links) && (
        <Styled.PopoverDesc>
          <InfoCircleFilled />
          联系社区专家之前，请先完{links}，一般更好地处理您的问题
        </Styled.PopoverDesc>
      )}

      <ul>
        <li>
          <Link path="/contact-us/incident">
            <h3>紧急事故处理</h3>
            <p>紧急事故处理</p>
          </Link>
        </li>
        <li>
          <Link path="/contact-us/consultancy">
            <h3>技术专家交流</h3>
            <p>业务咨询、技术交流</p>
          </Link>
        </li>
        <li>
          <Link path="/contact-us/cooperation">
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
