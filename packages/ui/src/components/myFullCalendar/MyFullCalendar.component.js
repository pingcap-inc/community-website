import React from 'react';
import { Popover } from 'antd';
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

import AntdCalendarCellCard from './FullCalendarCellCard.component'
import { getColorByType } from './utils';

const MyFullCalendar = ({ events }) => {
  const handleDateClick = (date) => {
    alert(date);
  }
  function renderEventContent(eventInfo) {
    const data = eventInfo.event._def.extendedProps;
    console.log('data', data);
    return (
      // <>{eventInfo.event.title}</>
      <Popover content={<AntdCalendarCellCard data={data} />} title="" trigger="click">
        <div>{eventInfo.event.title}</div>
      </Popover>
    )
  }
  events = events.map(value => ({...value,
    _title: value.title,
    start: value.startDate,
    end: value.endDate,
    color: getColorByType(value.type),
  }))
  return (
    <FullCalendar
      plugins={[ dayGridPlugin ]}
      initialView="dayGridMonth"
      // weekends={false}
      events={events}
      dateClick={handleDateClick}
      eventContent={renderEventContent}
    />
  );
};

export default MyFullCalendar;
