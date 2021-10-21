import Image from 'next/image';
import React, { useContext, useRef } from 'react';
import { Button, Row } from 'antd';
import { Trans, useTranslation } from 'next-i18next';
import { useSize } from 'ahooks';
import { common as commonUtils, link as linkUtils } from '~/utils';

import { MyFullCalendar } from '@tidb-community/ui';

import * as Styled from './about.styled';
import { Link } from '~/components';
import { useIsSmallScreen } from '~/hooks';
import { PageDataContext } from '~/context';
import { useRouter } from 'next/router';
import { LeftPanel, RightPanel } from './about.styled';

const About = () => {
  const cardRef = useRef();
  const cardSize = useSize(cardRef);
  const { isSmallScreen } = useIsSmallScreen();
  const { t } = useTranslation('page-events');

  const lang = t('about', { returnObjects: true });
  const { paragraph2: paragraph2Lang } = lang;

  const calendar = t('calendar', { returnObjects: true });
  const about = t('about', { returnObjects: true });
  const { card } = about;

  const isVerticalCard = cardSize.width < 500;

  const { data } = useContext(PageDataContext);
  const { dateForCalendar } = data;

  const events = dateForCalendar.data;

  const router = useRouter();
  const handleCardButtonClick = (link) => (e) => {
    e.preventDefault();
    linkUtils.handleRedirect(router, link);
  };

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
              <Styled.Title>{about.title}</Styled.Title>
              <Styled.Desc>
                <p>{lang.paragraph1}</p>
                <p>
                  <Trans
                    t={t}
                    i18nKey={'about.paragraph2.text'}
                    components={[<Link href={paragraph2Lang.link1} />, <Link href={paragraph2Lang.link2} />]}
                  />
                </p>
              </Styled.Desc>
              <Styled.CardList>
                {card.map((v, i) => (
                  <Styled.Card key={i} ref={cardRef}>
                    <Styled.CardImg $isVertical={isVerticalCard}>
                      <Image alt={v.title} src={v.image} layout="fill" objectFit="cover" />
                    </Styled.CardImg>
                    <Styled.CardInfo $isVertical={isVerticalCard}>
                      <h3>{v.title}</h3>
                      <p>{getDesc(v.desc)}</p>
                      <Button type="primary" size="small" onClick={handleCardButtonClick(v.link)}>
                        {v.button}
                      </Button>
                    </Styled.CardInfo>
                  </Styled.Card>
                ))}
              </Styled.CardList>
            </Styled.TopSection>
          </LeftPanel>
          <RightPanel>
            <Styled.TopSection>
              <Styled.Title>{calendar.title}</Styled.Title>
              <Styled.CalendarCard>
                <MyFullCalendar
                  data={
                    events?.map((val, idx) => {
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
};

export default About;
