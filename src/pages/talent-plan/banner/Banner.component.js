import React from 'react';
import { useRouter } from 'next/router';

import * as Styled from './banner.styled';
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
              <Styled.Carousel isSmallScreen={isSmallScreen}>
                {[1, 2, 3].map((el) => {
                  const props = {
                    image: getImage(`banner-rec-${el}.svg`),
                    key: el,
                    height: (() => {
                      if (breakpoint.lg) {
                        return 300;
                      }
                      if (breakpoint.md) {
                        return 300;
                      }
                      if (breakpoint.sm) {
                        return 300;
                      }
                      if (breakpoint.xs) {
                        return 200;
                      }
                    })(),
                  };
                  return <Styled.Recommendation {...props} />;
                })}
              </Styled.Carousel>
            </Styled.CarouselWrapper>
          }
        />
      </Styled.Content>
    </Styled.Container>
  );
};

export default Banner;