import { ActivityCards } from '@pingcap/pingcap-ui';

import * as data from './activityCards.data';
import { getTitle } from '../utils';

console.log('ActivityCards', ActivityCards, data);

export default {
  title: getTitle('ActivityCards'),
  component: ActivityCards
};

const Template = args => <ActivityCards {...args} />;

export const CardList = Template.bind({});

CardList.args = {
  cards: data.cards
};
