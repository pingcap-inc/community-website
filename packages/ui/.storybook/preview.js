import '@tidb-community/ui/antd/global.less';
import { constants, createAppGlobalStyle } from '@tidb-community/ui';
import { api } from '@tidb-community/datasource';

api.initApi(console.error);

const GlobalStyle = createAppGlobalStyle();

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
  (Story) => (
    <div className={constants.appClassName}>
      <GlobalStyle />
      <Story />
    </div>
  ),
];
