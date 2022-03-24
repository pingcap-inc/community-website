import styled, { css } from 'styled-components';
import { colors, mixins, Styled } from '@tidb-community/ui';

import Anchor from '~/components/Anchor';

const { ModuleTitle, Section, Text } = Styled;

export { ModuleTitle, Section, Text };

export const Container = styled(Section)``;

export const Link = styled(Anchor)`
  font-size: revert;
  text-decoration: underline;
  &:hover {
    color: ${colors.B1};
    text-decoration: underline;
  }
`;

export const StepBox = styled.div`
  margin-top: 2.5rem;
  ${(props) =>
    props.isSmallScreen &&
    css`
      margin-bottom: 2rem;
    `}
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
  margin-top: 2rem;
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

export const EngageTitle = styled(ModuleTitle)`
  line-height: 1.7;
  font-size: 16px;
`;
