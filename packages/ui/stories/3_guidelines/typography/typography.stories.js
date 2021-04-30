import React from 'react';
import { getTitle } from '../utils';

import * as Styled from './typography.styled';

const Typography = () => (
  <>
    <Styled.H0>H0 font-size: 30px;</Styled.H0>
    <Styled.H1>H1 font-size: 24px;</Styled.H1>
    <Styled.H2>H2 font-size: 20px;</Styled.H2>
    <Styled.H3>H3 font-size: 18px;</Styled.H3>
    <Styled.P1>P1 font-size: 16px;</Styled.P1>
    <Styled.P2>P2 font-size: 14px;</Styled.P2>
  </>
);

export default {
  title: getTitle('Typography'),
};

const Template = (args) => <Typography {...args} />;

export const Guildelines = Template.bind({});
