import React from 'react';
import * as Styled from './index.styled';

import { CommunityHead } from '~/components';
import { CoreLayout } from '~/layouts';
import { PageDataContext } from '~/context';

import ClassificationList from './ClassificationList';

const BlogHomePage = ({}) => {
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
              <Styled.End>End</Styled.End>
            </Styled.Container>
          </Styled.Content>
        </CoreLayout>
      </Styled.Background>
    </PageDataContext.Provider>
  );
};

export default BlogHomePage;
