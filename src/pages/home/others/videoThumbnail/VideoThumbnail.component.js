import * as Styled from './videoThumbnail.style';

const VideoThumbnail = (props) => {
  return (
    <Styled.VideoBox isSmallScreen={props.isSmallScreen}>
      <Styled.PreviewWrapper>
        <Styled.Preview></Styled.Preview>
      </Styled.PreviewWrapper>
      <Styled.Title> 在大数据负载下指导查询优化器 | Paper Reading 线上直播 </Styled.Title>
    </Styled.VideoBox>
  );
};

export default VideoThumbnail;
