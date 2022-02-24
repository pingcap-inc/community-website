import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './activityBanner.styled';

const ActivityBanner = ({
  backgroundColor = '',
  backgroundImage = '',
  buttonImage = '',
  text,
  onClick,
  link,
  ...rest
}) => {
  return (
    <Styled.Banner $backgroundColor={backgroundColor} $backgroundImage={backgroundImage} onClick={onClick} {...rest}>
      {link.length !== 0 ? (
        <a href={link} target={'_blank'} rel={'noopener noreferrer'}>
          <Styled.Text>{text}</Styled.Text>
        </a>
      ) : (
        <Styled.Text>text</Styled.Text>
      )}
      {buttonImage !== '' && <Styled.ImgBtn alt={text} src={buttonImage} />}
    </Styled.Banner>
  );
};

ActivityBanner.propTypes = {
  backgroundColor: PropTypes.string,
  backgroundImage: PropTypes.string,
  buttonImage: PropTypes.string,
  // text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default ActivityBanner;
