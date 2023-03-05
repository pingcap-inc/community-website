import { useState } from 'react';
import { Alert, Image, Tabs } from 'antd';

import { Styled as CommonStyled } from '@tidb-community/ui';

import { getImage } from '~/pages/talent-plan/talent-plan.utils';
import { useIsSmallScreen } from '~/hooks';
import Anchor from '~/components/Anchor';

import * as Styled from './partitcipation.styled';

const { TabPane } = Tabs;
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
  const [isOnFirstTab, setIsOnFirstTab] = useState(true);
  const { isSmallScreen } = useIsSmallScreen();

  return (
    <>
      <Styled.Container>
        <Styled.Content>
          <CommonStyled.Title id="learn">深度参与 Talent Plan</CommonStyled.Title>
          <Tabs onChange={(idx) => setIsOnFirstTab(idx === '1')}>
            <TabPane tab={'学习 Talent Plan'} key={1}>
              <Styled.Link>
                <li>
                  <Anchor href={'https://talentplan.edu.pingcap.com/catalog/info/id:234'}>
                    Talent Plan 301 课程 TinySQL
                  </Anchor>
                  <ul>
                    <li>实现一个 Mini 版本的分布式关系型数据库</li>
                  </ul>
                </li>

                <li>
                  <Anchor href={'https://talentplan.edu.pingcap.com/catalog/info/id:263'}>
                    Talent Plan 302 课程 TinyKV
                  </Anchor>
                  <ul>
                    <li>实现一个 Mini 版本的分布式 Key-Value 数据库</li>
                  </ul>
                </li>
              </Styled.Link>
              <Alert
                message={
                  <>
                    当注册 <Anchor href={'talentplan.edu.pingcap.com'} />{' '}
                    时，我们鼓励使用真实姓名和单位/学校邮箱，否则会影响学习证书的颁发。
                  </>
                }
                type="info"
                showIcon
              ></Alert>
            </TabPane>
            <TabPane tab={'成为 Talent Plan 建设者'} key={2}>
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
