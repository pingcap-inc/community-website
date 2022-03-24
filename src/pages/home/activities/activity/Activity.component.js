import Image from 'next/image';
import React from 'react';
import dayjs from 'dayjs';

import * as Styled from './activity.styled';
import { common as commonUtils } from '~/utils';
import { Tooltip } from 'antd';
import Anchor from '~/components/Anchor';

const Activity = ({ title, image, link, location, type, date, intro, isSmallScreen }) => {
  const props = {
    $isSmallScreen: isSmallScreen,
  };

  const imgProps = commonUtils.getStrapiImgProps(image);

  return (
    <Styled.Container {...props}>
      <Styled.ImageWrapper>
        <Anchor href={link}>
          <Image alt={title} src={imgProps.src} layout="fill" objectFit="cover" />
        </Anchor>
      </Styled.ImageWrapper>
      <Styled.Content>
        <Anchor href={link}>
          <h3>{title}</h3>
          <Styled.Metadata>{[location, type, dayjs(date).format('YYYY.MM.DD')].join(' | ')}</Styled.Metadata>
          <Tooltip title={intro} placement={'bottom'}>
            <Styled.Intro>{intro}</Styled.Intro>
          </Tooltip>
        </Anchor>
      </Styled.Content>
    </Styled.Container>
  );
};

export default Activity;
