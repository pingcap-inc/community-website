import * as React from 'react';
import { Carousel, Col, Row } from 'antd';
import Image from 'next/image';
import type { StaticImageData } from 'next/image';

import Container from '~/components/Container';

import * as Styled from './index.styled';
import photo广州Image from './广州.jpg';
import photo天津Image from './天津.jpg';
import photo武汉Image from './武汉.jpg';
import photo济南Image from './济南.jpg';
import photo石家庄Image from './石家庄.jpg';

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  data: {
    title: React.ReactNode;
    description: React.ReactNode;
  };
}

const images: { image: StaticImageData }[] = [
  { image: photo广州Image },
  { image: photo天津Image },
  { image: photo武汉Image },
  { image: photo济南Image },
  { image: photo石家庄Image },
];

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
                <Styled.JoinButton>🙋‍ 我要成为地区组织者</Styled.JoinButton>
                <Styled.NominateButton>我要提名 TA</Styled.NominateButton>
              </Styled.Actions>
            </Styled.Card>
          </Col>
          <Col sm={24} md={12}>
            <Carousel autoplay dotPosition={'right'}>
              {images.map((value) => (
                <div key={value.image.src}>
                  <Image {...value.image} layout={'responsive'} />
                </div>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </Styled.Container>
  );
};

export default Header;
