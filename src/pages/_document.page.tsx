// Copied from the offical example for the integration with styled-components:
// https://github.com/vercel/next.js/blob/master/examples/with-styled-components/pages/_document.js
import React from 'react';
// eslint-disable-next-line @next/next/no-document-import-in-page
import Document from 'next/document'
import type {DocumentInitialProps} from 'next/document'

import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
