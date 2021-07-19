import styled from 'styled-components';
import PropTypes from 'prop-types';

import * as colors from '../../colors';

export const Link = styled.a.attrs({ target: '_blank', rel: 'noreferrer' })`
  &,
  &:hover {
    color: ${colors.B1};
  }
`;

Link.propTypes = {
  href: PropTypes.string.isRequired,
};

export default Link;
