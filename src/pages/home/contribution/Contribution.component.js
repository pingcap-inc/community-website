import React from 'react';
import { Col, Row } from 'antd';
import { useTranslation } from 'next-i18next';

import * as Styled from './contribution.styled';
import TwoColumnsLayout from '~/pages/home/twoColumsLayout';
import { ModuleTitle } from '~/pages/home/index.styled';
import { useIsSmallScreen } from '~/hooks';
import { getImage as getHomeImage } from '~/pages/home/index.utils';
import { Link } from '~/components';

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
                      <a href={step.link}>
                        {guideLang.stepPrefix} {idx + 1} {'.'} {step.title}
                      </a>
                    </Styled.StepHeader>
                    <Styled.Text>{step.desc}</Styled.Text>
                  </Col>
                </Row>
              </Styled.StepBox>
            ))}

            <Styled.EngageCallBox isSmallScreen={isSmallScreen}>
              <ModuleTitle>{guideLang.engageCall}</ModuleTitle>
              <Row gutter={16}>
                <Col>
                  <Link href="https://internals.tidb.io/">
                    <img height={36} src={getImage('asktug-logo.svg')} alt={'asktug logo'} />
                  </Link>
                </Col>
                <Col>
                  <Link href="https://slack.tidb.io/">
                    <img height={36} src={getImage('slack-logo.svg')} alt={'slack logo'} />
                  </Link>
                </Col>
              </Row>
            </Styled.EngageCallBox>
          </>
        }
        rightPanel={
          <>
            <Styled.ForkTitle>{forkLang.title}</Styled.ForkTitle>
            <Styled.IssueList src={getImage('github-issues.jpg')} />
            <Link href={forkLang.link}>
              <img height={36} src={getImage('github-logo.svg')} alt={'github logo'} />
            </Link>
          </>
        }
      />
    </Styled.Container>
  );
};

export default Contribution;
