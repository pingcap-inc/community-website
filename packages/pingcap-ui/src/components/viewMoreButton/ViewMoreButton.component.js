import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './viewMoreButton.styled';

const ViewMoreButton = ({ children }) => (
  <Styled.Container>
    <Styled.ArrowIcon />
    {children}
  </Styled.Container>
);

ViewMoreButton.propTypes = {
  children: PropTypes.string.isRequired,
};

export default ViewMoreButton;
