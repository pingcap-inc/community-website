import '@tidb-community/ui/antd/global.less';
import React, { useContext, useEffect } from 'react';
import ReactDOM from 'react-dom';
import useSWR from 'swr';
import { Col } from 'antd';
import { Footer, Header, constants, createAppGlobalStyle, ActivityBanner } from '@tidb-community/ui';
import { getData } from '@tidb-community/datasource';

import './index.scss';
import * as Styled from './index.styled';
import HackUserProfileSlot from './hackUserProfileSlot.component';
import gonganIcon from './gongan.png';
import { MeContext } from '@/context/me.context';
import { fetcher, handleBaseUrlMapping } from '~/utils';

handleBaseUrlMapping();

const { location } = window;
const { appClassName } = constants;

const baseURL = 'https://asktug.com';
const title = 'TiDB Community';

const { nav } = getData({
  domain: 'asktug.com',
  locale: 'zh',
  env: process.env.NEXT_PUBLIC_RUNTIME_ENV,
});

const onNavClick = ({ link }) => {
  if (link.startsWith('http')) {
    window.open(link, '_blank').focus();
  } else {
    location.href = link;
  }
};

const GlobalStyle = createAppGlobalStyle();
const headerElem = document.getElementById('asktug-header');

const AskTugHeaderWrapper = ({ children }) => {
  const {
    data: meResp,
    mutate: mutateMe,
    isValidating: isMeValidating,
  } = useSWR('me', fetcher, {
    revalidateOnFocus: false,
  });

  useEffect(() => {
    const handler = () => mutateMe();
    window.addEventListener('popstate', handler);
    return () => {
      window.removeEventListener('popstate', handler);
    };
  }, [mutateMe]);

  return <MeContext.Provider value={{ meData: meResp?.data, mutateMe, isMeValidating }}>{children}</MeContext.Provider>;
};

// disabled for operation reason
// const ActivityBannerComponent = () => {
//   const { meData } = useContext(MeContext);
//   // Don't render the banner if the user is alreay in an org
//   if (meData?.org) return null;
//
//   const { link, ...data } = nav.activity;
//   return <ActivityBanner {...data} onClick={() => onNavClick({ link })} />;
// };

const ActivityBannerComponent = () => {
  return (
    <ActivityBanner
      // backgroundColor={'#2c2c2c'}
      style={{ backgroundImage: 'linear-gradient(to right, #6E545B, #2C2C2C, #6E545B)' }}
      text={
        <>
          <svg
            style={{ fill: '#FFF' }}
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="8486"
            width="24"
            height="24"
          >
            <path
              d="M848 359.3H627.7L825.8 109c4.1-5.3 0.4-13-6.3-13H436c-2.8 0-5.5 1.5-6.9 4L170 547.5c-3.1 5.3 0.7 12 6.9 12h174.4l-89.4 357.6c-1.9 7.8 7.5 13.3 13.3 7.7L853.5 373c5.2-4.9 1.7-13.7-5.5-13.7zM378.2 732.5l60.3-241H281.1l189.6-327.4h224.6L487 427.4h211L378.2 732.5z"
              p-id="8487"
            ></path>
          </svg>
          社区专栏全新上线~ 点击进来围观！
        </>
      }
      // backgroundImage={'https://tidb.io/images/activity/banner.svg'}
      // buttonImage={'https://tidb.io/images/activity/button.svg'}
      link={'https://tidb.io/blog'}
      // onClick={() => onNavClick({ link: 'https://tidb.io/blog', target: '_blank' })}
    />
  );
};

const HeaderComponent = () => {
  const { meData } = useContext(MeContext);

  const data = getData({
    domain: 'asktug.com',
    locale: 'zh',
    env: process.env.NEXT_PUBLIC_RUNTIME_ENV,
    meData,
  }).nav;
  const { navItems: headerNavItems, userProfileNavItems } = data.header;

  let navItems = [];

  if (meData) {
    navItems = (userProfileNavItems || []).filter(({ title }) => title.indexOf('团队') >= 0);
  }

  if (navItems.length > 1) {
    navItems = [
      {
        title: '我的团队',
        items: navItems,
        badge: navItems.filter(({ badge }) => badge).length > 0,
      },
    ];
  }

  const headerProps = {
    logo: <Styled.HeaderLogo />,
    onNavClick,
    navItems: headerNavItems.concat(navItems),
    currentNav: '问答',
    onTitleClick: () => {
      location.href = baseURL;
    },
    userProfileSlot: <HackUserProfileSlot />,
  };

  return <Header {...headerProps} />;
};

headerElem.classList.add(appClassName);
ReactDOM.render(
  <AskTugHeaderWrapper>
    <ActivityBannerComponent />
    <HeaderComponent />
    <GlobalStyle />
  </AskTugHeaderWrapper>,
  headerElem
);

const { navItems: footerNavItems, icons: footerIcons } = nav.footer;

const getLinkProps = (href) => ({
  href,
  target: '_blank',
  rel: 'noreferrer',
});

const policeRegisterNum = '11010802035239';

const footerProps = {
  logo: <img alt={title} src="https://tidb.io/images/tidb-logo.svg" />,
  title,
  onNavClick: (link) => onNavClick({ link }),
  icons: footerIcons,
  navItems: footerNavItems,
  bottomBar: (
    <Styled.BottomBarContainer>
      <Col>
        <a {...getLinkProps('https://beian.miit.gov.cn/#/Integrated/index')}>京ICP备16046278号-4</a>
      </Col>
      <Col>
        <a {...getLinkProps(`http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=${policeRegisterNum}`)}>
          <img alt="" src={gonganIcon} />
          公安部备案号：{policeRegisterNum}
        </a>
      </Col>
    </Styled.BottomBarContainer>
  ),
};

const footerId = 'asktug-footer';
const MutationObserver = window.MutationObserver || window.WebkitMutationObserver;

const observer = new MutationObserver((mutations) => {
  mutations.forEach(function (mutation) {
    mutation.addedNodes.forEach(function (node) {
      if (node.id === footerId) {
        const footerElem = document.getElementById(footerId);
        footerElem.classList.add(appClassName);
        ReactDOM.render(<Footer {...footerProps} />, footerElem);
      }
    });
  });
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
});
