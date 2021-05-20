import React, { useRef } from 'react';
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
      <button onClick={() => ref.current.reset()}>reset</button>
    </>
  );
};

export const SearchCompany = Template.bind({});

SearchCompany.args = {
  total: 10000,
  interval: 1000,
  onFinished: () => alert('count down finished!'),
};
