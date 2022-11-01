import * as React from 'react';
import Image from 'next/image';
import { Button, Col, Row, Space } from 'antd';

import { advantages, applyDescription, joinUrl } from '~/data/regional-meetup';
import Anchor from '~/components/Anchor';

import * as Styled from './index.styled';
import photoImage from './photo.png';
import giftsImage from './gifts.png';
import vectorImage from './vector.png';

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {}

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
                  <Anchor href={joinUrl}>
                    <Button type={'primary'}>🙋 立即申请</Button>
                  </Anchor>
                </Styled.Action>
              </Col>
              <Col sm={24} md={12}>
                <Image {...photoImage} alt={'地区组织者照片墙'} />
              </Col>
            </Styled.Header>

            <Styled.ApplyDescription>{applyDescription}</Styled.ApplyDescription>

            <Styled.Prize>
              <Row gutter={[32, 32]} align={'middle'}>
                <Col sm={24} md={12}>
                  <Styled.GiftsImage>
                    <Image {...giftsImage} />
                  </Styled.GiftsImage>
                </Col>
                <Col sm={24} md={6}>
                  <Space direction={'vertical'} size={32}>
                    {advantages.slice(0, 3).map((value) => (
                      <Styled.Advantage key={value}>
                        <Styled.AdvantageIcon>
                          <Image {...vectorImage} />
                        </Styled.AdvantageIcon>
                        <Styled.AdvantageText>{value}</Styled.AdvantageText>
                      </Styled.Advantage>
                    ))}
                  </Space>
                </Col>
                <Col sm={24} md={6}>
                  <Space direction={'vertical'} size={32}>
                    {advantages.slice(3, 6).map((value) => (
                      <Styled.Advantage key={value}>
                        <Styled.AdvantageIcon>
                          <Image {...vectorImage} />
                        </Styled.AdvantageIcon>
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
