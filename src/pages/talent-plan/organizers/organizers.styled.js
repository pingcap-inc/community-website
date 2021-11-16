import styled from 'styled-components';
import { colors, Styled } from '@tidb-community/ui';
import { Col, Image } from 'antd';
export const Container = styled(Styled.Section)`
  && {
    color: ${colors.M1};
    padding: 0;
    background-color: ${colors.M2};
  }
`;

export const Content = styled(Styled.Content)`
  position: relative;
  padding-top: 3rem;
  padding-bottom: 3rem;
`;

export const ImageContainer = styled(Col)`
  display: flex;
  // horizontally align child elements
  justify-content: center;
`;

export const LogoImage = styled(Image)`
  // horizontally center the image
  width: auto;
  margin: 0 auto;
`;
