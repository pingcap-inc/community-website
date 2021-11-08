import React from 'react';

import * as Styled from './edit.styled';
import { CoreLayout } from '~/layouts';
import '../../../../../node_modules/@634750802/a-editor/dist/style.css';
import { Tabs } from 'antd';
import Editing from './editing/Editing.component';
import EditContext, { useEditContextProvider } from './edit.context';
import Previewing from '~/pages/blogs/[id]/edit/previewing/Previewing.component';

const BlogEditPage = () => {
  const editContextValue = useEditContextProvider();

  return (
    <CoreLayout MainWrapper={Styled.MainWrapper}>
      <Styled.Container>
        <EditContext.Provider value={editContextValue}>
          <Tabs>
            <Tabs.TabPane tab="编辑" key="editing">
              <Editing />
            </Tabs.TabPane>
            <Tabs.TabPane tab="预览" key="previewing">
              <Previewing />
            </Tabs.TabPane>
          </Tabs>
        </EditContext.Provider>
      </Styled.Container>
    </CoreLayout>
  );
};

export default BlogEditPage;
