import React from 'react';
import { useTranslation } from 'next-i18next';
import { GithubOutlined } from '@ant-design/icons';
import { Button, Col, Row } from 'antd';

import * as Styled from './contribution.styled';
import { ModuleTitle } from '~/pages/home/index.styled';
import { useIsSmallScreen } from '~/hooks';
import TwoColumnsLayout from '~/pages/home/twoColumsLayout';

const getImage = (name) => `/images/home/contribution-${name}`;

const Contribution = () => {
  const { t } = useTranslation('page-home');
  const { isSmallScreen } = useIsSmallScreen();

  const lang = t('contribution', { returnObjects: true });

  return (
    <Styled.Container isSmallScreen={isSmallScreen}>
      <TwoColumnsLayout
        title={lang.title}
        leftPanel={
          <>
            <ModuleTitle> {lang.guide.title} </ModuleTitle>
            <Styled.Text> {lang.guide.desc} </Styled.Text>
            {lang.guide.steps.map((step, idx) => (
              <Styled.StepBox>
                <Row gutter={32} wrap={false} justify={isSmallScreen && 'space-between'}>
                  <Col xs={{ order: 2 }} md={{ order: 1 }}>
                    <Styled.StepIconWrapper>
                      <Styled.StepIcon src={getImage(`step-${idx + 1}.svg`)} />
                    </Styled.StepIconWrapper>
                  </Col>
                  <Col xs={{ order: 1 }} md={{ order: 2 }}>
                    <Styled.StepHeader>
                      {lang.guide.stepPrefix} {idx + 1} {'.'} {step.title}
                    </Styled.StepHeader>
                    <Styled.Text> {step.desc} </Styled.Text>
                  </Col>
                </Row>
              </Styled.StepBox>
            ))}
            <Styled.EngageCallBox isSmallScreen={isSmallScreen}>
              <ModuleTitle> {lang.guide.engageCall} </ModuleTitle>
              <Button type={'primary'}> {lang.guide.learnMoreLabel} </Button>
            </Styled.EngageCallBox>
          </>
        }
        rightPanel={
          <>
            <Styled.ForkTitle> {lang.fork.title} </Styled.ForkTitle>
            <Styled.IssueList src={getImage('github-issues.jpg')} />
            <Button type={'primary'} icon={<GithubOutlined />}>
              {lang.fork.buttonLabel}
            </Button>
          </>
        }
      />
    </Styled.Container>
  );
};

export default Contribution;
