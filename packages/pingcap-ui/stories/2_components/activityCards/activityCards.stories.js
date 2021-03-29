import { ActivityCards } from '@pingcap/pingcap-ui';

import * as data from './activityCards.data';
import { getTitle } from '../utils';

export default {
  title: getTitle('ActivityCards'),
  component: ActivityCards,
};

const Template = (args) => <ActivityCards {...args} />;

export const CardList = Template.bind({});

CardList.args = {
  activities: data.activities,
};
