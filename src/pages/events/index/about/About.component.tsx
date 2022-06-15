import React, { useRef } from 'react';
import Image from 'next/image';
import { Button, Row } from 'antd';
import { useSize } from 'ahooks';
import { common as commonUtils } from '~/utils';
import constant from '../constant.json';
import * as Styled from './about.styled';
import { LeftPanel, RightPanel } from './about.styled';
import { MyFullCalendar } from '~/components';
import { useIsSmallScreen } from '~/hooks';
import Anchor from '~/components/Anchor';
import { IEvent } from '~/pages/events/index.page';
import { cdn } from '~/utils';

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
              <Styled.Title>{constant.about.title}</Styled.Title>
              <Styled.Desc>
                <p>
                  TiDB 社区自成立以来，每年都会举办上百场丰富多彩的活动，覆盖了全球几万名来自不同领域的开发者、TiDB
                  用户和爱好者。
                </p>
                <p>
                  你可以<a href="#all-events">在此</a>处筛选查看历年活动列表， 也可以通过
                  <Anchor href="/contact-us/cooperation">表单</Anchor>联系我们， 提交你的活动创意，TiDB
                  社区期待你的参与。
                </p>
              </Styled.Desc>
              <Styled.CardList>
                {constant.about.card.map((v) => (
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
              <Styled.Title>{constant.calendar.title}</Styled.Title>
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
