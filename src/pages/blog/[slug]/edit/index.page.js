import React, { useContext, useEffect } from 'react';

import * as Styled from './edit.styled';
import { CoreLayout } from '~/layouts';
import '@pingcap-inc/tidb-community-editor/dist/style.css';
import { Tabs } from 'antd';
import Editing from './editing/Editing.component';
import EditContext, { useEditContextProvider } from './edit.context';
import Previewing from './previewing/Previewing.component';
import { useRouter } from 'next/router';
import { usePrincipal } from '../../blog.hooks';
import { AuthContext } from '~/context';
import { getI18nProps } from '~/utils/i18n.utils';
import { CommunityHead } from '~/components';

export const getServerSideProps = async (ctx) => {
  const i18nProps = await getI18nProps(['common'])(ctx);

  return {
    props: {
      ...i18nProps,
    },
  };
};

const BlogEditPage = () => {
  const editContextValue = useEditContextProvider();
  const router = useRouter();
  const { reload, blogInfo } = editContextValue;
  const { login } = useContext(AuthContext);
  const p = usePrincipal();
  const { isLogin, loading } = p;

  useEffect(() => {
    if (!loading && !isLogin) {
      login();
    }
  }, [isLogin, login, loading]);

  const {
    query: { slug },
  } = router;
  useEffect(() => {
    if (router.isReady) {
      reload(slug);
    }
  }, [slug, reload, router]);

  return (
    <CoreLayout MainWrapper={Styled.MainWrapper}>
      <CommunityHead
        title="专栏 - 编辑文章"
        // description
        // keyword
      />
      <Styled.Container>
        <EditContext.Provider value={editContextValue}>
          {loading ? (
            <></>
          ) : (
            <Tabs>
              <Tabs.TabPane tab="编辑" key="editing">
                <Editing blogInfo={blogInfo} />
              </Tabs.TabPane>
              <Tabs.TabPane tab="预览" key="previewing">
                <Previewing blogInfo={blogInfo} />
              </Tabs.TabPane>
            </Tabs>
          )}
        </EditContext.Provider>
      </Styled.Container>
    </CoreLayout>
  );
};

export default BlogEditPage;
