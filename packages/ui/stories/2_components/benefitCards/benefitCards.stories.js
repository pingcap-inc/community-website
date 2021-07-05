import React from 'react';
import { BenefitCards } from '@tidb-community/ui';

import * as data from './benefitCards.data';
import { getTitle } from '../utils';

export default {
  title: getTitle('BenefitCards'),
  component: BenefitCards,
};

const Template = (args) => (
  <div style={{ background: 'darkblue', padding: 40 }}>
    <BenefitCards {...args} />
  </div>
);

export const CardList = Template.bind({});

CardList.args = {
  benefits: data.benefits,
};
