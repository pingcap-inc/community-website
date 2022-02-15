import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './activityBanner.styled';

const ActivityBanner = ({ backgroundColor = '', backgroundImage = '', buttonImage = '', text, onClick }) => {
  return (
    <Styled.Banner $backgroundColor={backgroundColor} $backgroundImage={backgroundImage} onClick={onClick}>
      <span>{text}</span>
      {buttonImage !== '' && <Styled.ImgBtn alt={text} src={buttonImage} />}
    </Styled.Banner>
  );
};

ActivityBanner.propTypes = {
  backgroundColor: PropTypes.string,
  backgroundImage: PropTypes.string,
  buttonImage: PropTypes.string,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ActivityBanner;
