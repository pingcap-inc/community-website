import * as React from 'react';
import * as Styled from './index.styled';
import { CommunityHead } from '~/components';
import { CoreLayout } from '~/layouts';
import { PageDataContext } from '~/context';
import ProfileCard from '../ProfileCard';
import BadgeCard from '../BadgeCard';
import { Space } from 'antd';
import { IProfile, IRawBadges } from '../../api';

export interface IProps {
  children: React.ReactNode;
  badges: IRawBadges[];
  profile: IProfile;
}

export default function ProfileLayout({ children, badges, profile }: IProps) {
  return (
    <PageDataContext.Provider value={{ data: undefined }}>
      <CommunityHead />
      <CoreLayout backgroundColor={'#e9eaee'}>
        <Styled.Content>
          <Styled.Container>
            <Styled.Start>
              <Space direction="vertical" size={32}>
                <ProfileCard
                  avatarUrl={profile.avatar_url}
                  name={profile.username}
                  level={profile.level}
                  description={profile.bio}
                  joinDate={profile.joined_at}
                  nums={{ like: 45, answer: 16, post: 9 }}
                />
                <BadgeCard badges={badges} />
              </Space>
            </Styled.Start>
            <Styled.End>{children}</Styled.End>
          </Styled.Container>
        </Styled.Content>
      </CoreLayout>
    </PageDataContext.Provider>
  );
}
