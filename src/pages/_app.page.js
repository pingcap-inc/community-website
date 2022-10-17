import * as R from 'ramda';
import React, {useEffect} from 'react';
import {SWRConfig} from 'swr';
// import {Provider} from 'react-redux';
import Link from 'next/link';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/zh';

import {api} from '@tidb-community/datasource';
import {constants, createAppGlobalStyle} from '@tidb-community/ui';
import {logPageView} from '@tidb-community/tracking-script';
import {withLayout} from '@tidb-community/common';
import {
  defineSiteComponentsConfig,
  Env,
  Site,
  // SiteComponentsContext,
} from '@pingcap-inc/tidb-community-site-components';

import '@fullcalendar/common/main.css';
import '@fullcalendar/daygrid/main.css';

import '@formatjs/intl-numberformat/polyfill';
import '@formatjs/intl-numberformat/locale-data/en';

import '@pingcap-inc/tidb-community-site-components/dist/index.css';
import '@pingcap-inc/tidb-community-ui/dist/antd.css';

import '~/components/Button/Button.scss';
import '~/components/Container/Container.scss';
import '~/styles/globals.css';

// import {fetcher as newFetcher} from '~/api';

dayjs.extend(relativeTime);
// TODO: Need to sync with NextJS locale value
dayjs.locale('zh');

const GlobalStyle = createAppGlobalStyle();

const fetcher = (path, params) => {
  // SWR shallowly compares the arguments on every render, and triggers revalidation
  // if any of them has changed. Thus, if you'd like to pass an object as params to
  // the API call, you may use JSON.stringify to the object params to a string value.
  // Read more: https://swr.vercel.app/docs/arguments#passing-objects
  try {
    params = JSON.parse(params);
  } catch (err) {}
  return R.path(path.split('.'), api)(params);
};

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

// const siteFetchers = {
//   fetchers: {
//     accounts: newFetcher,
//     blog: newFetcher,
//     asktug: newFetcher,
//   },
// };

const App = ({ Component, pageProps, router }) => {
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

  const WrappedComponent = withLayout(Component);

  return (
    <SWRConfig
      value={{
        fetcher,
      }}
    >
      {/*<Provider store={store}>*/}
        <GlobalStyle />
        {/*<SiteComponentsContext.Provider value={siteFetchers}>*/}
          <WrappedComponent {...pageProps} />
        {/*</SiteComponentsContext.Provider>*/}
      {/*</Provider>*/}
    </SWRConfig>
  );
};

export default App;
