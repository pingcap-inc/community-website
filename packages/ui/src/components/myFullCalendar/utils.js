const typeToColorMap = {
  activity: '#FF6D78',
  meetup: '#4FC172',
  other: '#00AEEF',
};

export const getColorByType = (type) => {
  if (type in Object.keys(typeToColorMap)) return typeToColorMap[type];
  else return typeToColorMap.other;
};
