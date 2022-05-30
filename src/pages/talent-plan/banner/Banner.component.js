import React from 'react';

import * as Styled from './banner.styled';
import { useIsSmallScreen } from '~/hooks';
import { useTranslation } from 'next-i18next';
import TwoColumnsSection from '~/layouts/twoColumnsSection';
import { getImage } from '~/pages/talent-plan/talent-plan.utils';
import Anchor from '~/components/Anchor';
import { Space } from 'antd';

const Banner = () => {
  const { isSmallScreen, breakpoint } = useIsSmallScreen();
  const { t } = useTranslation('page-talent-plan');

  const lang = t('banner', { returnObjects: true });

  return (
    <Styled.Container>
      <Styled.Content>
        <TwoColumnsSection
          leftPanel={
            <Styled.LeftPanel>
              <Styled.Title>{lang.title}</Styled.Title>
              <Styled.Intro>{lang.intro}</Styled.Intro>
              <Space>
                <Anchor href="https://forms.pingcap.com/f/talent-plan-application">
                  <Styled.LearnButton>报名学习</Styled.LearnButton>
                </Anchor>
                <Anchor href="https://github.com/pingcap/talent-plan">
                  <Styled.LearnButton>Github 代码</Styled.LearnButton>
                </Anchor>
              </Space>
            </Styled.LeftPanel>
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
