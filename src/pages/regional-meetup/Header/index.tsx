import * as React from 'react';
import { Carousel, Col, Row } from 'antd';
import Image from 'next/image';

import Container from '~/components/Container';

import * as Styled from './index.styled';
import { headerImages, joinUrl, recommendUrl } from '~/data/regional-meetup';
import Anchor from '~/components/Anchor';

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  data: {
    title: React.ReactNode;
    description: React.ReactNode;
  };
}

const Header: React.FC<IProps> = (props) => {
  //function SectionTitle(props: IProps) {
  const { data, ...rest } = props;
  return (
    <Styled.Container {...rest}>
      <Container>
        <Row gutter={[32, 64]} wrap justify={'space-between'} align={'middle'}>
          <Col sm={24} md={12}>
            <Styled.Card>
              <Styled.Title>{data.title}</Styled.Title>
              <Styled.Description>{data.description}</Styled.Description>
              <Styled.Actions>
                <Anchor href={joinUrl}>
                  <Styled.JoinButton>🙋‍ 我要成为地区组织者</Styled.JoinButton>
                </Anchor>
                <Anchor href={recommendUrl}>
                  <Styled.NominateButton>我要提名 TA</Styled.NominateButton>
                </Anchor>
              </Styled.Actions>
            </Styled.Card>
          </Col>
          <Col sm={24} md={12}>
            <Styled.Carousel>
              <Carousel autoplay dotPosition={'right'}>
                {headerImages.map((value) => (
                  <div key={value.image.src}>
                    <Image {...value.image} layout={'responsive'} />
                  </div>
                ))}
              </Carousel>
            </Styled.Carousel>
          </Col>
        </Row>
      </Container>
    </Styled.Container>
  );
};

export default Header;
