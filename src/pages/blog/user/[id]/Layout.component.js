import React, { useMemo } from 'react';
import { CommunityHead } from '~/components';
import BlogLayout from '../../BlogLayout.component';
import * as Styled from './index.styled';
import { Breadcrumb } from 'antd';
import Link from 'next/link';
import Tab from '../Tab';
import { PageDataContext } from '~/context';
import { usePrincipal } from '../../blog.hooks';
import useSWR from 'swr';

const UserDetailsLayout = ({ itemKey, item, userDetails: initialUserDetails, postCount, children, tabExtend }) => {
  const principal = usePrincipal();
  const { data: userDetails } = useSWR(['api.blog.users.get', { userId: initialUserDetails.id }], {
    fallbackData: initialUserDetails,
    revalidateOnMount: true,
  });

  const itemText = useMemo(() => {
    if (userDetails.id === principal?.id) {
      return `我的${item}`;
    } else {
      return `${userDetails.username ?? userDetails.name} 的${item}`;
    }
  }, [item, principal, userDetails]);

  return (
    <PageDataContext.Provider value={{}}>
      <CommunityHead
        title="专栏"
        // description
        // keyword
      />

      <BlogLayout>
        <Styled.Content>
          <Styled.Container>
            <Styled.Breadcrumb>
              <Breadcrumb.Item>
                <Link href="/blog">专栏</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>{itemText}</Breadcrumb.Item>
            </Styled.Breadcrumb>

            <Styled.Action>
              <Tab
                id={userDetails.id}
                selectedKey={itemKey}
                posts={postCount ?? userDetails.posts}
                likes={userDetails.likes}
                favorites={userDetails.favorites}
                comments={userDetails.comments}
              />
              {tabExtend && <div>{tabExtend}</div>}
            </Styled.Action>

            {children}
          </Styled.Container>
        </Styled.Content>
      </BlogLayout>
    </PageDataContext.Provider>
  );
};

export default UserDetailsLayout;
