import React from 'react';
import { Col, Row } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';

import * as Styled from './banner.styled';
import { common as commonUtils } from '~/utils';
import { useIsSmallScreen } from '~/hooks';
import { useTranslation } from 'next-i18next';
import TwoColumnsSection from '~/layouts/twoColumnsSection';
import { getImage } from '~/pages/talent-plan/talent-plan.utils';

const Banner = () => {
  const router = useRouter();

  const { isSmallScreen, breakpoint } = useIsSmallScreen();
  const { t } = useTranslation('page-talent-plan');

  const lang = t('banner', { returnObjects: true });

  return (
    <Styled.Container>
      <Styled.Content>
        <TwoColumnsSection
          leftPanel={
            <>
              <Styled.Title>{lang.title}</Styled.Title>
              <Styled.Intro>{lang.intro}</Styled.Intro>
              <Styled.LearnButton>{lang.start}</Styled.LearnButton>
            </>
          }
          rightPanel={
            <Styled.CarouselWrapper>
              <Styled.Carousel>
                {[1, 2, 3].map((el) => (
                  <Styled.Recommendation key={el} src={getImage(`banner-rec-${el}.svg`)} alt={`rec-${el}`} />
                ))}
              </Styled.Carousel>
            </Styled.CarouselWrapper>
          }
        ></TwoColumnsSection>
      </Styled.Content>
    </Styled.Container>
  );
};

export default Banner;
