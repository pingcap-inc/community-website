import React from 'react';
import { Col, Row } from 'antd';
import { useRouter } from 'next/router';

import * as Styled from './nextSteps.styled';
import { useTranslation } from 'next-i18next';
import { Link, Styled as CommonStyled } from '@tidb-community/ui';
import { link as linkUtils } from '~/utils';

const NextSteps = () => {
  const router = useRouter();

  const onClick = (link) => (e) => {
    e.preventDefault();
    linkUtils.handleRedirect(router, link);
  };

  const { t } = useTranslation('page-talent-plan');

  const lang = t('nextSteps', { returnObjects: true });

  return (
    <Styled.Container>
      <Styled.Content>
        <CommonStyled.Title>{lang.title}</CommonStyled.Title>
        {/* Since the data for this section are richly formatted, I decided
       not to use the i18n patter*/}
        <Row gutter={16}>
          <Col sm={24} lg={12}>
            <Styled.ProjectCard>
              <Styled.ProjectCardContent>
                <Styled.ProjectCardTitle> 参加 TCP 项目 </Styled.ProjectCardTitle>
                Talent Challenge Program 是为通过 Talent Plan 课程考核的高校学生提供的开源项目实训平台，每个赛季将持续
                2~3 个月。 通过参与 Talent Challenge Program，你可以获得：
                <ul>
                  <li>亲身参与世界级开源项目的独特体验</li>
                  <li>一对一 Mentor 辅导</li>
                  <li>丰厚的项目奖金</li>
                  <li>优质的实习/校招机会！</li>
                </ul>
                <Styled.ProjectCardButton
                  onClick={onClick('https://github.com/pingcap/talent-plan/tree/master/talent-challenge-program2021')}
                >
                  立即关注
                </Styled.ProjectCardButton>
              </Styled.ProjectCardContent>
            </Styled.ProjectCard>
            <Styled.ProjectCard>
              <Styled.ProjectCardContent>
                <Styled.ProjectCardTitle> 参与 TiDB 开发 </Styled.ProjectCardTitle>
                <p>
                  本模块旨在帮助贡献者从新手成长为 TiDB 专家，熟悉 TiDB
                  的设计和实施，从而能够在现实世界中流畅地使用它，并进行深入开发工作。
                </p>
                <p>同时你也可以在开发者论坛和其他开发者们交流学习。</p>
                <Styled.ProjectCardButton
                  onClick={onClick('https://pingcap.github.io/tidb-dev-guide/get-started/install-golang')}
                >
                  立即学习
                </Styled.ProjectCardButton>
              </Styled.ProjectCardContent>
            </Styled.ProjectCard>
            <Styled.ProjectCard>
              <Styled.ProjectCardContent>
                <Styled.ProjectCardTitle> 参加社区项目 TiDB for PostgreSQL </Styled.ProjectCardTitle>
                TiDB for PostgreSQL 是神州数码武汉云基地推出的开放源码，旨在促进和融入 TiDB
                的开源社区。除了高可用性、水平可扩展性和云原生功能外，PostgreSQL 的 TiDB 还与 PostgreSQL 协议兼容。
                <Styled.ProjectCardButton
                  onClick={onClick('https://github.com/DigitalChinaOpenSource/TiDB-for-PostgreSQL')}
                >
                  立即参与
                </Styled.ProjectCardButton>
              </Styled.ProjectCardContent>
            </Styled.ProjectCard>
          </Col>
          <Col sm={24} lg={12}>
            <Styled.ProjectCard>
              <Styled.ProjectCardContent>
                <Styled.ProjectCardTitle> 参与 TiDB Hackathon 年度比赛 </Styled.ProjectCardTitle>
                TiDB Hackathon 是由 TiDB
                社区举办的黑客马拉松大赛，选手需围绕组委会规定的主题做出一个完整的作品并由评审最终评选出获奖者。作为社区最硬核的保留项目，黑客马拉松每年都吸引大量的社区开发者、高校学生、用户等积极参与。丰厚的奖金，极客的项目，等你来挑战！2021
                年 12 月 1日 开启报名，敬请期待。
                <Styled.ProjectCardButton disabled> 敬请期待 </Styled.ProjectCardButton>
              </Styled.ProjectCardContent>
            </Styled.ProjectCard>

            <Styled.ProjectCard>
              <Styled.ProjectCardContent>
                <Styled.ProjectCardTitle> 探索更多社区玩法 </Styled.ProjectCardTitle>
                <ol>
                  <li>
                    TiDB 社区每年举办上百场活动，覆盖开发者、用户上万人，欢迎
                    <Link href="https://tidb.io/events">参与活动</Link>
                  </li>
                  <li>
                    如果你对 TiDB 相关产品和技术的应用感兴趣，欢迎来<Link href="https://asktug.com">用户论坛</Link>和{' '}
                    <Link href="https://tidb.io/tug">TUG 交流学习</Link>
                  </li>
                  <li>更多技术内容请前往博客学习</li>
                </ol>
                <Styled.ProjectCardButton onClick={onClick('https://tidb.io')}>开始探索</Styled.ProjectCardButton>
              </Styled.ProjectCardContent>
            </Styled.ProjectCard>

            <Styled.ProjectCard>
              <Styled.ProjectCardContent>
                <Styled.ProjectCardTitle> 校园招聘 </Styled.ProjectCardTitle>
                PingCAP 及 TiDB 生态企业向优秀高校毕业生敞开大门
                <Styled.ProjectCardButton
                  onClick={onClick(
                    'https://campus.pingcap.com/campus_apply/pingcap/39951/#/?anchorName=default_joblist&sourceToken='
                  )}
                >
                  立即参与
                </Styled.ProjectCardButton>
              </Styled.ProjectCardContent>
            </Styled.ProjectCard>
          </Col>
        </Row>
      </Styled.Content>
    </Styled.Container>
  );
};

export default NextSteps;
