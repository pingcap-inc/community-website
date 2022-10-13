import * as React from 'react';
import Image from 'next/image';
import { Button } from 'antd';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination } from 'swiper';

import * as Styled from './index.styled';
import Anchor from '~/components/Anchor';
import type { TSharedContentCard } from '../index.page';

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  data: {
    sharedContentCards: TSharedContentCard[];
  };
}

const SharedContent: React.FC<IProps> = (props) => {
  //function SectionTitle(props: IProps) {
  const { data, ...rest } = props;
  return (
    <Styled.Container {...rest}>
      <Styled.Main>
        <Styled.Title>优质分享内容</Styled.Title>
        <Styled.Content>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              '@0.00': {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              '@0.75': {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              '@1.00': {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              '@1.50': {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {data.sharedContentCards.map((value) => (
              <SwiperSlide key={value.title}>
                <Card data={value} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Styled.Content>
      </Styled.Main>
    </Styled.Container>
  );
};

export default SharedContent;

export interface IPropsCard extends React.HTMLAttributes<HTMLDivElement> {
  data: TSharedContentCard;
}

const Card: React.FC<IPropsCard> = (props) => {
  //function SectionTitle(props: IProps) {
  const { data, ...rest } = props;
  return (
    <div style={{ paddingBottom: 64, height: '100%' }}>
      <Styled.Card {...rest}>
        <Styled.CardTitle>{data.title}</Styled.CardTitle>
        <Styled.CardDescription>{data.description}</Styled.CardDescription>
        <Styled.CardSplitLine />
        <Styled.CardAuthorAvatar>
          <img {...data.avatarImage} width={120} height={120} alt={''} />
        </Styled.CardAuthorAvatar>
        <Styled.CardAuthorInfo>
          {data.authorName} | {data.authorTitle}
        </Styled.CardAuthorInfo>
        <Styled.CardIcons>
          {data.iconImages.map((value) => (
            <img key={value.src} {...value} width={36} height={36} alt={''} />
          ))}
        </Styled.CardIcons>
        <Styled.CardMore>
          <Anchor href={`/u/${data.username}`}>
            <Button type={'primary'}>TA 的更多分享</Button>
          </Anchor>
        </Styled.CardMore>
      </Styled.Card>
    </div>
  );
};
