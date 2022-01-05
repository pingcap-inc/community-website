import * as React from 'react';
import * as Styled from './index.styled';
import { CommunityHead } from '~/components';
import { CoreLayout } from '~/layouts';
import { PageDataContext } from '~/context';
// import { getI18nProps } from '~/utils/i18n.utils';
import ProfileCard from './components/ProfileCard';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {},
  };
};

export default function ProfilePage() {
  return (
    <PageDataContext.Provider value={{}}>
      <CommunityHead />
      <CoreLayout backgroundColor={'#e9eaee'}>
        <Styled.Content>
          <Styled.Container>
            <Styled.Start>
              <ProfileCard
                avatarUrl={
                  'https://tidb.io/_next/image?url=%2Fimages%2Favatar%2F%25E6%25B2%2588%25E6%2597%25B8.jpg&w=256&q=75'
                }
                name={'这是一个昵称'}
                level={6}
                description={
                  '这是一段个人介绍这是一段个人介绍这是一段个人介绍这是一段个人介绍这是一段个人介绍这是一段个人介绍\n' +
                  '这是一段个人介绍这是一段个人介绍'
                }
                joinDate={'2020.01.10'}
                nums={{ like: 45, answer: 16, post: 9 }}
              />
            </Styled.Start>
            <Styled.End></Styled.End>
          </Styled.Container>
        </Styled.Content>
      </CoreLayout>
    </PageDataContext.Provider>
  );
}
