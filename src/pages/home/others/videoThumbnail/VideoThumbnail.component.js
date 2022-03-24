import {ClockCircleOutlined, PlaySquareOutlined} from '@ant-design/icons';

import * as Styled from './videoThumbnail.style';

const VideoThumbnail = ({ $isSmallScreen, coverImage, length, title, playCount, created, link }) => {
  return (
    <Styled.VideoBox $isSmallScreen={$isSmallScreen} href={link}>
      <Styled.PreviewWrapper>
        <Styled.Preview src={coverImage} />
        <Styled.Length>{length}</Styled.Length>
      </Styled.PreviewWrapper>
      <Styled.Title>{title}</Styled.Title>
      <Styled.IconWrapper>
        <PlaySquareOutlined />
        {playCount}
      </Styled.IconWrapper>
      <Styled.IconWrapper>
        <ClockCircleOutlined />
        {created}
      </Styled.IconWrapper>
    </Styled.VideoBox>
  );
};

export default VideoThumbnail;
