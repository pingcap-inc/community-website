import React from 'react';

import * as Styled from './institutes.styled';
import { useIsSmallScreen } from '~/hooks';
import { useTranslation } from 'next-i18next';
import { Styled as CommonStyled } from '@tidb-community/ui';
import { Col, Row } from 'antd';

const Institutes = () => {
  const { isSmallScreen } = useIsSmallScreen();
  const { t } = useTranslation('page-talent-plan');

  const lang = t('institutes', { returnObjects: true });

  const MAX_LIST_ITEMS = 10;
  // split list into chunks of 15
  const chunks = [];
  for (let i = 0; i < lang.names.length; i += MAX_LIST_ITEMS) {
    chunks.push(lang.names.slice(i, i + MAX_LIST_ITEMS));
  }

  const PAGE_SIZE = isSmallScreen ? 1 : 3;
  const pages = [];
  for (let i = 0; i < chunks.length; i += PAGE_SIZE) {
    pages.push(chunks.slice(i, i + PAGE_SIZE));
  }

  return (
    <Styled.Container>
      <Styled.Content>
        <CommonStyled.Title>{lang.title}</CommonStyled.Title>
        <Styled.Carousel>
          {pages.map((page) => (
            <Styled.CarouselContent>
              {
                <Row gutter={16}>
                  {page.map((chunk) => (
                    <Col key={chunk[0]} span={isSmallScreen ? 24 : 8}>
                      <Styled.ListCard>
                        {chunk.map((name) => (
                          <Styled.ListItem key={name}> {name} </Styled.ListItem>
                        ))}
                      </Styled.ListCard>
                    </Col>
                  ))}
                </Row>
              }
            </Styled.CarouselContent>
          ))}
        </Styled.Carousel>
      </Styled.Content>
    </Styled.Container>
  );
};

export default Institutes;
