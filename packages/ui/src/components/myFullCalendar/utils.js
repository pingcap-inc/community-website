const typeToColorMap = {
  '开发者活动/竞赛': '#FF6D78',
  meetup: '#4FC172',
  其他活动: '#00AEEF',
};

export const getColorByType = (type) => typeToColorMap[type] ?? typeToColorMap['其他活动'];
