import React from 'react'
import styles from './people.module.scss'
import SEO from "components/SEO";
import Container from "components/Container/Container";
import TMCItem from "components/people/TMCItem/TMCItem";
import {Col, Row} from "antd";
import HowToBecome from "components/people/HowToBecome/HowToBecome";


export async function getStaticProps(context) {
  
  const peopleMockData = [{
    avatarUrl: 'images/mva/avatar.svg',
    name: '孙晓刚',
    organization: '京东云',
    position: '高级DBA',
  }, {
    avatarUrl: 'images/mva/avatar.svg',
    name: '张大山',
    organization: '平凯星辰技术团队',
    position: '数据库与中间件团队负责人',
  }, ]
  const people = []
  for (let i = 0; i < 12 / 2; i++) {
    people.push(...peopleMockData)
  }
  
  const howToBecome = [
    {index: 1, iconUrl: 'images/people/how-to-become-1.svg', title: '填写信息'},
    {index: 2, iconUrl: 'images/people/how-to-become-2.svg', title: '信息审核'},
    {index: 3, iconUrl: 'images/people/how-to-become-3.svg', title: '邀请加入'},
  ]
  
  return {
    props: {howToBecome, people}, // will be passed to the page component as props
  }
}

export default function MVA({howToBecome, people}) {
  return (
    <div className={styles.wrapper}>
      <SEO
        title="会员"
        description="TUG 为 TiDB 用户提供了一个开放的交流平台。成员们积极在社区中贡献了大量优质的内容，既扩大了 TUG 的影响力，也从中收获很多价值，形成了“来自社区，回馈社区” 的良性循环。"
      />
      
      <Container className={styles.header}>
        <div className={styles.header_title}>
          TUG 会员
        </div>
        <div className={styles.header_summary}>
          TUG 为 TiDB 用户提供了一个开放的交流平台。成员们积极在社区中贡献了大量优质的内容，既扩大了 TUG 的影响力，也从中收获很多价值，形成了“来自社区，回馈社区” 的良性循环。
        </div>
      </Container>
      
      <Container className={styles.organization_chart}>
        <div className={styles.organization_chart_title}>
          TUG 组织架构
        </div>
        <div className={styles.organization_chart_image}>
          <img src="images/people/tug-organization-chart.svg" alt="tug-organization-chart"/>
        </div>
      </Container>
      
      <div className={styles.how_to_become_wrapper}>
        <Container className={styles.how_to_become}>
          <div className={styles.how_to_become_title}>
            如何成为 TUG 会员
          </div>
          <div className={styles.how_to_become_list}>
            <Row justify={'space-between'} gutter={[128, 64]}>
              {howToBecome.map((item, index) => <Col xs={24} sm={24} md={8} key={index}><HowToBecome {...item} /></Col>)}
            </Row>
          </div>
        </Container>
      </div>
      
      <Container className={styles.tmc}>
        <div className={styles.tmc_title}>
          TMC 成员
        </div>
        <div className={styles.tmc_summary}>
          TMC 是 TUG 最高决策组织，负责统筹 TUG 发展与规划、重要人事任免、全年大事安排等
        </div>
        <div className={styles.tmc_list}>
          <Row justify={'space-between'} gutter={[64, 32]}>
            {people.map((item, index) => <Col xs={12} sm={6} md={4} lg={4} key={index}><TMCItem {...item} /></Col>)}
          </Row>
        </div>
      </Container>
      
      <Container className={styles.tmc}>
        <div className={styles.tmc_title}>
          Leader
        </div>
        <div className={styles.tmc_summary}>
          TMC 是 TUG 最高决策组织，负责统筹 TUG 发展与规划、重要人事任免、全年大事安排等
        </div>
        <div className={styles.tmc_list}>
          <Row justify={'space-between'} gutter={[64, 32]}>
            {people.map((item, index) => <Col xs={12} sm={6} md={4} lg={4} key={index}><TMCItem {...item} /></Col>)}
          </Row>
        </div>
      </Container>
      
    </div>
  )
}

