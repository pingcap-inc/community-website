import styles from './styles.module.scss';
import moment from 'moment';

const typeToColorMap = {
  '开发者活动/竞赛': '#FF6D78',
  meetup: '#4FC172',
  其他活动: '#00AEEF',
};

export const getColorByType = (type) => typeToColorMap[type] ?? typeToColorMap['其他活动'];

const dateFormat = 'YYYY-MM-DD';
export const processData = (data) => {
  return data?.map((value) => {
    let className = '';
    switch (value.category) {
      case '开发者活动/竞赛':
        className = 'activity';
        break;
      case 'meetup':
        className = 'meetup';
        break;
      default:
        className = 'other';
    }
    const classNames = [styles[className], styles.event_container];
    return {
      ...value,
      start: value.startDate,
      end: moment(value.endDate, dateFormat).add(1, 'days').format(dateFormat),
      textColor: '#1e2b37',
      card: value,
      classNames,
    };
  }) ?? [];
}
