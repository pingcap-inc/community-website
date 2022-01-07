import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export function getRelativeDatetime(datetime: Date) {
  return dayjs().to(dayjs(datetime));
}
