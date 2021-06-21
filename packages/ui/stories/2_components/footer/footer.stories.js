import React from 'react';
import styled from 'styled-components';
import { mixins, Footer } from '@tidb-community/ui';
import { getData } from '@tidb-community/datasource';

import { getTitle } from '../utils';

export default {
  title: getTitle('Footer'),
  component: Footer,
};

const Template = (args) => <Footer {...args} />;

export const WithNav = Template.bind({});

const title = 'TiDB Community';
const { navItems, icons } = getData({ locale: 'en' }).nav.footer;

WithNav.args = {
  icons,
  logo: <img alt={title} src="/images/community/logo.svg" />,
  navItems,
  title,
};

export const WithBottomBar = Template.bind({});

const BottomBarContainer = styled.div`
  ${mixins.flexCenter()};
  ${mixins.typography('p2')};
  margin-top: 1rem;
`;

WithBottomBar.args = {
  ...WithNav.args,
  bottomBar: <BottomBarContainer>京公网安备 11010802035112号</BottomBarContainer>,
};
