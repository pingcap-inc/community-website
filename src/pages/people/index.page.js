import Image from 'next/image';
import React from 'react';
import { v4 as uuidV4 } from 'uuid';

import Container from 'components/Container/Container';
import HowToBecome from 'components/people/HowToBecome/HowToBecome';
import MyLink from 'components/MyLink';
import TMCItem from 'components/people/TMCItem/TMCItem';
import styles from './people.module.scss';
import tugData from 'data/tug_data.js';
import { CoreLayout } from 'layouts';
import { TugHead } from 'components/head';
import { joinTUGLink } from 'src/constants';

export const getStaticProps = () => {
  const { tmc, leader } = tugData;

  const howToBecome = [
    { index: 1, iconUrl: 'images/people/how-to-become-1.svg', title: '填写信息', link: joinTUGLink },
    { index: 2, iconUrl: 'images/people/how-to-become-2.svg', title: '信息审核' },
    { index: 3, iconUrl: 'images/people/how-to-become-3.svg', title: '邀请加入' },
  ];

  return {
    props: { howToBecome, tmc, leader },
  };
};

const People = ({ howToBecome, tmc, leader }) => {
  const howToBecomeDom = [];

  howToBecome.forEach((item, index) => {
    howToBecomeDom.push(<HowToBecome key={uuidV4()} {...item} />);
    if (index !== howToBecome.length - 1) {
      howToBecomeDom.push(
        <div key={uuidV4()} className={styles.how_to_become_list_arrow}>
          <img src="images/people/arrow.svg" alt=">" />
        </div>
      );
    }
  });

  return (
    <>
      <TugHead
        title="会员"
        description="TUG 为 TiDB 用户提供了一个开放的交流平台。成员们积极在社区中贡献了大量优质的内容，既扩大了 TUG 的影响力，也从中收获很多价值，形成了“来自社区，回馈社区” 的良性循环。"
      />

      <CoreLayout hasMargin={false}>
        <div className={styles.header}>
          <Container className={styles.header_content}>
            <div className={styles.header_content_left}>
              <div className={styles.header_content_left_title}>TUG 会员</div>
              <div className={styles.header_content_left_summary}>
                TUG 为 TiDB 用户提供了一个开放的交流平台。成员们积极在社区中贡献了大量优质的内容，既扩大了 TUG
                的影响力，也从中收获很多价值，形成了“来自社区，回馈社区” 的良性循环。
              </div>
            </div>
            <div className={styles.header_content_right}>
              <img src="images/people/header-right.svg" alt="" />
            </div>
          </Container>
        </div>

        <Container className={styles.organization_chart}>
          <div className={styles.organization_chart_content}>
            <div className={styles.organization_chart_content_title}>TUG 组织架构</div>
            <div className={styles.organization_chart_content_image}>
              <MyLink href={'/images/people/tug-organization-chart.svg'}>
                <Image
                  src="/images/people/tug-organization-chart.svg"
                  alt="tug-company-chart"
                  width={1200}
                  height={520}
                />
              </MyLink>
            </div>
          </div>
        </Container>

        <div className={styles.how_to_become_wrapper}>
          <Container className={styles.how_to_become}>
            <div className={styles.how_to_become_title}>如何成为 TUG 会员</div>
            <div className={styles.how_to_become_list}>{howToBecomeDom}</div>
          </Container>
        </div>

        <Container className={styles.progress}>
          <div className={styles.progress_left}>
            <div className={styles.progress_left_header}>
              <div className={styles.progress_left_header_icon}>
                <img src="images/people/progress-header-left.svg" alt="" />
              </div>
              <div className={styles.progress_left_header_text}>
                <div className={styles.progress_left_header_text_title}>TUG 会员进阶路线</div>
                <div className={styles.progress_left_header_text_summary}>
                  TUG 核心成员包括 TUG 管理成员、Active Ambassador、Ambassador。积极活跃的 TUG 成员可被提名为
                  Ambassador，Ambassador 在社区贡献优质内容可升级为 “Active Ambassador” 之后有两种不同的发展方向。
                </div>
              </div>
            </div>
            <div className={styles.progress_left_step}>
              <div className={styles.progress_left_step_1}>
                <div className={styles.progress_left_step_1_header}>
                  <div className={styles.progress_left_step_1_header_index}>1</div>
                  <div className={styles.progress_left_step_1_header_widget}>
                    <img src="images/people/progress-widget-1.svg" alt="" />
                  </div>
                </div>
                <div className={styles.progress_left_step_1_text}>
                  管理线：上升通道为 TUG 管理成员，包括 Team Co-Leader、Team Leader、TMC 成员。TUG
                  管理成员任期为一年。TMC 成员、Team Leader 每年通过换届选举产生，Team Co-Leader 在换届选举后由 Team
                  Leader 进行委任。
                </div>
              </div>
              <div className={styles.progress_left_step_2}>
                <div className={styles.progress_left_step_2_header}>
                  <div className={styles.progress_left_step_2_header_index}>2</div>
                  <div className={styles.progress_left_step_2_header_widget}>
                    <img src="images/people/progress-widget-2.svg" alt="" />
                  </div>
                </div>
                <div className={styles.progress_left_step_2_text}>
                  专业线：上升通道为 TiDB MVA (Most Valuable Advocate)，或者更高级别的 TiDB MOA (Most Outstanding
                  Advocate)。
                </div>
              </div>
            </div>
          </div>
          <div className={styles.progress_right}>
            <div className={styles.progress_right_icon}>
              <img src="images/people/progress-header-right.svg" alt="" />
            </div>
            <div className={styles.progress_right_chart}>
              <img src="images/people/progress-chart.svg" alt="" />
            </div>
          </div>
        </Container>

        <div className={styles.people}>
          <Container className={styles.people_content}>
            <div className={styles.people_content_title}>TMC 成员</div>
            <div className={styles.people_content_summary}>
              TMC 是 TUG 最高决策组织，负责统筹 TUG 发展与规划、重要人事任免、全年大事安排等
            </div>
            <div className={styles.people_content_list}>
              {tmc.map((item, index) => (
                <TMCItem key={index} {...item} />
              ))}
            </div>
            <div className={styles.people_content_split} />
            <div className={styles.people_content_title}>LEADER</div>
            <div className={styles.people_content_summary}>
              TUG 各区域负责人，负责统筹本区域内TUG 的发展以及活动规划
            </div>
            <div className={styles.people_content_list}>
              {leader.map((item, index) => (
                <TMCItem key={index} {...item} />
              ))}
            </div>
          </Container>
        </div>
      </CoreLayout>
    </>
  );
};

export default People;
