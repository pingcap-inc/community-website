import { ClockCircleOutlined, PlaySquareOutlined } from '@ant-design/icons';

import * as Styled from './videoThumbnail.style';

const VideoThumbnail = (props) => (
  <Styled.VideoBox isSmallScreen={props.isSmallScreen}>
    <Styled.PreviewWrapper>
      <Styled.Preview src={props.coverSrc} />
      <Styled.Length>{props.length}</Styled.Length>
    </Styled.PreviewWrapper>
    <Styled.Title>{props.title}</Styled.Title>
    <Styled.IconWrapper>
      <PlaySquareOutlined />
      {props.views}
    </Styled.IconWrapper>
    <Styled.IconWrapper>
      <ClockCircleOutlined />
      {props.date}
    </Styled.IconWrapper>
  </Styled.VideoBox>
);

export default VideoThumbnail;
