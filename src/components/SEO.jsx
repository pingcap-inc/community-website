import React from 'react';
import Head from 'next/head';

import tugConfig from '../tug.config';

const iconUrl = '/images/icon.svg';

export default function SEO({ title, description, keyword }) {
  const keywordStr = keyword && Array.isArray(keyword) ? keyword.join(',') : keyword;
  const fullTitle = title + tugConfig.titleSuffix;
  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywordStr && <meta name="keyword" content={keywordStr} />}
      <meta name="author" content={tugConfig.author} />

      {/* Open Graph protocol, for generating share info, usually using for share to facebook */}
      <meta name="og:title" content={fullTitle} />
      <meta name="og:description" content={description} />
      <meta name="og:type" content="website" />
      <meta name="og:image" content={iconUrl} />
      <meta name="og:image:width" content="200" />
      <meta name="og:image:height" content="200" />

      {/* for sharing to twitter */}
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={tugConfig.author} />

      <link rel="icon" href="/favicon(16x16).ico" sizes="16x16" />
      <link rel="icon" href="/favicon(32x32).ico" sizes="32x32" />
      <link rel="icon" href="/favicon(48x48).ico" sizes="48x48" />
      <link rel="icon" href="/favicon(64x64).ico" sizes="64x64" />
    </Head>
  );
}
