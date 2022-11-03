import * as React from 'react';
import { useState } from 'react';
import { Button, Col, Space } from 'antd';
import {
  ClockCircleOutlined,
  DownOutlined,
  PlayCircleOutlined,
  PlaySquareOutlined,
  UpOutlined,
} from '@ant-design/icons';

import * as Styled from './index.styled';

import Anchor from '~/components/Anchor';
import type { TVideoRecordFull } from '../index.page';
import { useIsSmallScreen } from '~/hooks';

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  data: {
    videoRecordItems: TVideoRecordFull[];
  };
}

const VideoRecord: React.FC<IProps> = (props) => {
  //function SectionTitle(props: IProps) {
  const {
    data: { videoRecordItems },
    ...rest
  } = props;
  const [showMore, setShowMore] = useState(false);
  return (
    <Styled.Container {...rest}>
      <Styled.Title>精选活动现场</Styled.Title>

      <Styled.Recommend size={32} wrap>
        <Styled.RecommendStart>
          <Anchor href={`https://www.bilibili.com/video/${videoRecordItems[0].bvid}`}>
            <img src={videoRecordItems[0].videoCoverImage.src} alt={videoRecordItems[0].title} />
          </Anchor>
          {/*<VideoCoverItem*/}
          {/*  url={`https://www.bilibili.com/video/${videoRecordItems[0].bvid}`}*/}
          {/*  videoCoverImage={videoRecordItems[0].videoCoverImage}*/}
          {/*  //duration={videoRecordItems[0].duration}*/}
          {/*  width={160 * 3}*/}
          {/*  height={100 * 3}*/}
          {/*/>*/}
          {/*<Anchor href={videoRecords[0].moreLinkUrl}>*/}
          {/*  <Image {...videoRecords[0].videoCoverImage} />*/}
          {/*</Anchor>*/}
        </Styled.RecommendStart>
        <div>
          <Space>
            <Styled.RecommendTag>{videoRecordItems[0].region}</Styled.RecommendTag>
          </Space>
          <Anchor href={`https://www.bilibili.com/video/${videoRecordItems[0].bvid}`}>
            <Styled.RecommendTitle>{videoRecordItems[0].title}</Styled.RecommendTitle>
          </Anchor>
          <Styled.RecommendPeople>{videoRecordItems[0].authorName}</Styled.RecommendPeople>
          <Styled.IconWrapper>
            <div>
              <PlaySquareOutlined /> {videoRecordItems[0].playCount}
            </div>
            <div>
              <ClockCircleOutlined /> {videoRecordItems[0].createDatetime}
            </div>
          </Styled.IconWrapper>
          {/*<Styled.RecommendSummary>*/}
          {/*  套用现在文雅的说法，2021 Dev Conf 是故事开始的地方，去年我阴差阳错的跟着朋友参加了 TiDB Dev Conf......*/}
          {/*</Styled.RecommendSummary>*/}
          {/*<Styled.RecommendDate>2022.05.18</Styled.RecommendDate>*/}
          <Styled.RecommendAction>
            <Anchor href={'https://space.bilibili.com/86485707'}>
              <Button type={'primary'} icon={<PlayCircleOutlined />}>
                查看所有视频
              </Button>
            </Anchor>
          </Styled.RecommendAction>
        </div>
      </Styled.Recommend>

      <Styled.List wrap gutter={[36, 36]}>
        {videoRecordItems.slice(1, showMore ? undefined : 7).map((value) => (
          <Col key={value.bvid} sm={24} md={12} lg={12} xl={8}>
            <Space size={10} align={'start'}>
              <Styled.VideoCover>
                <VideoCoverItem
                  url={`https://www.bilibili.com/video/${value.bvid}`}
                  videoCoverImage={value.videoCoverImage}
                  //duration={value.duration}
                  width={160}
                  height={100}
                  //layout={'fixed'}
                />
                {/*<Anchor href={value.moreLinkUrl}>*/}
                {/*  <Image {...value.videoCoverImage} width={160} height={100} layout={'fixed'} />*/}
                {/*</Anchor>*/}
              </Styled.VideoCover>
              <Styled.Info>
                <Space>
                  <Styled.InfoTag>{value.region}</Styled.InfoTag>
                </Space>
                <Anchor href={`https://www.bilibili.com/video/${value.bvid}`}>
                  <Styled.InfoTitle>{value.title}</Styled.InfoTitle>
                </Anchor>
                <Styled.InfoPeople>{value.authorName}</Styled.InfoPeople>
                {/*<Styled.InfoDate>2022.05.18</Styled.InfoDate>*/}
                <Styled.IconWrapper>
                  <div>
                    <PlaySquareOutlined /> {value.playCount}
                  </div>
                  <div>
                    <ClockCircleOutlined /> {value.createDatetime}
                  </div>
                </Styled.IconWrapper>
              </Styled.Info>
            </Space>
          </Col>
        ))}
      </Styled.List>
      <Styled.More>
        {showMore ? (
          <Button type={'link'} icon={<UpOutlined />} onClick={() => setShowMore(false)}>
            收起
          </Button>
        ) : (
          <Button type={'link'} icon={<DownOutlined />} onClick={() => setShowMore(true)}>
            展开更多
          </Button>
        )}
      </Styled.More>
    </Styled.Container>
  );
};

export default VideoRecord;

//function VideoCoverLarge({ url, videoCoverImage }) {
//  const { isSmallScreen } = useIsSmallScreen();
//  return (
//    <Styled.VideoBox $isSmallScreen={isSmallScreen} $src={encodeURI(videoCoverImage.src)}>
//      <Styled.VideoPlayButton>
//        <Anchor href={url}>
//          <Styled.VideoPlayIcon color="white" height="48px" />
//        </Anchor>
//      </Styled.VideoPlayButton>
//    </Styled.VideoBox>
//  );
//}

function VideoCoverItem({ url, videoCoverImage, width, height }) {
  const { isSmallScreen } = useIsSmallScreen();
  return (
    <Styled.VideoBox
      $isSmallScreen={isSmallScreen}
      $src={encodeURI(videoCoverImage.src)}
      $width={width}
      $height={height}
    >
      <Styled.VideoPlayButton>
        <Anchor href={url}>
          <Styled.VideoPlayIcon color="white" height="48px" />
        </Anchor>
      </Styled.VideoPlayButton>
    </Styled.VideoBox>
    //<Styled.VideoCoverItem>
    //  <Styled.VideoCoverItemImage>
    //    <Anchor href={url}>
    //      <Image src={videCoverImageUrl.replace('http://', 'https://')} alt={''} {...props} />
    //    </Anchor>
    //  </Styled.VideoCoverItemImage>
    //  <Styled.VideoCoverItemPlayIcon>
    //    <PlayCircleOutlined />
    //  </Styled.VideoCoverItemPlayIcon>
    //  <Styled.VideoCoverItemDuration>{duration}</Styled.VideoCoverItemDuration>
    //</Styled.VideoCoverItem>
  );
}
