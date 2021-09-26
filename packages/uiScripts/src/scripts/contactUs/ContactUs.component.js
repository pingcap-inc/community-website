import * as R from 'ramda';
import React, { useContext, useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import useSWR from 'swr';
import { InfoCircleFilled } from '@ant-design/icons';
import { Button, Grid, Popover, Skeleton } from 'antd';
import { createAppGlobalStyle, constants, Link } from '@tidb-community/ui';

import * as Styled from './contactUs.styled';
import { AuthContext } from '@/context/auth.context';
import { genStorageKey, isSupportLocalStorage } from '~/utils';

const { useBreakpoint } = Grid;
const GlobalStyle = createAppGlobalStyle();
const hasLocalStorage = isSupportLocalStorage();
const guideStorageKey = genStorageKey('contact-us-guide-shown');
const { appClassName } = constants;

const getUrl = (path) => `${process.env.NEXT_PUBLIC_HOME_URL}${path}`;

const ContactUs = () => {
  const bp = useBreakpoint();
  const containerRef = useRef(null);
  const [isShowGuide, setIsShowGuide] = useState(hasLocalStorage ? !localStorage.getItem(guideStorageKey) : false);

  const { data: meResp, error: meError } = useSWR('me', {
    revalidateOnFocus: false,
    shouldRetryOnError: false,
  });
  const isLoggedIn = !!meResp?.data;
  const { data: resp, error } = useSWR(isLoggedIn && 'contactUs.qualifications');

  const data = resp?.data || {};
  const isLoading = (!meResp && !meError) || (isLoggedIn && !resp && !error);
  const { login } = useContext(AuthContext);

  const isEnabled = !R.isEmpty(data) && R.pipe(R.values, R.all(R.equals(true)))(data);
  const isDisabled = !isEnabled;

  const onGuideClose = (e) => {
    setIsShowGuide(false);
    localStorage.setItem(guideStorageKey, true);
  };

  const NavLink = ({ path, children }) => (
    <Link href={getUrl(path)} onClick={(e) => (isDisabled || isShowGuide) && e.preventDefault()}>
      {children}
    </Link>
  );

  const NavLinks = () => (
    <ul>
      {/* <li>
        <NavLink path="/contact-us/incident">
          <h3>紧急事故处理</h3>
          <p>若非紧急事故，请发帖</p>
        </NavLink>
      </li> */}
      <li>
        <NavLink path="/contact-us/consultancy">
          <h3>技术专家交流</h3>
          <p>业务咨询、技术交流</p>
        </NavLink>
      </li>
      <li>
        <NavLink path="/contact-us/cooperation">
          <h3>社区生态合作</h3>
          <p>技术合作、社区活动</p>
        </NavLink>
      </li>
      {/* <li>
        <h3>商业咨询</h3>
        <p>4006790886</p>
      </li> */}
    </ul>
  );

  const links = R.intersperse(
    '、',
    [
      data.company_info_is_completed === false && <Link href={getUrl('/my/company')}>完善公司信息</Link>,
      data.phone_email_is_completed === false && <Link href={getUrl('/my/settings')}>绑定手机号和邮箱</Link>,
    ].filter(Boolean)
  );

  let desc;
  if (!isLoggedIn) {
    desc = (
      <>
        联系社区专家之前，请先
        <span onClick={(e) => login()}>登录</span>
      </>
    );
  } else if (!R.isEmpty(links)) {
    desc = <>联系社区专家之前，请先{links}，以便我们更好地处理您的问题</>;
  }

  let content;
  if (isShowGuide) {
    content = (
      <Styled.PopoverContainer>
        <NavLinks />
        <Styled.GuideContent isSmallScreen={bp.xs}>
          {/* 遇到或是紧急事故、 */}
          <p>需要技术交流、社区合作可以在这里联系社区专家哦~</p>
          <Button type="primary" size="small" onClick={onGuideClose}>
            知道了
          </Button>
        </Styled.GuideContent>
        {ReactDOM.createPortal(<div className="ant-modal-mask" onClick={onGuideClose} />, document.body)}
      </Styled.PopoverContainer>
    );
  } else if (isLoading) {
    content = (
      <Styled.PopoverContainer>
        <Skeleton active />
      </Styled.PopoverContainer>
    );
  } else {
    content = (
      <Styled.PopoverContainer isDisabled={isDisabled}>
        {desc && (
          <Styled.PopoverDesc>
            <InfoCircleFilled />
            {desc}
          </Styled.PopoverDesc>
        )}
        <NavLinks />
      </Styled.PopoverContainer>
    );
  }

  const popoverProps = {
    content,
    trigger: 'hover',
    placement: 'leftBottom',
    overlayClassName: appClassName,
    visible: isShowGuide ? isShowGuide : undefined,
    getPopupContainer: () => containerRef.current,
  };

  return (
    <>
      <GlobalStyle />
      <Popover {...popoverProps}>
        <Styled.Container ref={containerRef} className={appClassName}>
          <Styled.Icon />
        </Styled.Container>
      </Popover>
    </>
  );
};

export default ContactUs;
