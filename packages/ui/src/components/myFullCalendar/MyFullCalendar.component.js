import React from 'react';
import { Popover } from 'antd';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import allLocales from '@fullcalendar/core/locales-all';
import FullCalendarCellCard from './FullCalendarCellCard.component';
import { getColorByType, processData } from './utils';

import styles from './styles.module.scss';

const MyFullCalendar = ({ data }) => {
  const renderEventContent = (eventInfo) => (
    <Popover content={<FullCalendarCellCard data={eventInfo.event._def.extendedProps} />} title="" trigger="click">
      <div className={styles.event}>
        <div>{eventInfo.event.title}</div>
      </div>
    </Popover>
  );

  // 4D is hex(30% * 255)
  const transparency = '4D';
  const eventMouseEnter = ({ event }) => {
    const { extendedProps } = event;
    event.setProp('backgroundColor', getColorByType(extendedProps.category));
  };
  const eventMouseLeave = ({ event }) => {
    const { extendedProps } = event;
    event.setProp('backgroundColor', getColorByType(extendedProps.category) + transparency);
  };

  const renderDayCellContent = ({ date }) => date.getUTCDate();

  data = processData(data);
  return (
    <FullCalendar
      locales={allLocales}
      locale="zh" // the initial locale
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      events={data}
      // dateClick={handleDateClick}
      eventContent={renderEventContent}
      dayCellContent={renderDayCellContent}
      headerToolbar={{
        start: 'title', // will normally be on the left. if RTL, will be on the right
        center: '',
        end: 'prev,next', // will normally be on the right. if RTL, will be on the left
      }}
      contentHeight="auto"
      eventMouseEnter={eventMouseEnter}
      eventMouseLeave={eventMouseLeave}
    />
  );
};

export default MyFullCalendar;
