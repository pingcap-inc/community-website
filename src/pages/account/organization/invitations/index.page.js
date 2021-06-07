import React from 'react';

import { CoreLayout } from '~/layouts';
import Invitations from './Invitations.component';
import * as Styled from './invitations.styled';
import { CommunityHead } from '~/components';

const OrganizationInvitations = () => {
  return (
    <CoreLayout domain="tidb.io" MainWrapper={Styled.MainWrapper}>
      <CommunityHead title="团队邀请" />
      {process.browser && <Invitations />}
    </CoreLayout>
  );
};

export default OrganizationInvitations;
