import styled, { css } from 'styled-components';
import { colors, mixins } from '@tidb-community/ui';
import { Col, Row } from 'antd';
import { PlayCircleFilled } from '@ant-design/icons';

import { Section } from '~/pages/home/index.styled';
import { Link as RawLink } from '~/components';
export const Container = styled(Section)``;

export const Text = styled.div`
  font-size: 16px;
  font-weight: lighter;
`;

export const Link = styled.a`
  font-weight: lighter;
  text-decoration: underline;

  &:hover {
    color: ${colors.B1};
    text-decoration: underline;
  }
`;

export const Logo = styled.img`
  margin-bottom: 2rem;
`;

export const VideoHeader = styled.div`
  font-size: 20px;
  font-weight: bold !important;
  margin-top: 2.5rem;
`;

export const FreeLabel = styled.span`
  display: inline-block;
  margin-left: 1rem;
  font-weight: 300;
  color: ${colors.T1};
`;

export const LinksRow = styled(Row)`
  margin-bottom: 1rem;
`;
export const LinkWrapper = styled(Col)`
  padding-bottom: 1rem;
`;

export const VideoBox = styled.div`
  position: relative;
  background-size: auto 100%;
  padding-bottom: 62.8%;
  width: 100%;
  background-image: url(${(props) => props.src});
  border-color: white;
  ${(props) =>
    !props.isSmallScreen &&
    css`
      box-shadow: inset 0 0 0 8px white;
    `}
`;

export const VideoCaption = styled.div`
  padding: 0.4rem;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.46);
  z-index: 2;
  left: 0;
  right: 0;
  bottom: 0;
  color: white;
  font-size: 15px;
  font-weight: lighter;
  ${mixins.lineClamp(2)}
  border: 8px solid white;
  border-top-width: 0;
  box-sizing: border-box;
`;

export const VideoPlayButton = styled.div`
  ${mixins.flexCenter};
  ${mixins.flexVerticalCenter()};
  position: absolute;
  z-index: 3;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

export const VideoPlayIcon = styled(PlayCircleFilled)`
  font-size: 5rem;
  ${(props) =>
    props.small &&
    css`
      font-size: 2rem;
    `}
  color: white;
  opacity: 95%;
  &:hover {
    color: ${colors.C2};
    cursor: pointer;
  }
`;

export const VideoBoxWrapper = styled.div`
  box-sizing: border-box;
  // adjust border for alignment
  ${(props) =>
    !props.isSmallScreen &&
    css`
      transform: translateX(-8px);
    `}
`;

export const VideoBoxWrapperSmall = styled.div`
  max-width: 100%;
  height: 33.3%;
`;

export const VideosRow = styled(Row)`
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const More = styled(RawLink)`
  display: block;
  margin-top: 1rem;
  ${(props) =>
    props.isSmallScreen &&
    css`
      margin-bottom: 3rem;
    `}
`;
