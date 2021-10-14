import React from 'react';
import { Popover } from 'antd';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import FullCalendarCellCard from './FullCalendarCellCard.component';
import { getColorByType } from './utils';

const MyFullCalendar = ({ data }) => {
  const renderEventContent = (eventInfo) => (
    <Popover content={<FullCalendarCellCard data={eventInfo.event._def.extendedProps} />} title="" trigger="click">
      <div>{eventInfo.event.title}</div>
    </Popover>
  );

  data = data?.map((value) => ({
    ...value,
    start: value.startDate,
    end: value.endDate,
    color: getColorByType(value.category),
    card: value,
  }));
  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      events={data}
      // dateClick={handleDateClick}
      eventContent={renderEventContent}
      headerToolbar={{
        start: 'title', // will normally be on the left. if RTL, will be on the right
        center: '',
        end: 'prev,next', // will normally be on the right. if RTL, will be on the left
      }}
      contentHeight="auto"
    />
  );
};

export default MyFullCalendar;
