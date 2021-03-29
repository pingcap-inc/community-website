import * as polished from 'polished';
import styled from 'styled-components';
import { Col } from 'antd';
import { colors, mixins } from '@pingcap/pingcap-ui';

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

export const JobCard = styled.div`
  ${mixins.typography('p2')};
  ${mixins.flexVerticalCenter()};
  border: 1px solid ${colors.T2};
  padding: 1rem;
`;

export const JobImg = styled.div`
  ${mixins.flexCenter()};
  margin-right: 1rem;
  width: 70px;
`;

export const JobContent = styled.div`
  flex: 1;
`;

export const JobPosition = styled.div`
  ${mixins.lineClamp(1)}
`;

export const JobLocation = styled(JobPosition)``;
