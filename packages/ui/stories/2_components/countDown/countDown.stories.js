import React, { useRef } from 'react';
import { Button } from 'antd';
import { CountDown } from '@tidb-community/ui';

import { getTitle } from '../utils';

export default {
  title: getTitle('CountDown'),
  component: CountDown,
};

const Template = ({ total, interval, onFinished }) => {
  const ref = useRef();
  return (
    <>
      <CountDown counterRef={ref} total={total} interval={interval} onFinished={onFinished} />
      <br />
      <Button type="primary" size="small" onClick={() => ref.current.reset()}>
        Reset
      </Button>
    </>
  );
};

export const WithReset = Template.bind({});

WithReset.args = {
  total: 10000,
  interval: 1000,
  onFinished: () => alert('count down finished!'),
};
