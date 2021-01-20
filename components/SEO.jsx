import React from 'react'
import Head from "next/head";

import tugConfig from '../tug.config'

export default function SEO({title, description, keyword}) {
  const keywordStr = keyword && Array.isArray(keyword) ? keyword.join(',') : keyword
  return (
    <Head>
      <title>{title + tugConfig.titleSuffix}</title>
      <meta name="description" content={description}/>
      {keywordStr && <meta name="keyword" content={keywordStr}/>}
      <link rel="icon" href="/favicon(16x16).ico" sizes="16x16"/>
      <link rel="icon" href="/favicon(32x32).ico" sizes="32x32"/>
      <link rel="icon" href="/favicon(48x48).ico" sizes="48x48"/>
      <link rel="icon" href="/favicon(64x64).ico" sizes="64x64"/>
    </Head>
  )
}
