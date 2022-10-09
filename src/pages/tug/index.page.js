import React from 'react';
import { v4 as uuidV4 } from 'uuid';
import { Button } from 'antd';
import { useRouter } from 'next/router';

import { getI18nProps } from '~/utils/i18n.utils';
import { cdn, link as linkUtils } from '~/utils';
import Container from '~/components/Container/Container';
import HowToBecome from '~/components/people/HowToBecome/HowToBecome';
import MyLink from '~/components/MyLink';
import TMCItem from '~/components/people/TMCItem/TMCItem';
import styles from './index.module.scss';
import tugData from './tug.data';
import { CoreLayout } from '~/layouts';
import { CommunityHead } from '~/components';
import HomeMVA from '~/components/home/HomeMVA/HomeMVA';

const getImageUrl = (filename) => cdn.getImageUrl('/images/people/' + filename);

const title = 'TiDB User Group 会员';
const description =
  'TUG(TiDB User Group) 为 TiDB 用户提供了一个开放的交流平台。成员们积极在社区中贡献了大量优质的内容，既扩大了 TUG 的影响力，也从中收获很多价值，形成了“来自社区，回馈社区” 的良性循环。';

const applyUrl = '/tug/apply#form';

const tugOrganizationChartTitle = 'TUG 组织架构';
const tugOrganizationChartUrl = getImageUrl(`tug-organization-chart.svg`);

const howToBecomeTitle = '如何成为 TUG 会员';
const howToBecome = [
  { index: 1, iconUrl: getImageUrl('how-to-become-1.svg'), title: '填写信息', link: applyUrl },
  { index: 2, iconUrl: getImageUrl('how-to-become-2.svg'), title: '信息审核' },
  { index: 3, iconUrl: getImageUrl('how-to-become-3.svg'), title: '邀请加入' },
];

const progressTitle = 'TUG 会员进阶路线';
const progressSummary =
  'TUG 核心成员包括 TUG 管理成员、Active Ambassador、Ambassador。' +
  '积极活跃的 TUG 成员可被提名为 Ambassador，Ambassador 在社区贡献优质内容可升级为 “Active Ambassador” 之后有两种不同的发展方向。';
const progressStep1 =
  '管理线：上升通道为 TUG 管理成员，包括 Team Co-Leader、Team Leader、TMC 成员。TUG 管理成员任期为一年。' +
  'TMC 成员、Team Leader 每年通过换届选举产生，Team Co-Leader 在换届选举后由 TeamLeader 进行委任。';
const progressStep2 =
  '专业线：上升通道为 TiDB MVA (Most Valuable Advocate)，或者更高级别的 TiDB MOA (Most OutstandingAdvocate)。';

const peopleMemberTitle = 'TMC 成员';
const peopleMemberSummary = 'TMC 是 TUG 最高决策组织，负责统筹 TUG 发展与规划、重要人事任免、全年大事安排等';
const peopleLeaderTitle = 'LEADER';
const peopleLeaderSummary = 'TUG 各区域负责人，负责统筹本区域内TUG 的发展以及活动规划';
const peopleAdviserTitle = '顾问团';
const peopleAdviserSummary = 'TUG 特邀顾问，拥有诸多技术经验，负责帮助解答 TUG 中技术问题';

export const getStaticProps = async (ctx) => {
  const i18nProps = await getI18nProps(['common'])(ctx);

  return {
    props: {
      ...i18nProps,
    },
  };
};

