import React from 'react';

import { Calendar } from 'antd';
import AntdCalendarHeader from './AntdCalendarHeader.component';
import AntdCalendarCell from './AntdCalendarCell.component';

const AntdCalendar = ({ data }) => {
  const onSelect = (date) => {
    // eslint-disable-next-line no-console
    console.log('date', date);
  };

  return (
    <Calendar
      onSelect={onSelect}
      headerRender={AntdCalendarHeader}
      dateCellRender={(value) => <AntdCalendarCell date={value} data={data} />}
    />
  );
};

export default AntdCalendar;
