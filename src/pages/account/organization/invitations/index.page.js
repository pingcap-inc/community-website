import React from 'react';

import { CoreLayout } from 'layouts';
import Invitations from './Invitations.component';

const OrganizationInvitations = () => {
  return <CoreLayout domain="tug.tidb.io">{process.browser && <Invitations />}</CoreLayout>;
};

export default OrganizationInvitations;
