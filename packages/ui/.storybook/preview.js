import 'antd/dist/antd.css';
import { constants, createAppGlobalStyle } from '@tidb-community/ui';

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
