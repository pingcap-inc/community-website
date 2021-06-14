import React from 'react';
import { useTranslation } from 'next-i18next';

import * as data from './head.data';
import Head from './Head.component';

export const CommunityHead = (props) => {
  const { t } = useTranslation();

  const headProps = {
    ...data.community,
    description: t('head.description'),
    titleSuffix: t('head.titleSuffix'),
  };

  return <Head {...headProps} {...props} />;
};

export const TugHead = (props) => <Head {...data.tug} {...props} />;
