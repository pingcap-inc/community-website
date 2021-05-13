import React from 'react';

import data from './banner.data';
import { BannerContent, BannerImage } from './banner.styled';

const Banner = () => {
  return (
    <BannerContent>
      <BannerImage />
      <p>{data.leading}</p>
      <ul>
        {data.benefits.map((benefit, i) => (
          <li key={i}>{benefit}</li>
        ))}
      </ul>
    </BannerContent>
  );
};

export default Banner;
