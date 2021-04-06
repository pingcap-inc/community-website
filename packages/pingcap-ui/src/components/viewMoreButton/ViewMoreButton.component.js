import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './viewMoreButton.styled';

const ViewMoreButton = ({ children, onClick }) => (
  <Styled.Container onClick={onClick}>
    <Styled.ArrowIcon />
    {children}
  </Styled.Container>
);

ViewMoreButton.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ViewMoreButton;
