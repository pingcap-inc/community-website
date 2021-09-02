import { ClockCircleOutlined, PlaySquareOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';

import * as Styled from './videoThumbnail.style';
import { link as linkUtils } from '~/utils';

const VideoThumbnail = ({ isSmallScreen, coverImage, length, title, playCount, created, link }) => {
  const router = useRouter();

  const onClick = (link) => (e) => {
    e.preventDefault();
    linkUtils.handleRedirect(router, link);
  };

  return (
    <Styled.VideoBox isSmallScreen={isSmallScreen} onClick={onClick(link)}>
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
