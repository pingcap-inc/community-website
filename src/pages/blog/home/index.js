import React from 'react';
import * as Styled from './index.styled';

import { CommunityHead } from '~/components';
import { CoreLayout } from '~/layouts';
import { PageDataContext } from '~/context';

import ClassificationList from './ClassificationList';
import { Button } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';
import { common as commonUtils, link as linkUtils } from '~/utils';

const BlogHomePage = ({}) => {
  const router = useRouter();
  const handleClickWrite = (e) => {
    e.preventDefault();
    linkUtils.handleRedirect(router, '/blog');
  };
  return (
    <PageDataContext.Provider value={{}}>
      <CommunityHead
        title="博客"
        // description
        keyword
      />

      <Styled.Background>
        <CoreLayout>
          <Styled.Content>
            <Styled.Container>
              <Styled.Start>
                <ClassificationList />
              </Styled.Start>
              <Styled.Center>Center</Styled.Center>
              <Styled.End>
                <Button icon={<EditOutlined />} onClick={handleClickWrite} type="primary" block>
                  写博客
                </Button>
              </Styled.End>
            </Styled.Container>
          </Styled.Content>
        </CoreLayout>
      </Styled.Background>
    </PageDataContext.Provider>
  );
};

export default BlogHomePage;
