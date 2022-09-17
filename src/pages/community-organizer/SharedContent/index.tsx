import * as React from 'react';
import Image, { StaticImageData } from 'next/image';
import { Button, Carousel, Col } from 'antd';

import * as Styled from './index.styled';
import avatar1Image from './avatars/avatar-1.png';
import icon1Image from './icons/icon-1.png';
import icon12mage from './icons/icon-2.png';
import icon13mage from './icons/icon-3.png';

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  data: {};
}

const data = {
  items: [
    {
      title: '这一年，我和 TiDB 的故事',
      description:
        '套用现在文雅的说法，2021 Dev Conf 是故事开始的地方，去年我阴差阳错的跟着朋友参加了 TiDB Dev Conf，那时候新冠还不叫奥密克戎，很多人......',
      avatarImage: avatar1Image,
      authorName: '阿福Chris',
      authorTitle: '济南地区活动组织者',
      iconImages: [icon1Image, icon12mage, icon13mage],
      moreLinkUrl: '#',
    },
    {
      title: '这一年，我和 TiDB 的故事',
      description:
        '套用现在文雅的说法，2021 Dev Conf 是故事开始的地方，去年我阴差阳错的跟着朋友参加了 TiDB Dev Conf，那时候新冠还不叫奥密克戎，很多人......',
      avatarImage: avatar1Image,
      authorName: '阿福Chris',
      authorTitle: '济南地区活动组织者',
      iconImages: [icon1Image, icon12mage, icon13mage],
      moreLinkUrl: '#',
    },
    {
      title: '这一年，我和 TiDB 的故事',
      description:
        '套用现在文雅的说法，2021 Dev Conf 是故事开始的地方，去年我阴差阳错的跟着朋友参加了 TiDB Dev Conf，那时候新冠还不叫奥密克戎，很多人......',
      avatarImage: avatar1Image,
      authorName: '阿福Chris',
      authorTitle: '济南地区活动组织者',
      iconImages: [icon1Image, icon12mage, icon13mage],
      moreLinkUrl: '#',
    },
  ],
};

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
                  {data.items.map((value) => (
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
