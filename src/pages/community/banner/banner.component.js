import * as R from 'ramda';
import Image from 'next/image';
import React, { useRef } from 'react';
import { useRouter } from 'next/router';
import { useSize } from 'ahooks';

import * as Styled from './banner.styled';
import data from './banner.data';
import { bgWidth, bgHeight } from './banner.constants';
import { link as linkUtils } from 'utils';

const Banner = () => {
  const ref = useRef();
  const size = useSize(ref);
  const router = useRouter();

  const onCardClick = R.curry(linkUtils.handleRedirect)(router);

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
        <h2>{data.title}</h2>
        <p>{data.desc}</p>

        <Styled.Navs>
          {data.navs.map(({ title, label, link }, idx) => (
            <Styled.NavCard key={idx} onClick={e => onCardClick(link)}>
              <h3>{title}</h3>
              <div>{label} &gt;</div>
            </Styled.NavCard>
          ))}
        </Styled.Navs>
      </Styled.Content>
    </Styled.Container>
  );
};

export default Banner;
