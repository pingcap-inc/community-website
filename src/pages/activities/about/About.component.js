import React from 'react';
import { Row } from 'antd';
import { Trans, useTranslation } from 'next-i18next';

import * as Styled from './about.styled';
import { Link } from '~/components';
import { useIsSmallScreen } from '~/hooks';

const About = () => {
  const { isSmallScreen } = useIsSmallScreen();
  const { t } = useTranslation('page-activities');

  const lang = t('about', { returnObjects: true });
  const { paragraph2: paragraph2Lang } = lang;

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

            <Styled.Card>
              <Styled.CardImg>Img</Styled.CardImg>
              <Styled.CardInfo>Info</Styled.CardInfo>
            </Styled.Card>
          </Styled.LeftPanel>

          <Styled.RightPanel>Calendar</Styled.RightPanel>
        </Row>
      </Styled.Content>
    </Styled.Container>
  );
};

export default About;
