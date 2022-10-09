import * as React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { Button, Col, Space } from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';

import * as Styled from './index.styled';

import { videoRecords } from '~/data/regional-meetup/video-record';
import Anchor from '~/components/Anchor';

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  //data: {};
}

const VideoRecord: React.FC<IProps> = (props) => {
  //function SectionTitle(props: IProps) {
  const { ...rest } = props;
  const [showMore, setShowMore] = useState(false);
  return (
    <Styled.Container {...rest}>
      <Styled.Title>精选活动现场</Styled.Title>

      <Styled.Recommend gutter={[32, 32]}>
        <Col sm={24} md={12}>
          <Anchor href={videoRecords[0].moreLinkUrl}>
            <Image {...videoRecords[0].videCoverImage} />
          </Anchor>
        </Col>
        <Col sm={24} md={12}>
          <Space>
            <Styled.RecommendTag>{videoRecords[0].region}</Styled.RecommendTag>
          </Space>
          <Anchor href={videoRecords[0].moreLinkUrl}>
            <Styled.RecommendTitle>{videoRecords[0].title}</Styled.RecommendTitle>
          </Anchor>
          <Styled.RecommendPeople>{videoRecords[0].authorName}</Styled.RecommendPeople>
          {/*<Styled.RecommendSummary>*/}
          {/*  套用现在文雅的说法，2021 Dev Conf 是故事开始的地方，去年我阴差阳错的跟着朋友参加了 TiDB Dev Conf......*/}
          {/*</Styled.RecommendSummary>*/}
          {/*<Styled.RecommendDate>2022.05.18</Styled.RecommendDate>*/}
          {/*<Styled.RecommendAction>*/}
          {/*  <Button type={'primary'}>查看所有视频</Button>*/}
          {/*</Styled.RecommendAction>*/}
        </Col>
      </Styled.Recommend>

      <Styled.List wrap gutter={[36, 36]}>
        {videoRecords.slice(1, showMore ? undefined : 7).map((value) => (
          <Col key={value.moreLinkUrl} sm={24} md={12} lg={8}>
            <Space size={10} align={'start'}>
              <Styled.VideoCover>
                <Anchor href={value.moreLinkUrl}>
                  <Image {...value.videCoverImage} width={160} height={100} layout={'fixed'} />
                </Anchor>
              </Styled.VideoCover>
              <Styled.Info>
                <Space>
                  <Styled.InfoTag>{value.region}</Styled.InfoTag>
                </Space>
                <Anchor href={value.moreLinkUrl}>
                  <Styled.InfoTitle>{value.title}</Styled.InfoTitle>
                </Anchor>
                <Styled.InfoPeople>{value.authorName}</Styled.InfoPeople>
                {/*<Styled.InfoDate>2022.05.18</Styled.InfoDate>*/}
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
