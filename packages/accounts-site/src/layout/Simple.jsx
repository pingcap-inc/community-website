import React from 'react';
import PropTypes from 'prop-types';

import { PageContainer, Main, Logo, Title, SubTitle } from './Simple.styled';

const SimpleLayout = ({ title = 'TiDB', subtitle = 'SQL at Scale', children }) => {
  return (
    <PageContainer>
      <Main>
        <Logo/>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
        {children}
      </Main>
    </PageContainer>
  );
};

SimpleLayout.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default SimpleLayout;
