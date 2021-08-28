import styled, { css } from 'styled-components';
import { colors, mixins } from '@tidb-community/ui';

import { ModuleTitle, Section, Text } from '~/pages/home/index.styled';

export { Text };

export const Container = styled(Section)`
  && {
    background: ${colors.M2};
  }
`;

export const StepBox = styled.div`
  margin-top: 2.5rem;
`;

export const StepHeader = styled.div`
  font-size: 18px;
  margin-bottom: 1rem;
`;

const iconSize = '38px';

export const StepIconWrapper = styled.div`
  ${mixins.size(iconSize)}
`;

export const StepIcon = styled.img`
  height: ${iconSize};
`;

export const EngageCallBox = styled.div`
  margin-top: 3rem;

  ${(props) =>
    props.isSmallScreen &&
    css`
      margin-bottom: 2rem;
    `}
`;

export const IssueList = styled.img`
  max-width: 100%;
  border-radius: 6px;
  margin-bottom: 2.5rem;
  background-color: #181a24;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
`;

export const ForkTitle = styled(ModuleTitle)`
  font-weight: bold !important;
`;
