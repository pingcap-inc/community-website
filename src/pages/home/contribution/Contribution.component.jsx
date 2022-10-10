import React from 'react';
import { Col, Row, Tooltip } from 'antd';
import Image from 'next/image';

import TwoColumnsSection from '~/layouts/twoColumnsSection';
import { useIsSmallScreen } from '~/hooks';
import Anchor from '~/components/Anchor';

import * as Styled from './contribution.styled';
import contribution_github_issues_image from './contribution-github-issues.jpg';
import GithubIconSVG from './contribution-github-logo.svg';
import AsktugIconSVG from './contribution-asktug-logo.svg';
import SlackIconSVG from './contribution-slack-logo.svg';
import StepIcon1SVG from './contribution-step-1.svg';
import StepIcon2SVG from './contribution-step-2.svg';
import StepIcon3SVG from './contribution-step-3.svg';
import StepIcon4SVG from './contribution-step-4.svg';

const steps = [
  {
    icon: <StepIcon1SVG />,
    title: '开始准备工作',
    desc: '假设你是一个 TiDB 新手，本章节将教你安装开发环境，构建并连接到 tidb-server。',
    link: 'https://pingcap.github.io/tidb-dev-guide/get-started/install-golang',
  },
  {
    icon: <StepIcon2SVG />,
    title: '为 TiDB 做贡献',
    desc: '帮助你快速参与社区，描述了贡献类型以及如何快速实现你的 first contribution。',
    link: 'https://pingcap.github.io/tidb-dev-guide/contribute-to-tidb/introduction',
  },
  {
    icon: <StepIcon3SVG />,
    title: '深入了解 TiDB',
    desc: '帮助你熟悉分布式数据库的基本概念，在脑海中建⽴知识库，包括但不限于分布式数据库中的 SQL 语⾔、关键组件、算法。已经熟悉这些内容的同学可以跳过本节。 ',
    link: 'https://pingcap.github.io/tidb-dev-guide/understand-tidb/introduction.html',
  },
  {
    icon: <StepIcon4SVG />,
    title: '项目管理',
    desc: '帮助你参与团队⼯作，主导功能开发，管理 TiDB 社区中的项⽬。',
    link: 'https://pingcap.github.io/tidb-dev-guide/project-management/introduction',
  },
];

const fork = [
  {
    name: 'github',
    label: 'Github',
    icon: <GithubIconSVG height={36} alt={'github logo'} />,
    link: 'https://github.com/pingcap/tidb',
  },
  {
    name: 'asktug',
    label: '开发者论坛',
    icon: <AsktugIconSVG height={36} alt={'asktug logo'} />,
    link: 'https://internals.tidb.io/',
  },
  {
    name: 'slack',
    label: 'Slack',
    icon: <SlackIconSVG height={36} alt={'slack logo'} />,
    link: 'https://slack.tidb.io/',
  },
];

const Contribution = () => {
  const { isSmallScreen } = useIsSmallScreen();

  return (
    <Styled.Container id="contribution" isSmallScreen={isSmallScreen}>
      <TwoColumnsSection
        title={'如何贡献代码'}
        leftPanel={
          <>
            <Styled.ModuleTitle>开发者指南</Styled.ModuleTitle>
            <Styled.Text>
              旨在帮助贡献者从新手成长为 TiDB 专家，熟悉 TiDB
              的设计和实施，从而能够在现实世界中流畅地使用它，并进行深入开发工作。
            </Styled.Text>

            {steps.map((step, idx) => (
              <Styled.StepBox key={idx} isSmallScreen={isSmallScreen}>
                <Row gutter={32} wrap={false} justify={isSmallScreen && 'space-between'}>
                  <Col xs={{ order: 2 }} md={{ order: 1 }}>
                    <Styled.StepIconWrapper>{step.icon}</Styled.StepIconWrapper>
                  </Col>
                  <Col xs={{ order: 1 }} md={{ order: 2 }}>
                    <Styled.StepHeader>
                      <Styled.Link href={step.link}>
                        Chapter {idx + 1} {'.'} {step.title}
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
            {/*<Styled.ForkTitle>{forkLang.title}</Styled.ForkTitle>*/}
            <Styled.IssueList>
              <Image
                {...contribution_github_issues_image}
                width={400}
                height={431}
                quality={75}
                alt={'GitHub Pull Request 列表截图'}
              />
            </Styled.IssueList>
            <Row gutter={16}>
              {fork.map((el) => (
                <Tooltip key={el.label} title={el.label} placement={'bottom'}>
                  <Col>
                    <Anchor href={el.link}>
                      {el.icon}
                      {/*<Image  height={36} alt={`${el.name} logo`} />*/}
                    </Anchor>
                  </Col>
                </Tooltip>
              ))}
            </Row>

            <Styled.EngageCallBox isSmallScreen={isSmallScreen}>
              <Styled.EngageTitle>现在，来开发者论坛和内核研发工程师交流学习吧！</Styled.EngageTitle>
            </Styled.EngageCallBox>
          </>
        }
      />
    </Styled.Container>
  );
};

export default Contribution;
