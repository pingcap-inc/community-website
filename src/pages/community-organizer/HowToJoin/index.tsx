import * as React from 'react';
import Image from 'next/image';
import { Button, Col, Row, Space } from 'antd';

import * as Styled from './index.styled';
import photo1Image from './photos/photo-1.png';
import photo2Image from './photos/photo-2.png';
import photo3Image from './photos/photo-3.png';
import photo4Image from './photos/photo-4.png';
import photo5Image from './photos/photo-5.png';
import photo6Image from './photos/photo-6.png';
import photo7Image from './photos/photo-7.png';
import giftsImage from './gifts.png';

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  //data: {};
}

const data = {
  advantages: [
    '社区专属荣誉徽章（地区组织者）',
    '专属社区 ID 的随性咖啡杯（有城市地标喔~）',
    '定向邀请参加 DevCon 等千人规模技术峰会',
    '可优先参与 TiDB 内测最新课程',
    '获取地区组织者积分和经验值：500 积分 + 500 经验值',
    '组织者福利礼包',
  ],
};

const HowToJoin: React.FC<IProps> = (props) => {
  //function SectionTitle(props: IProps) {
  const { ...rest } = props;
  return (
    <Styled.Container {...rest}>
      <Styled.ContainerOuter>
        <Styled.ContainerInner>
          <Styled.Main>
            <Styled.Header wrap justify={'center'} align={'middle'} gutter={[32, 32]}>
              <Col sm={24} md={12}>
                <Styled.Title>如何成为地区组织者？</Styled.Title>
                <Styled.Description>
                  地区组织者是主导地区技术交流活动的重要力量，通过组织地区活动连接社区与技术同仁，成为地区组织者不仅能获得社区专属荣誉，也可以通过地区交流建立或培养对外沟通能力，跟上技术发展的潮流，和志同道合的技术人一起感受开源社区的魅力。
                </Styled.Description>
                <Styled.Action>
                  <Button type={'primary'}>🙋 立即申请</Button>
                </Styled.Action>
              </Col>
              <Col sm={24} md={12}>
                <Space wrap align={'end'}>
                  <Styled.Image>
                    <Image {...photo1Image} />
                  </Styled.Image>
                  <Styled.Image>
                    <Image {...photo2Image} />
                  </Styled.Image>
                  <Styled.Image>
                    <Image {...photo3Image} />
                  </Styled.Image>
                  <Styled.Image>
                    <Image {...photo4Image} />
                  </Styled.Image>
                  <Styled.Image>
                    <Image {...photo5Image} />
                  </Styled.Image>
                  <Styled.Image>
                    <Image {...photo6Image} />
                  </Styled.Image>
                  <Styled.Image>
                    <Image {...photo7Image} />
                  </Styled.Image>
                </Space>
              </Col>
            </Styled.Header>

            <Styled.ApplyDescription>申请成功可获得精美周边礼品 + 社区专属福利</Styled.ApplyDescription>

            <Styled.Prize>
              <Row gutter={[32, 32]} align={'middle'}>
                <Col sm={24} md={12}>
                  <Styled.GiftsImage>
                    <Image {...giftsImage} />
                  </Styled.GiftsImage>
                </Col>
                <Col sm={24} md={6}>
                  <Space direction={'vertical'} size={32}>
                    {data.advantages.slice(0, 3).map((value) => (
                      <Styled.Advantage>
                        <Styled.AdvantageIcon>√</Styled.AdvantageIcon>
                        <Styled.AdvantageText>{value}</Styled.AdvantageText>
                      </Styled.Advantage>
                    ))}
                  </Space>
                </Col>
                <Col sm={24} md={6}>
                  <Space direction={'vertical'} size={32}>
                    {data.advantages.slice(3, 6).map((value) => (
                      <Styled.Advantage>
                        <Styled.AdvantageIcon>√</Styled.AdvantageIcon>
                        <Styled.AdvantageText>{value}</Styled.AdvantageText>
                      </Styled.Advantage>
                    ))}
                  </Space>
                </Col>
              </Row>
            </Styled.Prize>
          </Styled.Main>
        </Styled.ContainerInner>
      </Styled.ContainerOuter>
    </Styled.Container>
  );
};

export default HowToJoin;
