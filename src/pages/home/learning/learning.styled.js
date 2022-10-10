import styled, { css } from 'styled-components';
import { Col, Row } from 'antd';
import { PlayCircleFilled } from '@ant-design/icons';
import { colors, mixins, Styled } from '@tidb-community/ui';
import Anchor from '~/components/Anchor';

const { Section, Text, ModuleTitle } = Styled;

export const Container = styled(Section)`
  background-color: ${colors.M2};
`;

export { Text, ModuleTitle };

export const Link = styled(Anchor)`
  color: ${colors.F2};
  text-decoration: underline;

  &:hover {
    color: ${colors.B1};
    text-decoration: underline;
  }
`;

export const TitleLink = styled(Anchor)`
  color: inherit;
  font-size: revert;
  &:hover {
    color: ${colors.B1};
    text-decoration: underline;
  }
`;

export const Logo = styled.div`
  margin-bottom: 2rem;
  width: 300px;
`;

export const VideoHeader = styled.h3`
  font-size: 20px;
  line-height: 1;
  margin-top: 2.5rem;
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
  background-image: url(${({ $src }) => $src});
  border-color: ${colors.M1};

  ${(props) =>
    !props.$isSmallScreen &&
    css`
      box-shadow: inset 0 0 0 8px ${colors.M1};
    `}
`;

export const VideoCaption = styled.div`
  ${mixins.lineClamp(2)}
  padding: 0.4rem;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.46);
  z-index: 2;
  left: 0;
  right: 0;
  bottom: 0;
  color: ${colors.M1};
  font-size: 15px;
  border: 8px solid white;
  border-top: none;
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

export const VideoOverlay = styled(Anchor)`
  ${mixins.flexCenter};
  ${mixins.flexVerticalCenter()};
  position: absolute;
  z-index: 3;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.46);
  border: 8px solid white;
  cursor: pointer;
`;

export const VideoOverlayText = styled.div`
  color: ${colors.M1};
  font-size: 14px;
`;

export const VideoPlayIcon = styled(PlayCircleFilled)`
  font-size: 5rem;
  color: ${colors.F1};
  opacity: 46%;

  &:hover {
    color: ${colors.F2};
    cursor: pointer;
  }

  ${(props) =>
    props.$small &&
    css`
      font-size: 2rem;
    `}
`;

export const VideoBoxWrapper = styled.div`
  ${(props) =>
    !props.$isSmallScreen &&
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

export const More = styled(Anchor)`
  display: block;
  margin-top: 1rem;
  text-decoration: underline;
  &:hover {
    color: ${colors.B1};
    text-decoration: underline;
  }

  ${(props) =>
    props.$isSmallScreen &&
    css`
      margin-bottom: 3rem;
    `}
`;
