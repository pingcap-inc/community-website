import React, { HTMLAttributes } from 'react';

import * as Styled from './activityBanner.styled';

interface ActivityBannerProps extends HTMLAttributes<HTMLDivElement> {
  backgroundColor?: string;
  backgroundImage?: string;
  buttonImage?: string;
  buttonAlt?: string;
  text: React.ReactNode;
  link?: string;
}

const ActivityBanner = ({
  backgroundColor = '',
  backgroundImage = '',
  buttonImage = '',
  buttonAlt = '',
  text,
  link,
  ...rest
}: ActivityBannerProps) => {
  return (
    <Styled.Banner $backgroundColor={backgroundColor} $backgroundImage={backgroundImage} {...rest}>
      {link.length !== 0 ? (
        <a href={link} target="_blank" rel="noopener noreferrer">
          <Styled.Text>{text}</Styled.Text>
        </a>
      ) : (
        <Styled.Text>text</Styled.Text>
      )}
      {buttonImage !== '' && <Styled.ImgBtn alt={buttonAlt} src={buttonImage} />}
    </Styled.Banner>
  );
};

export default ActivityBanner;
