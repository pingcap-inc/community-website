import React, { useRef } from 'react';
import Image from 'next/image';
import { Button, Row } from 'antd';
import { useSize } from 'ahooks';

import { common as commonUtils } from '~/utils';
import { MyFullCalendar } from '~/components';
import { useIsSmallScreen } from '~/hooks';
import Anchor from '~/components/Anchor';
import { IEvent } from '~/pages/events/index.page';
import { cdn } from '~/utils';

import * as Styled from './about.styled';
import { LeftPanel, RightPanel } from './about.styled';
import { htmlId } from '../list/List.component';

const card = [
  {
    title: '2024 TiDB AI 创新应用黑客马拉松',
    desc: '一起来用 TiDB 构建未来的 AI 创新应用，瓜分超￥210,000 奖金池！',
    button: '前往查看',
    link: 'https://asktug.com/t/topic/1029569?utm_source=asktug&utm_medium=direct&utm_campaign=banner_04',
    image: '/images/activities/Hackathon_2024.jpeg',
  },
  {
    title: 'TiDB 地区组织活动',
    desc: '和本地的社区小伙伴一起聚聚，涨“姿势”！',
    button: '前往查看',
    link: 'https://tidb.net/regional-meetup',
    image: '/images/activities/regional-meetup.jpg',
  },
];

export interface IProps {
  events: IEvent[];
}

export default function EventsIndexAbout(props: IProps) {
  const { events } = props;
  const cardRef = useRef();
  const cardSize = useSize(cardRef);
  const { isSmallScreen } = useIsSmallScreen();

  const isVerticalCard: boolean = cardSize?.width < 500;

  const getDesc = (desc) => {
    const descLength = 50;
    return desc.length > descLength ? desc.substr(0, descLength) + '...' : desc;
  };

  return (
    <Styled.Container isSmallScreen={isSmallScreen}>
      <Styled.Content>
        <Row gutter={[64, 64]}>
          <LeftPanel>
            <Styled.TopSection>
              <Styled.Title>特色专区</Styled.Title>
              <Styled.Desc>
                <p>
                  TiDB 社区自成立以来，每年都会举办上百场丰富多彩的活动，覆盖了全球几万名来自不同领域的开发者、TiDB
                  用户和爱好者。
                </p>
                <p>
                  你可以<a href={`#${htmlId}`}>在此</a>处筛选查看历年活动列表， 也可以通过
                  <Anchor href="/contact-us/cooperation">表单</Anchor>联系我们， 提交你的活动创意，TiDB
                  社区期待你的参与。
                </p>
              </Styled.Desc>
              <Styled.CardList>
                {card.map((v) => (
                  <Styled.Card key={v.title} ref={cardRef}>
                    <Styled.CardImg $isVertical={isVerticalCard}>
                      <Image unoptimized alt={v.title} src={cdn.getImageUrl(v.image)} layout="fill" objectFit="cover" />
                    </Styled.CardImg>
                    <Styled.CardInfo $isVertical={isVerticalCard}>
                      <h3>{v.title}</h3>
                      <p>{getDesc(v.desc)}</p>
                      <Anchor href={v.link}>
                        <Button type="primary" size="small">
                          {v.button}
                        </Button>
                      </Anchor>
                    </Styled.CardInfo>
                  </Styled.Card>
                ))}
              </Styled.CardList>
            </Styled.TopSection>
          </LeftPanel>
          <RightPanel>
            <Styled.TopSection>
              <Styled.Title>活动日历</Styled.Title>
              <Styled.CalendarCard>
                <MyFullCalendar
                  data={
                    events.map((val, idx) => {
                      const image = commonUtils.getStrapiImgProps(val.image);
                      return {
                        key: idx,
                        ...val,
                        image,
                      };
                    }) ?? []
                  }
                />
              </Styled.CalendarCard>
            </Styled.TopSection>
          </RightPanel>
        </Row>
      </Styled.Content>
    </Styled.Container>
  );
}
