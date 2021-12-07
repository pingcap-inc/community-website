import { css } from 'styled-components';

const linkColor = '#73061c';

export default css`
  a {
    color: ${linkColor};
    &:hover {
      color: ${linkColor};
      text-decoration: underline;
    }
  }
`;
