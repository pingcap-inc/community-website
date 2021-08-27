import React from 'react';
import { Button, Col, Row } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import { useTranslation } from 'next-i18next';

import * as Styled from './contribution.styled';
import TwoColumnsLayout from '~/pages/home/twoColumsLayout';
import { ModuleTitle } from '~/pages/home/index.styled';
import { useIsSmallScreen } from '~/hooks';
import { getImage as getHomeImage } from '~/pages/home/index.utils';

const getImage = (name) => getHomeImage(`contribution-${name}`);

const Contribution = () => {
  const { t } = useTranslation('page-home');
  const { isSmallScreen } = useIsSmallScreen();

  const lang = t('contribution', { returnObjects: true });
  const { guide: guideLang, fork: forkLang } = lang;

  return (
    <Styled.Container isSmallScreen={isSmallScreen}>
      <TwoColumnsLayout
        title={lang.title}
        leftPanel={
          <>
            <ModuleTitle>{guideLang.title}</ModuleTitle>
            <Styled.Text>{guideLang.desc}</Styled.Text>

            {guideLang.steps.map((step, idx) => (
              <Styled.StepBox key={idx}>
                <Row gutter={32} wrap={false} justify={isSmallScreen && 'space-between'}>
                  <Col xs={{ order: 2 }} md={{ order: 1 }}>
                    <Styled.StepIconWrapper>
                      <Styled.StepIcon src={getImage(`step-${idx + 1}.svg`)} />
                    </Styled.StepIconWrapper>
                  </Col>
                  <Col xs={{ order: 1 }} md={{ order: 2 }}>
                    <Styled.StepHeader>
                      {guideLang.stepPrefix} {idx + 1} {'.'} {step.title}
                    </Styled.StepHeader>
                    <Styled.Text>{step.desc}</Styled.Text>
                  </Col>
                </Row>
              </Styled.StepBox>
            ))}

            <Styled.EngageCallBox isSmallScreen={isSmallScreen}>
              <ModuleTitle>{guideLang.engageCall}</ModuleTitle>
              <Button type={'primary'}>{guideLang.learnMoreLabel}</Button>
            </Styled.EngageCallBox>
          </>
        }
        rightPanel={
          <>
            <Styled.ForkTitle>{forkLang.title}</Styled.ForkTitle>
            <Styled.IssueList src={getImage('github-issues.jpg')} />
            <Button type={'primary'} icon={<GithubOutlined />}>
              {forkLang.buttonLabel}
            </Button>
          </>
        }
      />
    </Styled.Container>
  );
};

export default Contribution;
