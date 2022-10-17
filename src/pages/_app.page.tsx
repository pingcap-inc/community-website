import React, {useEffect} from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Link from 'next/link';
import {constants, createAppGlobalStyle} from '@tidb-community/ui';
import {logPageView} from '@tidb-community/tracking-script';
import {defineSiteComponentsConfig, Env, Site} from '@pingcap-inc/tidb-community-site-components';

import type {AppProps} from "next/app";

import '~/components/Button/Button.scss';
import '~/components/Container/Container.scss';
import '~/styles/globals.css';

import 'dayjs/locale/zh';

import '@fullcalendar/common/main.css';
import '@fullcalendar/daygrid/main.css';

import '@formatjs/intl-numberformat/polyfill';
import '@formatjs/intl-numberformat/locale-data/en';

import '@pingcap-inc/tidb-community-ui/dist/antd.css';
import '@pingcap-inc/tidb-community-site-components/dist/index.css';


dayjs.extend(relativeTime);
// TODO: Need to sync with NextJS locale value
dayjs.locale('zh');

const GlobalStyle = createAppGlobalStyle();

// some attributes would be passed through Link component like `className`
const WrapLink = ({ url, children, ...attrs }) => {
  return (
    <Link href={url}>
      <a href={url} {...attrs}>
        {children}
      </a>
    </Link>
  );
};

// define global configs for @pingcap-inc/tidb-community-site-components
defineSiteComponentsConfig({
  site: Site.home,
  env: Env[process.env.NEXT_PUBLIC_RUNTIME_ENV === 'production' ? 'prod' : process.env.NEXT_PUBLIC_RUNTIME_ENV],
  wrapRouteLink: (key, url, node) => {
    return (
      <WrapLink url={url} key={key}>
        {node}
      </WrapLink>
    );
  },
});

export default function App({ Component, pageProps, router }: AppProps) {

  useEffect(() => {
    const handleRouteChange = () => {
      if (process.env.NEXT_PUBLIC_RUNTIME_ENV === 'production') {
        logPageView();
      }
    };

    document.body.classList.add(constants.appClassName);
    handleRouteChange();

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}
