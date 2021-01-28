import React, {useState} from 'react'
import styles from './MVA.module.scss'
import SEO from "components/SEO";
import {Col, Row} from "antd";
import MVAItem from "components/mva/MVAItem";
import YearSwitch from "components/mva/YearSwitch";
import WelfareItem from "components/mva/WelfareItem";
import BecomeMVA from "components/mva/BecomeMVA";
import Container from "components/Container/Container";
import tugData from '../data/tug_data.js'
import {ArrowRightOutlined} from '@ant-design/icons'
import MyLink from "components/MyLink";


export async function getStaticProps(context) {
  const {mva2020, mva2019} = tugData
  const MVAs = [
    {
      year: 2020,
      data: mva2020,
    },
    {
      year: 2019,
      data: mva2019,
    },
  ]
  
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
    props: {MVAs, welfare, become}, // will be passed to the page component as props
  }
}

export default function MVA({MVAs, welfare, become}) {
  const [year, setYear] = useState(MVAs[0].year)
  return (
    <div className={styles.wrapper}>
      <SEO
        title="MVA"
        description="TiDB MOA（Most Outstanding  Advocate）、TiDB MVA （Most Valuable Advocate）是为 TUG 贡献高质量技术内容的 TiDB 用户，他们帮助他人充分了解 TiDB，是 TUG 社区认定的 TiDB 技术先驱者与技术领袖，享受极高的社区荣誉和权益。"
      />
        <div className={styles.header}>
          
          {/*<div className={styles.header_widget_line}>*/}
          {/*  <img src="images/mva/banner-line.svg" alt=""/>*/}
          {/*</div>*/}
          {/*<div className={styles.header_widget_1}>*/}
          {/*  <img src="images/mva/banner-widget-1.png" alt=""/>*/}
          {/*</div>*/}
          {/*<div className={styles.header_widget_2}>*/}
          {/*  <img src="images/mva/banner-widget-2.png" alt=""/>*/}
          {/*</div>*/}
          {/*<div className={styles.header_widget_3}>*/}
          {/*  <img src="images/mva/banner-widget-3.png" alt=""/>*/}
          {/*</div>*/}
          
          <Container className={styles.header_content}>
            <div className={styles.header_content_intro}>
              <div className={styles.header_content_intro_logo}>
                <img src="images/mva/mva-logo.svg" alt=""/>
              </div>
              <div className={styles.header_content_intro_text}>
                <div className={styles.header_content_intro_text_title}>
                  TUG 至高荣誉：MVA/MOA
                </div>
                <div className={styles.header_content_intro_text_summary}>
                  TUG MVA （Most Valuable Advocate）、TUG  MOA（Most Outstanding  Advocate）是在TUG 社区里涌现的技术布道师，他们在 TiDB、前沿数据库与大数据技术、热门技术话题等领域，通过分享高质量 Talk、编写高质量技术文章等方式，与社区成员进行同侪学习。是 TUG 社区认定的 TiDB 技术先驱与技术领袖，享受最高的社区荣誉和权益。
                </div>
              </div>
            </div>
            <div className={styles.header_content_cup}>
              <img src="images/mva/header-cup.png" alt=""/>
            </div>
          </Container>
        </div>
      
      <Container>
        <div className={styles.MVAs}>
          <div className={styles.MVAs_title}>
            {year} 年度 TUG MVA
          </div>
          <YearSwitch
            value={year}
            items={MVAs.map(item => ({name: item.year, value: item.year}))}
            onClick={setYear}
          />
          <div className={styles.MVAs_list}>
            <Row justify={'center'} gutter={[16, 64
            ]}>
              {MVAs.filter(subMva => subMva.year === year)[0].data.map((mva, index) =>
                <Col key={index} xs={12} sm={12} md={8} lg={6}>
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
                TiDB 作为全球顶级开源项目，受到很多用户青睐，也被越来越多的技术工程师所认可，其中有很多人开始自发地输出 TiDB 使用案例、最佳实践、原理解读、数据架构等内容。这些内容源自社区，也回馈于社区，促进了 TiDB 技术的传播。为了鼓励更多用户输出优质技术内容，感谢他们在 TUG 社区内所做出的贡献，TUG 社区发起了“ MVA计划 ”， 是社区颁发给技术专家的一项荣誉认证。
              </p>
              <p>
                TUG MVA （Most Valuable Advocate）、TUG  MOA（Most Outstanding  Advocate）是在TUG 社区里涌现的技术布道师，他们在 TiDB、前沿数据库与大数据技术、热门技术话题等领域，通过分享高质量 Talk、编写高质量技术文章等方式，与社区成员进行同侪学习。是 TUG 社区认定的 TiDB 技术先驱与技术领袖，享受最高的社区荣誉和权益。
              </p>
            </div>
          </div>
        </div>
        
        <div className={styles.welfare}>
          <div className={styles.welfare_header}>
            <div className={styles.welfare_header_title}>
              专属福利
            </div>
            <div className={styles.welfare_header_link}>
              <MyLink href="https://asktug.com/t/topic/633" className={styles.welfare_header_link_button}>
                <ArrowRightOutlined /> 查看全部
              </MyLink>
            </div>
          </div>
          <div className={styles.welfare_list}>
            <Row justify={'space-around'} gutter={[48, 48]}>
              {welfare.map((item, index) => <Col key={index}><WelfareItem {...item}/></Col> )}
            </Row>
          </div>
        </div>
      </Container>
      
      <div className={styles.become}>
        <div className={styles.become_widget_line}>
          <img src="images/mva/become-line.svg" alt=""/>
        </div>
        <Container className={styles.become_content}>
          <div className={styles.become_content_title}>
            成为 MVA
          </div>
          <div className={styles.become_content_summary}>
            在一年内（自然年）为 TUG 社区贡献优质技术内容的数量 3 个及以上，即可当选 TUG 年度  MVA。
            <br/>
            在一年内（自然年）为 TUG 社区贡献优质技术内容达到 10 个及以上，即可当选 TUG 年度  MOA。
          </div>
          <div className={styles.become_content_list}>
            <Row justify={'space-around'} gutter={[48, 48]}>
              {become.map((item, index) => <Col key={index}><BecomeMVA {...item}/></Col> )}
            </Row>
          </div>
        </Container>
      </div>
      
    </div>
  )
}

