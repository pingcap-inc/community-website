import styled from 'styled-components';
import { Styled, mixins } from '@tidb-community/ui';

const { Content, Section, Title } = Styled;

export { Content, Title };

export const Container = styled(Section)`
  ${mixins.responsive()};
`;
