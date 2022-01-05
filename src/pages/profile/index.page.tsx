import * as React from 'react';
import * as Styled from './index.styled';
import { CommunityHead } from '~/components';
import { CoreLayout } from '~/layouts';
import { PageDataContext } from '~/context';
import { getI18nProps } from '~/utils/i18n.utils';
import ProfileCard from './components/ProfileCard';
import BadgeCard from './components/BadgeCard';
import { GetServerSideProps } from 'next';
import { Space } from 'antd';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const i18nProps = await getI18nProps(['common'])(ctx);
  return {
    props: {
      ...i18nProps,
    },
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
              <Space direction="vertical" size={32}>
                <ProfileCard
                  avatarUrl={'https://pic2.zhimg.com/v2-e78360ca7f3ba089565a80abee166749_xl.jpg'}
                  name={'这是一个昵称'}
                  level={6}
                  description={
                    '这是一段个人介绍这是一段个人介绍这是一段个人介绍这是一段个人介绍这是一段个人介绍这是一段个人介绍\n' +
                    '这是一段个人介绍这是一段个人介绍'
                  }
                  joinDate={'2020.01.10'}
                  nums={{ like: 45, answer: 16, post: 9 }}
                />
                <BadgeCard nums={{ current: 8, total: 27 }} />
              </Space>
            </Styled.Start>
            <Styled.End></Styled.End>
          </Styled.Container>
        </Styled.Content>
      </CoreLayout>
    </PageDataContext.Provider>
  );
}
