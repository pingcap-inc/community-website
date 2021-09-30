import React, { useState } from 'react';

import { Calendar } from 'antd';
import AntdCalendarHeader from './AntdCalendarHeader.component';
import AntdCalendarCell from './AntdCalendarCell.component';
import moment from 'moment';

const AntdCalendar = ({ data }) => {
  const onSelect = (date) => {
    // eslint-disable-next-line no-console
    console.log('date', date);
    return false;
  };

  const [value, setValue] = useState(moment());
  const handlePrev = () => {
    const newValue = moment(value).subtract(1, 'month');
    setValue(newValue);
  };
  const handleNext = () => {
    const newValue = moment(value).add(1, 'month');
    setValue(newValue);
  };
  const handleNow = () => {
    const newValue = moment();
    setValue(newValue);
  };

  return (
    <Calendar
      value={value}
      onSelect={onSelect}
      headerRender={({ value }) => (
        <AntdCalendarHeader value={value} handlePrev={handlePrev} handleNext={handleNext} handleNow={handleNow} />
      )}
      dateCellRender={(value) => <AntdCalendarCell date={value} data={data} />}
    />
  );
};

export default AntdCalendar;
