import React from 'react';
import { Col, Row, Tooltip } from 'antd';
import { useTranslation } from 'next-i18next';

import * as Styled from './contribution.styled';
import TwoColumnsLayout from '~/pages/home/twoColumsLayout';
import { Link } from '~/components';
import { getImage as getHomeImage } from '~/pages/home/index.utils';
import { useIsSmallScreen } from '~/hooks';

const getImage = (name) => getHomeImage(`contribution-${name}`);

const Contribution = () => {
  const { t } = useTranslation('page-home');
  const { isSmallScreen } = useIsSmallScreen();

  const lang = t('contribution', { returnObjects: true });
  const { guide: guideLang, fork: forkLang } = lang;

  return (
    <Styled.Container id="contribution" isSmallScreen={isSmallScreen}>
      <TwoColumnsLayout
        title={lang.title}
        leftPanel={
          <>
            <Styled.ModuleTitle>{guideLang.title}</Styled.ModuleTitle>
            <Styled.Text>{guideLang.desc}</Styled.Text>

            {guideLang.steps.map((step, idx) => (
              <Styled.StepBox key={idx} isSmallScreen={isSmallScreen}>
                <Row gutter={32} wrap={false} justify={isSmallScreen && 'space-between'}>
                  <Col xs={{ order: 2 }} md={{ order: 1 }}>
                    <Styled.StepIconWrapper>
                      <Styled.StepIcon src={getImage(`step-${idx + 1}.svg`)} />
                    </Styled.StepIconWrapper>
                  </Col>
                  <Col xs={{ order: 1 }} md={{ order: 2 }}>
                    <Styled.StepHeader>
                      <Styled.Link href={step.link}>
                        {guideLang.stepPrefix} {idx + 1} {'.'} {step.title}
                      </Styled.Link>
                    </Styled.StepHeader>
                    <Styled.Text>{step.desc}</Styled.Text>
                  </Col>
                </Row>
              </Styled.StepBox>
            ))}
          </>
        }
        rightPanel={
          <>
            <Styled.ForkTitle>{forkLang.title}</Styled.ForkTitle>
            <Styled.IssueList src={getImage('github-issues.jpg')} />
            <Row gutter={16}>
              {forkLang.map((el) => (
                <Tooltip title={el.label} placement={'bottom'}>
                  <Col>
                    <Link href={el.link}>
                      <img height={36} src={getImage(el.icon)} alt={`${el.name} logo`} />
                    </Link>
                  </Col>
                </Tooltip>
              ))}
            </Row>

            <Styled.EngageCallBox isSmallScreen={isSmallScreen}>
              <Styled.EngageTitle>{guideLang.engageCall}</Styled.EngageTitle>
            </Styled.EngageCallBox>
          </>
        }
      />
    </Styled.Container>
  );
};

export default Contribution;
