import React, {useState} from 'react'
import styles from './MVA.module.scss'
import SEO from "components/SEO";
import {Col, Row, Space} from "antd";
import MVAItem from "components/mva/MVAItem";
import YearSwitch from "components/mva/YearSwitch";
import WelfareItem from "components/mva/WelfareItem";
import BecomeMVA from "components/mva/BecomeMVA";
import Container from "components/Container/Container";


export async function getStaticProps(context) {
  
  const years = [2020, 2019, 2018]
  
  const MVAMockData = [{
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
  const MVAs = []
  for (let i = 0; i < 12 / 2; i++) {
    MVAs.push(...MVAMockData)
  }
  
  const welfare = [
    {iconUrl: 'images/mva/welfare-icon-1.svg', name: '社区荣誉'},
    {iconUrl: 'images/mva/welfare-icon-2.svg', name: '会员定制礼包'},
    {iconUrl: 'images/mva/welfare-icon-3.svg', name: 'TiDB 专家养成计划'},
    {iconUrl: 'images/mva/welfare-icon-4.svg', name: '职业发展'},
    {iconUrl: 'images/mva/welfare-icon-5.svg', name: '人脉拓展'},
    {iconUrl: 'images/mva/welfare-icon-6.svg', name: '个人影响力塑造'},
  ]
  
  const become = [
    {iconUrl: 'images/mva/become-icon-1.svg', title: '文章', summary: '1500+ 字，结构完整，能清楚阐述技术点'},
    {iconUrl: 'images/mva/become-icon-2.svg', title: 'TALK', summary: '面向 20+ 受众分享讲解 TiDB 及 TUG 相关内容'},
    {iconUrl: 'images/mva/become-icon-3.svg', title: '直播', summary: '作为直播嘉宾分享讲解 TiDB 及 TUG 相关内容'},
  ]
  
  return {
    props: {years, MVAs, welfare, become}, // will be passed to the page component as props
  }
}

export default function MVA({years, MVAs, welfare, become}) {
  const [year, setYear] = useState(years[0])
  return (
    <div className={styles.wrapper}>
      <SEO
        title="MVA"
        description="TiDB MOA（Most Outstanding  Advocate）、TiDB MVA （Most Valuable Advocate）是为 TUG 贡献高质量技术内容的 TiDB 用户，他们帮助他人充分了解 TiDB，是 TUG 社区认定的 TiDB 技术先驱者与技术领袖，享受极高的社区荣誉和权益。"
      />
      
        <div>
          <img className={styles.header_widget_line} src="images/mva/banner-line.svg" alt=""/>
          <img className={styles.header_widget_1} src="images/mva/banner-widget-1.png" alt=""/>
          <img className={styles.header_widget_2} src="images/mva/banner-widget-2.png" alt=""/>
          <img className={styles.header_widget_3} src="images/mva/banner-widget-3.png" alt=""/>
          <Container className={styles.header}>
            <div className={styles.header_intro}>
              <div className={styles.header_intro_logo}>
                <img src="images/mva/mva-logo.svg" alt=""/>
              </div>
              <div className={styles.header_intro_text}>
                <div className={styles.header_intro_text_title}>
                  TUG最高荣誉: MVA / MOA
                </div>
                <div className={styles.header_intro_text_summary}>
                  TiDB MOA（Most Outstanding  Advocate）、TiDB MVA （Most Valuable Advocate）是为 TUG 贡献高质量技术内容的 TiDB 用户，他们帮助他人充分了解 TiDB，是 TUG 社区认定的 TiDB 技术先驱者与技术领袖，享受极高的社区荣誉和权益。
                </div>
              </div>
            </div>
            <div className={styles.header_cup}>
              <img src="images/mva/header-cup.png" alt=""/>
            </div>
          </Container>
        </div>
      
      <Container>
        <div className={styles.MVAs}>
          <div className={styles.MVAs_title}>
            {year} 年度 TiDB MVA
          </div>
          <YearSwitch
            value={year}
            items={years.map(item => ({name: item, value: item}))}
            onClick={setYear}
          />
          <div className={styles.MVAs_list}>
            <Row gutter={[48, 48]}>
              {MVAs.map((mva, index) =>
                <Col key={index} md={12} lg={6}>
                  <MVAItem {...mva} />
                </Col>
              )}
            </Row>
          </div>
        </div>
        
        <div className={styles.about}>
          <div className={styles.about_left}>
            <img src="images/mva/about-cup.png" alt=""/>
          </div>
          <div className={styles.about_right}>
            <div className={styles.about_right_title}>
              关于 MVA
            </div>
            <div className={styles.about_right_detail}>
              <p>
                TiDB 作为全球顶级开源项目，得到很多用户的青睐，也被越来越多的技术工程师认可，其中有很多人开始自发地输出 TiDB 使用案例、功能解析、最佳实践等内容。这些内容源自社区，同时也是对社区的回馈，很好地促进了 TiDB 技术的传播。为了鼓励更多社区用户输出优质技术内容，感谢他们对 TiDB 社区的付出，TUG 发起了“TiDB MVA”计划。
              </p>
              <p>
                TiDB MOA（Most Outstanding Advocate）、TiDB MVA （Most Valuable Advocate）是为 TUG 社区贡献了高质量技术内容的 TiDB 用户，他们通过总结沉淀优质内容帮助他人充分了解和使用 TiDB，是 TUG 社区认证的 TiDB 技术先锋与意见领袖。
              </p>
            </div>
          </div>
        </div>
        
        <div className={styles.welfare}>
          <div className={styles.welfare_title}>
            专属福利
          </div>
          <div className={styles.welfare_list}>
            <Row justify={'center'} gutter={[48, 48]}>
              {welfare.map((item, index) => <Col key={index}><WelfareItem {...item}/></Col> )}
            </Row>
          </div>
        </div>
      </Container>
      
      <div>
        <img className={styles.become_widget_line} src="images/mva/become-line.svg" alt=""/>
        <Container className={styles.become}>
          <div className={styles.become_title}>
            成为 MVA
          </div>
          <div className={styles.become_summary}>
            在一年内（自然年）为 TUG 社区贡献优质技术内容的数量 ≥ 3 可成为当年度的 TiDB MVA。每年为社区贡献优质技术内容达到 10+，可成为当年度 TiDB MOA。
          </div>
          <div className={styles.become_list}>
            <Row justify={'center'} gutter={[48, 48]}>
              {become.map((item, index) => <Col key={index}><BecomeMVA {...item}/></Col> )}
            </Row>
          </div>
        </Container>
      </div>
      
    </div>
  )
}

