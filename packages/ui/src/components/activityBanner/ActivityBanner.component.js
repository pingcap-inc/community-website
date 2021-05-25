import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './activityBanner.styled';

const ActivityBanner = ({ backgroundImage, buttonImage, text, onClick }) => {
  return (
    <Styled.Banner $backgroundImage={backgroundImage}>
      <span>{text}</span>
      <Styled.ImgBtn alt="new organization" src={buttonImage} onClick={onClick} />
    </Styled.Banner>
  );
};

ActivityBanner.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  buttonImage: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ActivityBanner;
