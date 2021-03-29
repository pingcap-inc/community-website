import styled from 'styled-components';
import { Col } from 'antd';
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

export const CertCol = styled(Col).attrs({
  xs: 24,
  md: 12
})`
  cursor: pointer;
`;

export const JobSection = styled.div``;
