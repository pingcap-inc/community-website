import Image from 'next/image';
import React, { useRef } from 'react';
import { useSize } from 'ahooks';

import * as Styled from './banner.styled';
import data from './banner.data';
import { bgWidth, bgHeight } from './banner.constants';

const Banner = () => {
  const ref = useRef();
  const size = useSize(ref);

  const imgSizeProps =
    size.width > bgWidth
      ? {
          layout: 'fill',
          objectFit: 'cover'
        }
      : {
          width: bgWidth,
          height: bgHeight,
          layout: 'fixed'
        };

  return (
    <Styled.Container ref={ref}>
      <Styled.Background>
        <Image src="/images/community/banner.svg" {...imgSizeProps} />
      </Styled.Background>
      <Styled.Content>
        <Styled.Title>{data.title}</Styled.Title>
      </Styled.Content>
    </Styled.Container>
  );
};

export default Banner;
