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
  nums: { like?: number; answer?: number; post?: number };
}

export default function ProfileLayout({ children, badges, profile, nums }: IProps) {
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
                  nums={nums}
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
