import React from 'react';

import Head from './Head.component';
import data from './communityHead.data';

const CommunityHead = (props) => <Head {...data} {...props} />;

export default CommunityHead;
