import * as R from 'ramda';
import Image from 'next/image';
import React, { useRef } from 'react';
import { useRouter } from 'next/router';
import { useSize } from 'ahooks';

import * as Styled from './banner.styled';
import ChineseIcon from './chinese.svg';
import data from './banner.data';
import { bgWidth, bgHeight } from './banner.constants';
import { link as linkUtils } from '~/utils';

const Banner = () => {
  const ref = useRef();
  const size = useSize(ref);
  const router = useRouter();

  const { width: sizeWidth } = size;
  const onCardClick = R.curry(linkUtils.handleRedirect)(router, R.__, undefined, undefined);

  const imgSizeProps =
    sizeWidth > bgWidth
      ? {
          layout: 'fill',
          objectFit: 'cover',
        }
      : {
          width: bgWidth,
          height: bgHeight,
          layout: 'fixed',
        };

  return (
    <Styled.Container ref={ref} sm={sizeWidth <= 680} md={sizeWidth <= 880}>
      <Styled.Background>
        <Image src="/images/community/banner.svg" {...imgSizeProps} />
      </Styled.Background>

      <Styled.Content>
        <h2>{data.title}</h2>
        <p>{data.desc}</p>

        <Styled.Navs>
          {data.navs.map(({ title, isCN, label, link }, idx) => (
            <Styled.NavCard key={idx} onClick={(e) => onCardClick(link)}>
              <h3>
                {title}
                {isCN && <ChineseIcon />}
              </h3>
              <Styled.NavDesc>
                <span>{label}</span> &gt;
              </Styled.NavDesc>
            </Styled.NavCard>
          ))}
        </Styled.Navs>
      </Styled.Content>
    </Styled.Container>
  );
};

export default Banner;
