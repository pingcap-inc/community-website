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
      title: '2020 ⿊客⻢拉松 2020 ⿊客⻢拉松 2020 ⿊客⻢拉松 2020 ⿊1',
      type: 'activity',
      location: '北京',
      image: imageUrl,
      link: linkUrl,
      category: '线上',
      startDate: '2021-10-10',
      endDate: '2021-10-29',
    },
    {
      title: '2020 ⿊客⻢拉松 2020 ⿊客⻢拉松 2020 ⿊客⻢拉松 2020 ⿊2',
      type: 'meetup',
      location: '北京',
      image: imageUrl,
      link: linkUrl,
      category: '线上',
      startDate: '2021-10-10',
      endDate: '2021-10-29',
    },
    {
      title: '2020 ⿊客⻢拉松 2020 ⿊客⻢拉松 2020 ⿊客⻢拉松 2020 ⿊3',
      type: 'error',
      location: '北京',
      image: imageUrl,
      link: linkUrl,
      category: '线上',
      startDate: '2021-10-10',
      endDate: '2021-10-19',
    },
    {
      title: '2020 ⿊客⻢拉松 2020 ⿊客⻢拉松 2020 ⿊客⻢拉松 2020 ⿊666',
      type: 'error',
      location: '北京',
      image: imageUrl,
      link: linkUrl,
      category: '线上',
      startDate: '2021-08-10',
      endDate: '2021-08-19',
    },
  ],
};
