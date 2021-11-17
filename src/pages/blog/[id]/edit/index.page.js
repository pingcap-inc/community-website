import React, { useEffect, useState } from 'react';

import * as Styled from './edit.styled';
import { CoreLayout } from '~/layouts';
import '@pingcap-inc/tidb-community-editor/dist/style.css';
import { Skeleton, Tabs } from 'antd';
import Editing from './editing/Editing.component';
import EditContext, { useEditContextProvider } from './edit.context';
import Previewing from '~/pages/blog/[id]/edit/previewing/Previewing.component';
import { useRouter } from 'next/router';
import { api } from '@tidb-community/datasource';

const BlogEditPage = () => {
  const editContextValue = useEditContextProvider();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { setContent, setTags, setTitle, setCategory, setOrigin } = editContextValue;

  const {
    query: { id },
  } = router;
  useEffect(() => {
    if (id && id !== 'new') {
      setLoading(true);
      api.blog.posts.post
        .info(Number(id))
        .then((info) => {
          setTitle(info.title);
          setOrigin(info.origin === 'ORIGIN' ? false : info.sourceURL);
          setTags(info.tags);
          setCategory(info.category);
          setContent(JSON.parse(info.content));
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [id, setContent, setTags, setTitle, setCategory, setOrigin]);

  return (
    <CoreLayout MainWrapper={Styled.MainWrapper}>
      <Styled.Container>
        <EditContext.Provider value={editContextValue}>
          {loading ? (
            <Skeleton active />
          ) : (
            <Tabs>
              <Tabs.TabPane tab="编辑" key="editing">
                <Editing />
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
