import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import * as R from 'ramda';

import * as Styled from './countDown.styled';

const defaultFormatter = (ms) => {
  return Math.round(ms / 1000);
};

const CountDown = ({ total, counterRef, onFinished, formatter = defaultFormatter, interval = 1000, children }) => {
  const [time, setTime] = useState();
  const [resetVersion, setResetVersion] = useState(0);

  if (counterRef && 'current' in counterRef) {
    counterRef.current = {
      reset: () => {
        setResetVersion(resetVersion + 1);
      },
    };
  }

  useEffect(() => {
    setTime(total);
    const handle = setInterval(() => {
      setTime((time) => {
        if (time >= interval) {
          return time - interval;
        } else {
          clearInterval(handle);
          onFinished && onFinished();
          return 0;
        }
      });
    }, interval);
    return () => {
      clearInterval(handle);
    };
  }, [total, interval, resetVersion, onFinished]);

  return R.is(Function, children) ? (
    children(formatter(time))
  ) : (
    <Styled.CountDownText>{formatter(time)}</Styled.CountDownText>
  );
};

CountDown.propTypes = {
  total: PropTypes.number.isRequired,
  counterRef: PropTypes.object,
  onFinished: PropTypes.func,
  formatter: PropTypes.func,
  interval: PropTypes.number,
  children: PropTypes.func,
};

export default CountDown;
