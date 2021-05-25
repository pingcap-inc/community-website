import React from 'react';
import { ActivityBanner } from '@tidb-community/ui';

import { getTitle } from '../utils';

export default {
  title: getTitle('ActivityBanner'),
  component: ActivityBanner,
};

const Template = (args) => <ActivityBanner {...args} />;

export const CardList = Template.bind({});

CardList.args = {
  backgroundImage: '/images/activity/banner.svg',
  text: '等不及了，快上车吧！',
  buttonImage: '/images/activity/button.svg',
};
