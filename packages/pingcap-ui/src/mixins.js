export const reset = () => `
  margin: 0;
  padding: 0;
`;

export const centerBlock = (width) => `
  display: block;
  margin-left: auto;
  margin-right: auto;
  ${width && 'width: ' + width};
`;

export const verticalLineMiddle = (height = 0) => `
  line-height: ${height};
  height: ${height};
`;

export const flexVerticalCenter = (type = 'block') => `
  display: ${type === 'inline' ? 'inline-flex' : 'flex'};
  align-items: center;
`;

export const flexCenter = (type = 'block') => `
  ${flexVerticalCenter(type)};
  justify-content: center;
`;

export const size = (width, height = width) => `
  width: ${width};
  height: ${height};
`;
