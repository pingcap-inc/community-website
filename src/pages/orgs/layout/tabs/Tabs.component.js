import React, { useCallback, useMemo, useState } from 'react';

import * as Styled from './tabs.styled';
import { Tabs as AntTabs } from 'antd';
import { useRouter } from 'next/router';

const Tabs = ({ slug }) => {
  const router = useRouter();

  const page = useMemo(() => router.pathname.split('/')[3], [router.pathname]);
  const [activeKey, setActiveKey] = useState(page);

  const onTabClick = useCallback(
    (key) => {
      setActiveKey(page);
      router.push(`/orgs/${slug}/${key}`);
    },
    [page, slug, router]
  );

  return (
    <Styled.Tabs activeKey={activeKey} onTabClick={onTabClick} animated={false}>
      <AntTabs.TabPane tab="首页" key={`home`} />
      <AntTabs.TabPane tab="成员" key={`members`} />
    </Styled.Tabs>
  );
};

export default Tabs;
