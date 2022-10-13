import * as React from 'react';
import { useState } from 'react';
import Image from 'next/image';
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

      <Styled.Recommend gutter={[32, 32]}>
        <Col sm={24} md={12}>
          <VideoCoverItem
            url={`https://www.bilibili.com/video/${videoRecordItems[0].bvid}`}
            videCoverImage={videoRecordItems[0].videCoverImage}
          />
          {/*<Anchor href={videoRecords[0].moreLinkUrl}>*/}
          {/*  <Image {...videoRecords[0].videCoverImage} />*/}
          {/*</Anchor>*/}
        </Col>
        <Col sm={24} md={12}>
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
        </Col>
      </Styled.Recommend>

      <Styled.List wrap gutter={[36, 36]}>
        {videoRecordItems.slice(1, showMore ? undefined : 7).map((value) => (
          <Col key={value.bvid} sm={24} md={12} lg={12} xl={8}>
            <Space size={10} align={'start'}>
              <Styled.VideoCover>
                <VideoCoverItem
                  url={`https://www.bilibili.com/video/${videoRecordItems[0].bvid}`}
                  videCoverImage={value.videCoverImage}
                  width={160}
                  height={100}
                  layout={'fixed'}
                />
                {/*<Anchor href={value.moreLinkUrl}>*/}
                {/*  <Image {...value.videCoverImage} width={160} height={100} layout={'fixed'} />*/}
                {/*</Anchor>*/}
              </Styled.VideoCover>
              <Styled.Info>
                <Space>
                  <Styled.InfoTag>{value.region}</Styled.InfoTag>
                </Space>
                <Anchor href={`https://www.bilibili.com/video/${videoRecordItems[0].bvid}`}>
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

function VideoCoverItem({ url, videCoverImage, ...props }) {
  return (
    <Styled.VideoCoverItem>
      <Styled.VideoCoverItemImage>
        <Anchor href={url}>
          <Image {...videCoverImage} {...props} />
        </Anchor>
      </Styled.VideoCoverItemImage>
      <Styled.VideoCoverItemDuration>13:26</Styled.VideoCoverItemDuration>
    </Styled.VideoCoverItem>
  );
}
