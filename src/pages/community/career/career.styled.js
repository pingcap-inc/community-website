import styled from 'styled-components';
import { mixins } from '@pingcap/pingcap-ui';

import { Header as ActivitiesHeader } from 'pages/community/activities';

import { Container as ActivitiesContainer } from 'pages/community/activities/activities.styled';

export const Container = styled(ActivitiesContainer)`
  padding-bottom: 0;
`;

export const Header = styled(ActivitiesHeader)`
  margin-bottom: 2rem;
`;

export const Title = styled.h3`
  ${mixins.typography('h2')};
  margin-bottom: 2rem;
`;

export const CertSection = styled.div`
  margin-bottom: 4rem;
`;

export const JobSection = styled.div``;
