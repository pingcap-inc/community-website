import { ViewMoreButton } from '@tidb-community/ui';

import * as Styled from './viewMoreButton.styled';
import { getTitle } from '../utils';

export default {
  title: getTitle('ViewMoreButton'),
  component: ViewMoreButton,
};

const Template = (args) => (
  <Styled.Container>
    <ViewMoreButton {...args} />
  </Styled.Container>
);

export const WithLabel = Template.bind({});

WithLabel.args = {
  children: 'View More',
};
