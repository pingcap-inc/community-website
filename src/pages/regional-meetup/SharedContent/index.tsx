import * as React from 'react';
import Image, { StaticImageData } from 'next/image';
import { Button, Carousel, Col } from 'antd';

import * as Styled from './index.styled';
import { sharedContents } from '~/data/regional-meetup/shared-content';

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  //data: {};
}

const SharedContent: React.FC<IProps> = (props) => {
  //function SectionTitle(props: IProps) {
  const { ...rest } = props;
  return (
    <Styled.Container {...rest}>
      <Styled.Main>
        <Styled.Title>优质分享内容</Styled.Title>
        <div style={{ width: '100%', marginTop: 54 }}>
          <Carousel autoplay dotPosition={'bottom'}>
            {[1, 2, 3, 4].map((key) => (
              <div key={key}>
                <Styled.List gutter={[36, 36]}>
                  {sharedContents.map((value) => (
                    <Col key={value.authorName} sm={24} md={8}>
                      <Card data={value} />
                    </Col>
                  ))}
                </Styled.List>
              </div>
            ))}
          </Carousel>
        </div>
      </Styled.Main>
    </Styled.Container>
  );
};

export default SharedContent;

export interface IPropsCard extends React.HTMLAttributes<HTMLDivElement> {
  data: {
    title: string;
    description: React.ReactNode;
    avatarImage: StaticImageData;
    authorName: string;
    authorTitle: string;
    iconImages: StaticImageData[];
    moreLinkUrl: string;
  };
}

const Card: React.FC<IPropsCard> = (props) => {
  //function SectionTitle(props: IProps) {
  const { data, ...rest } = props;
  return (
    <Styled.Card {...rest}>
      <Styled.CardTitle>{data.title}</Styled.CardTitle>
      <Styled.CardDescription>{data.description}</Styled.CardDescription>
      <Styled.CardSplitLine />
      <Styled.CardAuthorAvatar>
        <Image {...data.avatarImage} width={120} height={120} />
      </Styled.CardAuthorAvatar>
      <Styled.CardAuthorInfo>
        {data.authorName} | {data.authorTitle}
      </Styled.CardAuthorInfo>
      <Styled.CardIcons>
        {data.iconImages.map((value) => (
          <Image {...value} width={36} height={36} />
        ))}
      </Styled.CardIcons>
      <Styled.CardMore>
        <Button type={'primary'}>TA 的更多分享</Button>
      </Styled.CardMore>
    </Styled.Card>
  );
};
