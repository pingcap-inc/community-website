import React from 'react';

import { Calendar as AntdCalendar } from 'antd';
import CalendarHeader from './CalendarHeader.component';
import CalendarCell from './CalendarCell.component';

const Calendar = ({ data }) => {
  const onSelect = (date) => {
    // eslint-disable-next-line no-console
    console.log('date', date);
  };

  return (
    <AntdCalendar
      onSelect={onSelect}
      headerRender={CalendarHeader}
      dateCellRender={(value) => <CalendarCell date={value} data={data} />}
    />
  );
};

export default Calendar;
