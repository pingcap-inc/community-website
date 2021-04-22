// splitElements([a, b, c], () => d) generates [a, d, b, d, c]
export const wrapElements = ({elements, wrapElement}) => {
  if (typeof wrapElement === 'function') {
    const len = elements.length
    elements = elements.map((el, i) => wrapElement(el, i, len));
  }
  return elements;
};
