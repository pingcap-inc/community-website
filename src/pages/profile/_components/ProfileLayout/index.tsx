import * as React from 'react';
import * as Styled from './index.styled';
import { CommunityHead } from '~/components';
import { CoreLayout } from '~/layouts';
import { PageDataContext } from '~/context';
import ProfileCard from '../ProfileCard';
import BadgeCard from '../BadgeCard';
import { Space } from 'antd';

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   // @ts-ignore
//   const i18nProps = await getI18nProps(['common'])(ctx);
//   return {
//     props: {
//       ...i18nProps,
//     },
//   };
// };

export interface IProps {
  children: React.ReactNode
}

export default function ProfileLayout({children}: IProps) {
  const onChange = () => {
    //  TODO: handle page change
  };
  return (
    <PageDataContext.Provider value={{ data: undefined }}>
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
            <Styled.End>
              {children}
            </Styled.End>
          </Styled.Container>
        </Styled.Content>
      </CoreLayout>
    </PageDataContext.Provider>
  );
}
