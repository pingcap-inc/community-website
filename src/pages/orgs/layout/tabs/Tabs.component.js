import React, { useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'next-i18next';

import * as Styled from './tabs.styled';
import { Tabs as AntTabs } from 'antd';
import { useRouter } from 'next/router';

const Tabs = ({ slug }) => {
  const router = useRouter();
  const page = useMemo(() => router.pathname.split('/')[3], [router.pathname]);
  const [activeKey, setActiveKey] = useState(page);
  const { t } = useTranslation('page-orgs');

  const lang = t('tabs', { returnObjects: true });

  const onTabClick = useCallback(
    (key) => {
      setActiveKey(key);
      router.push(`/orgs/${slug}/${key}`);
    },
    [slug, router]
  );

  const getTab = (key) => <AntTabs.TabPane key={key} tab={lang[key]} />;

  return (
    <Styled.Tabs activeKey={activeKey} onTabClick={onTabClick} animated={false}>
      {getTab('home')}
      {getTab('members')}
      {getTab('settings')}
    </Styled.Tabs>
  );
};

export default Tabs;
