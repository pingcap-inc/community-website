import styled from 'styled-components';
import { colors } from '@tidb-community/ui';

import { Section } from '~/pages/home/index.styled';

export const Container = styled(Section)`
  && {
    color: ${colors.M1};
    background: ${colors.B4};
  }
`;
