import * as React from 'react';
import Image from 'next/image';
import { Button, Col, Space } from 'antd';

import * as Styled from './index.styled';

import videoCover1Image from './video_cover_1.png';
import videoCover2Image from './video_cover_2.png';

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  data: {};
}

const VideoRecord: React.FC<IProps> = (props) => {
  //function SectionTitle(props: IProps) {
  const { data, ...rest } = props;
  return (
    <Styled.Container {...rest}>
      <Styled.Title>精选活动现场</Styled.Title>

      <Styled.Recommend wrap justify={'center'} align={'middle'} gutter={[32, 32]}>
        <Col sm={24} md={12}>
          <Image {...videoCover1Image} />
        </Col>
        <Col sm={24} md={12}>
          <Space>
            <Styled.RecommendTag>济南站</Styled.RecommendTag>
          </Space>
          <Styled.RecommendTitle>MySQL，TiDB 应用开发解析专场</Styled.RecommendTitle>
          <Styled.RecommendPeople>阿福Chris | 阿福Chris | 阿福Chris | 阿福Chris</Styled.RecommendPeople>
          <Styled.RecommendSummary>
            套用现在文雅的说法，2021 Dev Conf 是故事开始的地方，去年我阴差阳错的跟着朋友参加了 TiDB Dev Conf......
          </Styled.RecommendSummary>
          <Styled.RecommendDate>2022.05.18</Styled.RecommendDate>
          <Styled.RecommendAction>
            <Button type={'primary'}>查看所有视频</Button>
          </Styled.RecommendAction>
        </Col>
      </Styled.Recommend>

      <Styled.List wrap justify={'center'} align={'middle'} gutter={[36, 36]}>
        {[1, 2, 3, 4].map((value) => (
          <Col key={value} sm={24} md={12}>
            <Space size={10}>
              <Styled.VideoCover>
                <Image {...videoCover2Image} width={160} height={100} />
              </Styled.VideoCover>
              <Styled.Info>
                <Space>
                  <Styled.InfoTag>济南站</Styled.InfoTag>
                </Space>
                <Styled.InfoTitle>MySQL，TiDB 应用开发解析专场</Styled.InfoTitle>
                <Styled.InfoPeople>阿福Chris | 阿福Chris | 阿福Chris | 阿福Chris</Styled.InfoPeople>
                <Styled.InfoDate>2022.05.18</Styled.InfoDate>
              </Styled.Info>
            </Space>
          </Col>
        ))}
      </Styled.List>
    </Styled.Container>
  );
};

export default VideoRecord;
