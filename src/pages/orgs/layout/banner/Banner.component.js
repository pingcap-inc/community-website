import React from 'react';
import { Skeleton } from 'antd';

import * as Styled from './banner.styled';
import VerifiedSVG from '~/pages/orgs/verified.svg';

const Banner = ({ introduction, logo, name, isLoading, children }) => (
  <Styled.Container>
    <Styled.Content>
      <Styled.Information>
        {isLoading ? (
          <Skeleton active avatar paragraph={{ rows: 2 }} />
        ) : (
          <>
            <Styled.ImageWrapper>
              <img alt={name} src={logo} />
            </Styled.ImageWrapper>
            <Styled.TextWrapper>
              <Styled.Name>
                {name}
                <VerifiedSVG />
              </Styled.Name>
              <Styled.Introduction>{introduction}</Styled.Introduction>
            </Styled.TextWrapper>
          </>
        )}
        {children}
      </Styled.Information>
    </Styled.Content>
  </Styled.Container>
);

export default Banner;
