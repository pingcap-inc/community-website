import React from 'react';
import { Popover } from 'antd';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import AntdCalendarCellCard from './FullCalendarCellCard.component';
import { getColorByType } from './utils';

const MyFullCalendar = ({ data }) => {
  const handleDateClick = (date) => {
    alert(date);
  };

  function renderEventContent(eventInfo) {
    const cardData = eventInfo.event._def.extendedProps;
    return (
      <Popover content={<AntdCalendarCellCard data={cardData} />} title="" trigger="click">
        <div>{eventInfo.event.title}</div>
      </Popover>
    );
  }

  data = data?.map((value) => ({
    ...value,
    _title: value.title,
    start: value.startDate,
    end: value.endDate,
    color: getColorByType(value.type),
  }));
  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      // weekends={false}
      events={data}
      dateClick={handleDateClick}
      eventContent={renderEventContent}
    />
  );
};

export default MyFullCalendar;
