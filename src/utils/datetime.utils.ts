import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);
// TODO: Need to sync with NextJS locale value
dayjs.locale('zh');

export function getRelativeDatetime(datetime: Date) {
  return dayjs().to(dayjs(datetime));
}
