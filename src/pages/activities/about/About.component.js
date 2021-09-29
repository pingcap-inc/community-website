import Image from 'next/image';
import React, { useContext, useRef } from 'react';
import { Button, Row } from 'antd';
import { Trans, useTranslation } from 'next-i18next';
import { useSize } from 'ahooks';
import { Calendar } from '@tidb-community/ui';

import * as Styled from './about.styled';
import { Link } from '~/components';
import { useIsSmallScreen } from '~/hooks';
import { PageDataContext } from '~/context';

const About = () => {
  const cardRef = useRef();
  const cardSize = useSize(cardRef);
  const { isSmallScreen } = useIsSmallScreen();
  const { t } = useTranslation('page-activities');

  const lang = t('about', { returnObjects: true });
  const { paragraph2: paragraph2Lang, devcon: devconLang } = lang;

  const isVerticalCard = cardSize.width < 500;

  const { data } = useContext(PageDataContext);
  const { activities } = data;

  return (
    <Styled.Container isSmallScreen={isSmallScreen}>
      <Styled.Content>
        <Row gutter={[32, 32]}>
          <Styled.LeftPanel>
            <Styled.Title>{lang.title}</Styled.Title>

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

            <Styled.Card ref={cardRef}>
              <Styled.CardImg $isVertical={isVerticalCard}>
                <Image alt={devconLang.title} src={devconLang.image} layout="fill" objectFit="cover" />
              </Styled.CardImg>
              <Styled.CardInfo $isVertical={isVerticalCard}>
                <h3>{devconLang.title}</h3>
                <p>{devconLang.desc}</p>
                <Button type="primary" size="small">
                  {devconLang.button}
                </Button>
              </Styled.CardInfo>
            </Styled.Card>
          </Styled.LeftPanel>

          <Styled.RightPanel>
            <Calendar data={activities} />
          </Styled.RightPanel>
        </Row>
      </Styled.Content>
    </Styled.Container>
  );
};

export default About;
