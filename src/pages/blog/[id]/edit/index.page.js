import React, { useEffect } from 'react';

import * as Styled from './edit.styled';
import { CoreLayout } from '~/layouts';
import '@pingcap-inc/tidb-community-editor/dist/style.css';
import { Skeleton, Tabs } from 'antd';
import Editing from './editing/Editing.component';
import EditContext, { useEditContextProvider } from './edit.context';
import Previewing from '~/pages/blog/[id]/edit/previewing/Previewing.component';
import { useRouter } from 'next/router';

const BlogEditPage = () => {
  const editContextValue = useEditContextProvider();
  const router = useRouter();
  const { reload, loading, blogInfo } = editContextValue;

  const {
    query: { id },
  } = router;
  useEffect(() => {
    reload(id);
  }, [id, reload]);

  return (
    <CoreLayout MainWrapper={Styled.MainWrapper}>
      <Styled.Container>
        <EditContext.Provider value={editContextValue}>
          {loading ? (
            <Skeleton active />
          ) : (
            <Tabs>
              <Tabs.TabPane tab="编辑" key="editing">
                <Editing blogInfo={blogInfo} />
              </Tabs.TabPane>
              <Tabs.TabPane tab="预览" key="previewing">
                <Previewing />
              </Tabs.TabPane>
            </Tabs>
          )}
        </EditContext.Provider>
      </Styled.Container>
    </CoreLayout>
  );
};

export default BlogEditPage;
