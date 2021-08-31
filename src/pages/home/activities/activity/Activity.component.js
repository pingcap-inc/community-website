import Image from 'next/image';
import React from 'react';
import dayjs from 'dayjs';

import * as Styled from './activity.styled';
import { common as commonUtils } from '~/utils';

const Activity = ({ title, image, link, location, type, date, intro, onClick, isSmallScreen }) => {
  const props = {
    onClick: onClick(link),
    $isSmallScreen: isSmallScreen,
  };

  const imgProps = commonUtils.getStrapiImgProps(image);

  return (
    <Styled.Container {...props}>
      <Styled.ImageWrapper>
        <Image alt={title} src={imgProps.src} layout="fill" objectFit="cover" />
      </Styled.ImageWrapper>
      <Styled.Content>
        <h3>{title}</h3>
        <Styled.Metadata>{[location, type, dayjs(date).format('YYYY.MM.DD')].join(' | ')}</Styled.Metadata>
        <Styled.Text>{intro}</Styled.Text>
      </Styled.Content>
    </Styled.Container>
  );
};

export default Activity;
