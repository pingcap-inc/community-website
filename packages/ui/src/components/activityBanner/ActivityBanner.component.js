import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './activityBanner.styled';

const ActivityBanner = ({ backgroundImage, buttonImage, text, onClick }) => {
  return (
    <Styled.Banner $backgroundImage={backgroundImage} onClick={onClick}>
      <span>{text}</span>
      <Styled.ImgBtn alt={text} src={buttonImage} />
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
