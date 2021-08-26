import styled from 'styled-components';
import { colors } from '@tidb-community/ui';

import { Section } from '~/pages/home/index.styled';
import { ModuleTitle } from '~/pages/home/index.styled';

export const Container = styled(Section)`
  && {
    background: ${colors.M2};
  }
`;

export const Text = styled.div`
  font-size: 16px;
  font-weight: lighter;
`;

export const StepBox = styled.div`
  margin-top: 2.5rem;
`;

export const StepHeader = styled.div`
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 1rem;
`;

export const StepIcon = styled.img`
  height: 38px;
  width: 38px;
`;

export const EngageCallBox = styled.div`
  margin-top: 3rem;
`;

export const IssueList = styled.img`
  max-width: 100%;
  border-radius: 6px;
  margin-bottom: 2.5rem;
  background-color: black;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
`;

export const ForkTitle = styled(ModuleTitle)`
  font-weight: bold !important;
`;
