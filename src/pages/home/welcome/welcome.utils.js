export const formatNumber = (num) => {
  let maximumSignificantDigits;
  const len = (num + '').length;

  if (len === 4) {
    maximumSignificantDigits = 2;
  } else if (len > 4) {
    maximumSignificantDigits = len - 3;
  }

  return `${new Intl.NumberFormat('en-US', {
    maximumSignificantDigits,
  }).format(num)}${maximumSignificantDigits ? '+' : ''}`;
};
