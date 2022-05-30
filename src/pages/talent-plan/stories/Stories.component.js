import React from 'react';

import * as Styled from './stories.styled';
import { useTranslation } from 'next-i18next';
import { Styled as CommonStyled } from '@tidb-community/ui';
import { Avatar, Col, Row } from 'antd';
import { getImage } from '~/pages/talent-plan/talent-plan.utils';

const Others = () => {
  const { t } = useTranslation('page-talent-plan');

  const lang = t('stories', { returnObjects: true });

  return (
    <Styled.Container>
      <Styled.Content>
        <CommonStyled.Title>{lang.title}</CommonStyled.Title>
        <Row gutter={16}>
          {lang.stories.map((story) => (
            <Col key={story.name} xs={24} md={12} lg={8}>
              <Styled.CardWrap>
                <Styled.StoryCard>
                  {story.content}
                  <Styled.StoryCardBottom>
                    <Avatar src={getImage(`team-${story.name}.png`)} size={48} />
                    <Styled.StoryCardInfo>
                      <Styled.StoryCardInfoName> {story.name} </Styled.StoryCardInfoName>
                      <Styled.StoryCardInfoDesc> {story.desc} </Styled.StoryCardInfoDesc>
                    </Styled.StoryCardInfo>
                  </Styled.StoryCardBottom>
                </Styled.StoryCard>
              </Styled.CardWrap>
            </Col>
          ))}
        </Row>
      </Styled.Content>
    </Styled.Container>
  );
};

export default Others;
