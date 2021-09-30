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
const linkUrl = 'https://pingcap.com/static/02ed8b4d2ef3ea47f8e05629dc66399d/tidb-sql-at-scale.svg';

antdCalendar.args = {
  data: [
    {
      title: 'title-1',
      type: 'error',
      location: 'earth',
      image: imageUrl,
      link: linkUrl,
      category: 'category',
      startDate: '2021-09-09',
      endDate: '2021-09-29',
    },
    {
      title: 'title-2',
      type: 'error',
      location: 'earth',
      image: imageUrl,
      link: linkUrl,
      category: 'category',
      startDate: '2021-09-09',
      endDate: '2021-09-29',
    },
    {
      title: 'title-3',
      type: 'error',
      location: 'earth',
      image: imageUrl,
      link: linkUrl,
      category: 'category',
      startDate: '2021-09-09',
      endDate: '2021-09-19',
    },
    {
      title: 'title-666',
      type: 'error',
      location: 'earth',
      image: imageUrl,
      link: linkUrl,
      category: 'category',
      startDate: '2021-08-09',
      endDate: '2021-08-19',
    },
  ],
};
