import MostValuableAdvocate from './MostValuableAdvocate.component';
import tugData from '../../data/tug_data.js';

export async function getStaticProps() {
  const { mva2020, mva2019 } = tugData;

  const MVAs = [
    {
      year: 2020,
      data: mva2020,
    },
    {
      year: 2019,
      data: mva2019,
    },
  ];

  const welfare = [
    { iconUrl: 'images/mva/welfare-icon-1.svg', name: '社区荣誉' },
    { iconUrl: 'images/mva/welfare-icon-2.svg', name: '会员定制礼包' },
    { iconUrl: 'images/mva/welfare-icon-3.svg', name: 'TiDB 专家养成计划' },
    { iconUrl: 'images/mva/welfare-icon-4.svg', name: '职业发展' },
    { iconUrl: 'images/mva/welfare-icon-5.svg', name: '人脉拓展' },
    { iconUrl: 'images/mva/welfare-icon-6.svg', name: '个人影响力塑造' },
  ];

  const become = [
    { iconUrl: 'images/mva/become-icon-1.svg', title: '文章', summary: '1500+ 字，结构完整，能清楚阐述技术点' },
    { iconUrl: 'images/mva/become-icon-2.svg', title: 'TALK', summary: '面向 20+ 受众分享讲解 TiDB 及 TUG 相关内容' },
    { iconUrl: 'images/mva/become-icon-3.svg', title: '直播', summary: '作为直播嘉宾分享讲解 TiDB 及 TUG 相关内容' },
  ];

  return {
    props: { MVAs, welfare, become },
  };
}

export default MostValuableAdvocate;