const Tug = () => {
  const { tmc, leader, adviser } = tugData;

  const router = useRouter();

  const onClick = (link) => (e) => {
    e.preventDefault();
    linkUtils.handleRedirect(router, link);
  };

  const howToBecomeDom = [];

  howToBecome.forEach((item, index) => {
    howToBecomeDom.push(<HowToBecome key={uuidV4()} {...item} />);
    if (index !== howToBecome.length - 1) {
      howToBecomeDom.push(
        <div key={uuidV4()} className={styles.how_to_become_list_arrow}>
          <img src={getImageUrl('arrow.svg')} alt=">" />
        </div>
      );
    }
  });

  return (
    <>
      <CommunityHead title={title} description={description} />

      <CoreLayout>
        <div className={styles.header}>
          <Container>
            <div className={styles.header_content}>
              <div className={styles.header_content_left}>
                <div className={styles.header_content_left_title}>TUG 会员</div>
                <div className={styles.header_content_left_summary}>{description}</div>
                <div className={styles.header_content_left_summary}>
                  <Button type="primary" onClick={onClick(applyUrl)}>
                    加入 TUG
                  </Button>
                </div>
              </div>
              <div className={styles.header_content_right}>
                <img width={400} src={getImageUrl('header-right.png')} alt="" />
              </div>
            </div>
          </Container>
        </div>

        <Container className={styles.organization_chart}>
          <div className={styles.organization_chart_content}>
            <div className={styles.organization_chart_content_title}>{tugOrganizationChartTitle}</div>
            <div className={styles.organization_chart_content_image}>
              <MyLink href={tugOrganizationChartUrl}>
                <img src={tugOrganizationChartUrl} alt={tugOrganizationChartTitle} />
              </MyLink>
            </div>
          </div>
        </Container>

        <div className={styles.how_to_become_wrapper}>
          <Container className={styles.how_to_become}>
            <div className={styles.how_to_become_title}>{howToBecomeTitle}</div>
            <div className={styles.how_to_become_list}>{howToBecomeDom}</div>
          </Container>
        </div>

        <Container className={styles.progress}>
          <div className={styles.progress_left}>
            <div className={styles.progress_left_header}>
              <div className={styles.progress_left_header_icon}>
                <img src={getImageUrl('progress-header-left.svg')} alt="" />
              </div>
              <div className={styles.progress_left_header_text}>
                <div className={styles.progress_left_header_text_title}>{progressTitle}</div>
                <div className={styles.progress_left_header_text_summary}>{progressSummary}</div>
              </div>
            </div>
            <div className={styles.progress_left_step}>
              <div className={styles.progress_left_step_1}>
                <div className={styles.progress_left_step_1_header}>
                  <div className={styles.progress_left_step_1_header_index}>1</div>
                  <div className={styles.progress_left_step_1_header_widget}>
                    <img src={getImageUrl('progress-widget-1.svg')} alt="" />
                  </div>
                </div>
                <div className={styles.progress_left_step_1_text}>{progressStep1}</div>
              </div>
              <div className={styles.progress_left_step_2}>
                <div className={styles.progress_left_step_2_header}>
                  <div className={styles.progress_left_step_2_header_index}>2</div>
                  <div className={styles.progress_left_step_2_header_widget}>
                    <img src={getImageUrl('progress-widget-2.svg')} alt="" />
                  </div>
                </div>
                <div className={styles.progress_left_step_2_text}>{progressStep2}</div>
              </div>
            </div>
          </div>
          <div className={styles.progress_right}>
            <div className={styles.progress_right_icon}>
              <img src={getImageUrl('progress-header-right.svg')} alt="" />
            </div>
            <div className={styles.progress_right_chart}>
              <img src={getImageUrl('progress-chart.svg')} alt="" />
            </div>
          </div>
        </Container>

        <div className={styles.people}>
          <Container className={styles.people_content}>
            <div className={styles.people_content_title}>{peopleMemberTitle}</div>
            <div className={styles.people_content_summary}>{peopleMemberSummary}</div>
            <div className={styles.people_content_list}>
              {tmc.map((item, index) => (
                <TMCItem key={index} {...item} />
              ))}
            </div>

            <div className={styles.people_content_split} />
            <div className={styles.people_content_title}>{peopleLeaderTitle}</div>
            <div className={styles.people_content_summary}>{peopleLeaderSummary}</div>
            <div className={styles.people_content_list}>
              {leader.map((item, index) => (
                <TMCItem key={index} {...item} />
              ))}
            </div>

            <div className={styles.people_content_split} />
            <div className={styles.people_content_title}>{peopleAdviserTitle}</div>
            <div className={styles.people_content_summary}>{peopleAdviserSummary}</div>
            <div className={styles.people_content_list}>
              {adviser.map((item, index) => (
                <TMCItem key={index} {...item} />
              ))}
            </div>
          </Container>
        </div>

        <HomeMVA />
      </CoreLayout>
    </>
  );
};

export default Tug;
