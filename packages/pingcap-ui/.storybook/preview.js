import 'antd/dist/antd.css';
import { createAppGlobalStyle } from '@pingcap/pingpac-ui';

const GlobalStyle = createAppGlobalStyle();

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
  (Story) => (
    <div id="__next">
      <GlobalStyle />
      <Story />
    </div>
  ),
];
