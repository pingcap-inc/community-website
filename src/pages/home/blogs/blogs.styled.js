import styled, { css } from 'styled-components';

import { Section } from '~/pages/home/index.styled';

export { Module } from '~/pages/home/forum/forum.styled';
export { ModuleTitle } from '~/pages/home/index.styled';
import { ModuleTitle } from '~/pages/home/index.styled';

export const Container = styled(Section)``;

export const Blogs = styled.div`
  margin-bottom: 1rem;
`;

export const CenterableModuleTitle = styled(ModuleTitle)`
  ${(props) =>
    props.isSmallScreen &&
    css`
      justify-content: center;
    `}
`;
