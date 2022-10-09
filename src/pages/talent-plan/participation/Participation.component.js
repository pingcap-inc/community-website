import { useState } from 'react';
import { useRouter } from 'next/router';
import { Col, Image, Row, Tabs } from 'antd';

import { Styled as CommonStyled } from '@tidb-community/ui';

import { getImage } from '~/pages/talent-plan/talent-plan.utils';
import { Link } from '~/components';
import { useIsSmallScreen } from '~/hooks';

import * as Styled from './partitcipation.styled';

const { TabPane } = Tabs;

const steps = [
  '结合个人兴趣爱好以及知识背景，从以下卡片中点击选择适合自己的学习路径',
  '填写报名表单，加入课程学习小组，开始学习',
  '完成课程作业并提交',
  '通过线上课程考核，获得 Talent Plan 线上结业证书',
];

const paths = [
  {
    name: '路径（一）',
    desc: '实现一个 Mini 版本的分布式关系型数据库',
    url: 'https://github.com/tidb-incubator/tinysql',
  },
  {
    name: '路径（二）',
    desc: '实现一个 Mini 版本的 Key-value 数据库',
    url: 'https://github.com/tidb-incubator/tinykv',
  },
  {
    name: '路径（三）',
    desc: '参与工业级开源分布式关系型数据库 TiDB 开发实践',
    url: 'https://github.com/pingcap/community/blob/master/contributors/README.md',
  },
  {
    name: '路径（四）',
    desc: '参与工业级开源分布式 Key-value 数据库 TiKV 的开发实践',
    url: 'https://github.com/pingcap/community/blob/master/contributors/README.md',
  },
  {
    name: '路径（五）',
    desc: 'Rust 编程原理与实践',
    url: 'https://github.com/pingcap/talent-plan/blob/master/courses/rust/README.md',
  },
];

const becomings = [
  {
    title: '成为 Contributor',
    desc: '当你向 Talent Plan 下任何课程提交 PR 并得到批准之后，你就成为了 Contributor。Talent Plan 项目欢迎对课程内容代码、测试用例、试题、课程文字等各个领域的贡献。',
  },
  {
    title: '成为 Mentor',
    desc: '我们欢迎熟悉一门课程或者多门课程的学习者能够从事作业批改、技术分享、学习指导等活动。参加其中任何一项活动，你将成为 Mentor。',
  },
  {
    title: '成为 Active Contributor',
    desc: '当你一年内有 6 个 PR 被接受时，你将成为当年度的 Active Contributor',
  },
  {
    title: '成为 Senior Mentor',
    desc: '一个 Mentor 累计参加 6 次活动，并且直接辅导 10 人以上，将成为 Senior Mentor',
  },
  {
    title: '成为 Committer',
    desc: 'Committer 是 Talent Plan 项目下某一门或者多门课程的专家，或者一门新课程的创建人。一般地，当你累计提交 PR 达到30个时，或者你为 Talent Plan 创建的新课程被 PMC 接受时，你应该联系 PMC 阐述你的贡献。当你获得 3+ PMC 成员的同意之后，你将成为一名Committer。',
  },
];

const Participation = () => {
  const router = useRouter();
  const [isOnFirstTab, setIsOnFirstTab] = useState(true);

  const { isSmallScreen } = useIsSmallScreen();
  const stepsContent = [
    <Styled.StepBoxContent>
      <Row gutter={16}>
        {paths.map((path) => (
          <Col span={12} key={path}>
            <Styled.PathCardWrapper>
              <Styled.PathCard onClick={() => router.push(path.url)}>
                <Styled.PathCardHeader> {path.name} </Styled.PathCardHeader>
                {path.desc}
              </Styled.PathCard>
            </Styled.PathCardWrapper>
          </Col>
        ))}
      </Row>
    </Styled.StepBoxContent>,
    <Styled.StepBoxContent>
      <Link href="https://forms.pingcap.com/f/talent-plan-application">
        https://forms.pingcap.com/f/talent-plan-application
      </Link>
    </Styled.StepBoxContent>,
    <Styled.StepBoxContent>
      <ul>
        <li>提交方式：发送邮件至 talent-plan@tidb.io,7*24 小时全年接受作业</li>
        <li>邮件主题建议：【Talent Plan 作业评估申请】课程名称 - 申请人 - 联系方式</li>
        <li>
          邮件正文建议：
          <ul>
            <li>每个作业的解题思路阐述，请标明作业编号</li>
            <li>所有代码按照原目录结构做成压缩文件附上</li>
            <li>应届生可以考虑附上简历</li>
          </ul>
        </li>
      </ul>
    </Styled.StepBoxContent>,
    <Styled.StepBoxContent>
      <ul>
        <li> 线上成绩 60 分以上（含 60 分），视为“通过”，发放结业证书，具有申请 TCP 项目的资格</li>
        <li> 线上成绩 70 分以上（含 70 分），视为“良好”，发放结业证书，具有申请 TCP 项目的资格</li>
        <li> 线上成绩 85 分以上（含 85 分），视为“优秀”，发放结业证书，具有申请 TCP 项目的资格</li>
        <li>线上成绩低于 60 分，视为“不及格”，可在一周内对课程作业进行修改完善，若评估通过，亦可获得结业证书。</li>
      </ul>
    </Styled.StepBoxContent>,
  ];

  const stepBoxes = steps.map((step, idx) => (
    <Styled.StepBox icon={getImage(`participation-step-icon-${idx + 1}.svg`)}>
      <Styled.StepBoxInner>
        <Styled.StepBoxHeader key={step}> Step {idx + 1} </Styled.StepBoxHeader>
        {step}
        {stepsContent[idx]}
      </Styled.StepBoxInner>
    </Styled.StepBox>
  ));

  return (
    <>
      <Styled.Container>
        <Styled.Content>
          <CommonStyled.Title id="learn">深度参与 Talent Plan</CommonStyled.Title>
          <Tabs onChange={(idx) => setIsOnFirstTab(idx === '1')}>
            <TabPane tab={'成为 Talent Plan 建设者'} key={1}>
              <Row gutter={32}>
                <Col lg={12}>{stepBoxes[0]}</Col>
                <Col lg={12}>{stepBoxes.slice(1)}</Col>
              </Row>
            </TabPane>
            <TabPane tab={'学习 Talent Plan'} key={2}>
              <Image preview={false} src={getImage('participation-org.jpg')} />
            </TabPane>
          </Tabs>
        </Styled.Content>
      </Styled.Container>
      {!isOnFirstTab && (
        <Styled.ContainerGray>
          <Styled.Content>
            <Styled.Becomings isSmallScreen={isSmallScreen}>
              {becomings.map((el) => (
                <Styled.BecomingBox>
                  <Styled.BecomingBoxContent>
                    <Styled.BecomingHeader>{el.title}</Styled.BecomingHeader>
                    {el.desc}
                  </Styled.BecomingBoxContent>
                </Styled.BecomingBox>
              ))}
            </Styled.Becomings>
          </Styled.Content>
        </Styled.ContainerGray>
      )}
    </>
  );
};

export default Participation;
