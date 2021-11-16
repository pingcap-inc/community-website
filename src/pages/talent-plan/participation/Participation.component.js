import { useState } from 'react';
import { useRouter } from 'next/router';

import * as Styled from './partitcipation.styled';
import { useTranslation } from 'next-i18next';
import { Styled as CommonStyled } from '@tidb-community/ui';
import { Col, Image, Row, Tabs } from 'antd';
import { getImage } from '~/pages/talent-plan/talent-plan.utils';
import { Link } from '~/components';

const { TabPane } = Tabs;

const Participation = () => {
  const router = useRouter();

  const { t } = useTranslation('page-talent-plan');

  const lang = t('participation', { returnObjects: true });

  const [isOnFirstTab, setIsOnFirstTab] = useState(true);

  const stepsContent = [
    <Styled.StepBoxContent>
      <Row gutter={16}>
        {lang.paths.map((path) => (
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

  const stepBoxes = lang.steps.map((step, idx) => (
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
          <CommonStyled.Title>{lang.title}</CommonStyled.Title>
          <Tabs onChange={(idx) => setIsOnFirstTab(idx === '1')}>
            <TabPane tab={lang.tab1} key={1}>
              <Image src={getImage('participation-org.jpg')} />
            </TabPane>
            <TabPane tab={lang.tab2} key={2}>
              <Row gutter={32}>
                <Col lg={12}>{stepBoxes[0]}</Col>
                <Col lg={12}>{stepBoxes.slice(1)}</Col>
              </Row>
            </TabPane>
          </Tabs>
        </Styled.Content>
      </Styled.Container>
      {isOnFirstTab && (
        <Styled.ContainerGray>
          <Styled.Content>
            <Styled.Becomings>
              {lang.becomings.map((el) => (
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
