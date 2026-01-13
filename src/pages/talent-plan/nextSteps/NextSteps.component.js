import React from 'react';
import { Col, Row } from 'antd';
import { useRouter } from 'next/router';

import { Styled as CommonStyled } from '@tidb-community/ui';

import { link as linkUtils } from '~/utils';

import * as Styled from './nextSteps.styled';

const NextSteps = () => {
  const router = useRouter();

  const onClick = (link) => (e) => {
    e.preventDefault();
    linkUtils.handleRedirect(router, link);
  };

  return (
    <Styled.Container>
      <Styled.Content>
        <CommonStyled.Title>进一步探索</CommonStyled.Title>
        {/* Since the data for this section are richly formatted, I decided
       not to use the i18n patter*/}
        <Row gutter={16}>
          <Col sm={24} lg={12}>
            <Styled.ProjectCard>
              <Styled.ProjectCardContent>
                <Styled.ProjectCardTitle> 参与 TiDB 开发 </Styled.ProjectCardTitle>
                <p>
                  本模块旨在帮助贡献者从新手成长为 TiDB 专家，熟悉 TiDB
                  的设计和实施，从而能够在现实世界中流畅地使用它，并进行深入开发工作。
                </p>
                <p>
                  同时你也可以在<Styled.Link href={'https://internals.tidb.io'}>开发者论坛</Styled.Link>
                  和其他开发者们交流学习。
                </p>
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
                <Styled.ProjectCardTitle> 探索更多社区玩法 </Styled.ProjectCardTitle>
                <ol>
                  <li>
                    TiDB 社区每年举办上百场活动，覆盖开发者、用户上万人，欢迎
                    <Styled.Link href="https://pingkai.cn/tidbcommunity/events">参与活动</Styled.Link>
                  </li>
                  <li>
                    如果你对 TiDB 相关产品和技术的应用感兴趣，欢迎来
                    <Styled.Link href="https://asktug.com">用户论坛</Styled.Link>和{' '}
                    <Styled.Link href="https://pingkai.cn/tidbcommunity/tug">TUG 交流学习</Styled.Link>
                  </li>
                  <li>更多技术内容请前往博客学习</li>
                </ol>
                <Styled.ProjectCardButton onClick={onClick('https://pingkai.cn/tidbcommunity')}>
                  开始探索
                </Styled.ProjectCardButton>
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
