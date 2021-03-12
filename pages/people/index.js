import People from './People.component';
import tugConfig from '../../tug.config';
import tugData from '../../data/tug_data.js';

const { joinTUGLink } = tugConfig;

export async function getStaticProps(context) {
  const { tmc, leader } = tugData;

  const howToBecome = [
    { index: 1, iconUrl: 'images/people/how-to-become-1.svg', title: '填写信息', link: joinTUGLink },
    { index: 2, iconUrl: 'images/people/how-to-become-2.svg', title: '信息审核' },
    { index: 3, iconUrl: 'images/people/how-to-become-3.svg', title: '邀请加入' },
  ];

  return {
    props: { howToBecome, tmc, leader },
  };
}

export default People;
