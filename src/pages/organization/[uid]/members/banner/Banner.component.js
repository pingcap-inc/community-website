import React from 'react';

import * as Styled from './banner.styled';
import VerifiedSVG from 'pages/organization/verified.svg';

const Banner = ({ description, logo, name }) => (
  <Styled.Container>
    <Styled.Content>
      <Styled.Information>
        <Styled.ImageWrapper>
          <img alt={name} src={logo} />
        </Styled.ImageWrapper>
        <Styled.TextWrapper>
          <Styled.Name>
            {name}
            <VerifiedSVG />
          </Styled.Name>
          <Styled.Description>{description}</Styled.Description>
        </Styled.TextWrapper>
      </Styled.Information>
    </Styled.Content>
  </Styled.Container>
);

export default Banner;
