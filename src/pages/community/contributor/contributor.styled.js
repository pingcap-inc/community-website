import styled from 'styled-components';
import { colors, mixins } from '@pingcap/pingcap-ui';

import { Header } from 'pages/community/activities';

export const Container = styled.div`
  ${mixins.responsive()};
  padding: 5rem 0;
`;

export const Title = styled(Header)`
  margin-bottom: 3rem;
`;

export const Card = styled.div`
  ${mixins.boxShadow()};
  border: 1px solid ${colors.T2};
  height: 400px;
`;
