import React, { useRef } from 'react';
import { Button } from 'antd';
import { AntdCalendar } from '@tidb-community/ui';

import { getTitle } from '../utils';

export default {
  title: getTitle('AntdCalendar'),
  component: AntdCalendar,
};

const Template = ({ ...args }) => {
  const ref = useRef();
  return (
    <>
      <AntdCalendar {...args} />
      <br />
      <Button type="primary" size="small" onClick={() => ref.current.reset()}>
        Reset
      </Button>
    </>
  );
};

export const antdCalendar = Template.bind({});

const imageUrl =
  'https://tidb.io/_next/image?url=https%3A%2F%2Fimg3.pingcap.com%2Fuploads%2Fevent_hacking_camp_e10996e06f.svg&w=1920&q=75';
const linkUrl = 'https://tidb.io/';

antdCalendar.args = {
  data: [
    {
      title: '2020 ⿊客⻢拉松with这里是超级长的标题1',
      type: 'activity',
      location: '北京',
      image: imageUrl,
      link: linkUrl,
      category: '线上',
      startDate: '2021-10-10',
      endDate: '2021-10-20',
    },
    {
      title: '我也不知道我现在正在说一些什么东西啊2',
      type: 'meetup',
      location: '北京',
      image: imageUrl,
      link: linkUrl,
      category: '线上',
      startDate: '2021-10-10',
      endDate: '2021-10-11',
    },
    {
      title: 'are you OK ?标题3 by leijun at xiaomi 4i',
      type: 'error',
      location: '北京',
      image: imageUrl,
      link: linkUrl,
      category: '线上',
      startDate: '2021-10-10',
      endDate: '2021-10-13',
    },
    {
      title: '2020 ⿊客⻢拉松with这里是超级长的标题666',
      type: 'error',
      location: '北京',
      image: imageUrl,
      link: linkUrl,
      category: '线上',
      startDate: '2021-10-20',
      endDate: '2021-10-29',
    },
  ],
};
