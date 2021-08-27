import * as Styled from './videoThumbnail.style';
import { ClockCircleOutlined, PlaySquareOutlined } from '@ant-design/icons';

const VideoThumbnail = (props) => {
  return (
    <Styled.VideoBox isSmallScreen={props.isSmallScreen}>
      <Styled.PreviewWrapper>
        <Styled.Preview src={props.coverSrc} />
      </Styled.PreviewWrapper>
      <Styled.Title> {props.title} </Styled.Title>
      <Styled.IconWrapper>
        <PlaySquareOutlined /> {props.views}
      </Styled.IconWrapper>
      <Styled.IconWrapper>
        <ClockCircleOutlined /> {props.date}
      </Styled.IconWrapper>
    </Styled.VideoBox>
  );
};

export default VideoThumbnail;
