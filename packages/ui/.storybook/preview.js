import '@tidb-community/ui/antd/global.less';
import React, { useEffect } from 'react';
import { constants, createAppGlobalStyle } from '@tidb-community/ui';

const GlobalStyle = createAppGlobalStyle();

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
  (Story) => {
    useEffect(() => {
      document.body.classList.add(constants.appClassName);
    }, []);

    return (
      <>
        <GlobalStyle />
        <Story />
      </>
    );
  },
];
