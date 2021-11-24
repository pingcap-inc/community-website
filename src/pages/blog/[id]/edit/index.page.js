import React, { useContext, useEffect } from 'react';

import * as Styled from './edit.styled';
import { CoreLayout } from '~/layouts';
import '@pingcap-inc/tidb-community-editor/dist/style.css';
import { Skeleton, Tabs } from 'antd';
import Editing from './editing/Editing.component';
import EditContext, { useEditContextProvider } from './edit.context';
import Previewing from '~/pages/blog/[id]/edit/previewing/Previewing.component';
import { useRouter } from 'next/router';
import { usePrincipal } from '../../blog.hooks';
import { AuthContext } from '../../../../context';

const BlogEditPage = () => {
  const editContextValue = useEditContextProvider();
  const router = useRouter();
  const { reload, loading, blogInfo } = editContextValue;
  const { login } = useContext(AuthContext);
  const { isLogin } = usePrincipal();

  useEffect(() => {
    if (!loading && !isLogin) {
      login();
    }
  }, [isLogin, login, loading]);

  const {
    query: { id },
  } = router;
  useEffect(() => {
    if (router.isReady) {
      reload(id);
    }
  }, [id, reload, router]);

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
