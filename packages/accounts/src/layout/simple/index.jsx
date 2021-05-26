import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './simple.styled';

const SimpleLayout = ({ title = 'TiDB', subtitle = 'SQL at Scale', children }) => (
  <Styled.Container>
    <Styled.Main>
      <Styled.Logo />
      <Styled.Title>{title}</Styled.Title>
      <Styled.SubTitle>{subtitle}</Styled.SubTitle>
      {children}
    </Styled.Main>
  </Styled.Container>
);

SimpleLayout.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.element,
};

export default SimpleLayout;
