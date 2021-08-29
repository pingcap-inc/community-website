import styled from 'styled-components';
import { colors } from '@tidb-community/ui';

import { Section, ModuleTitle } from '~/pages/home/index.styled';

export { ModuleTitle };

export const Container = styled(Section)`
  && {
    background: ${colors.M2};
  }
`;

export const Module = styled.div`
  margin-bottom: 3rem;

  &:last-child {
    margin-bottom: 0;
  }
`;
