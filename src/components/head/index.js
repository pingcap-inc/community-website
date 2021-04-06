import React from 'react';

import * as data from './head.data';
import Head from './Head.component';

export const CommunityHead = (props) => <Head {...data.community} {...props} />;

export const TugHead = (props) => <Head {...data.tug} {...props} />;
