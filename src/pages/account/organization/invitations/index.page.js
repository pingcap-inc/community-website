import React from 'react';

import { CoreLayout } from 'layouts';
import Invitations from './Invitations.component';
import * as Styled from './invitations.styled';

const OrganizationInvitations = () => {
  return (
    <CoreLayout domain="tug.tidb.io" MainWrapper={Styled.MainWrapper}>
      {process.browser && <Invitations />}
    </CoreLayout>
  );
};

export default OrganizationInvitations;
