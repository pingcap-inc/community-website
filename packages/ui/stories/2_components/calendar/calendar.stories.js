import React, { useRef } from 'react';
import { Button } from 'antd';
import { Calendar } from '@tidb-community/ui';

import { getTitle } from '../utils';

export default {
  title: getTitle('Calendar'),
  component: Calendar,
};

const Template = ({ ...args }) => {
  const ref = useRef();
  return (
    <>
      <Calendar {...args} />
      <br />
      <Button type="primary" size="small" onClick={() => ref.current.reset()}>
        Reset
      </Button>
    </>
  );
};

export const WithReset = Template.bind({});

WithReset.args = {
  data: [
    {
      title: 'title-1',
      date: '2021-09-29',
    },
    {
      title: 'title-2',
      date: '2021-09-29',
    },
    {
      title: 'title-3',
      date: '2021-09-19',
    },
    {
      title: 'title-3',
      date: '2021-08-19',
    },
  ],
};
