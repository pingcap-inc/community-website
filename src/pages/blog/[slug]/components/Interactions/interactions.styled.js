import styled, { css } from 'styled-components';
import { colors, mixins } from '@tidb-community/ui';

export const Interactions = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  ${mixins.onDesktop(css`
    flex-direction: column;
  `)};
  ${mixins.onMobile(css`
    flex-direction: row;
  `)};
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  ${mixins.onDesktop(css`
    flex-direction: column;
    & > div:not(:last-child) {
      margin-bottom: 16px;
    }
  `)};
  ${mixins.onMobile(css`
    flex-direction: row;
    & > div:not(:last-child) {
      margin-right: 16px;
    }
  `)};
`;

export const Icon = styled.div``;

export const Count = styled.div`
  ${mixins.onMobile(css`
    margin-left: 8px;
  `)};
`;

export const Interaction = styled.div`
  display: flex;
  align-items: center;
  ${mixins.onDesktop(css`
    flex-direction: column;
    width: 36px;
  `)};
  ${mixins.onMobile(css`
    flex-direction: row;
    height: 36px;
  `)};

  color: ${colors.F2};
  opacity: 0.6;
  transition: opacity 0.25s ease, color 0.25s ease;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
    color: ${colors.B1};
  }

  .anticon > svg {
    width: 28px;
    height: 28px;
  }
`;

export const Divided = styled.div`
  ${mixins.onDesktop(css`
    width: 24px;
    height: 2px;
    margin: 24px auto;
  `)};
  ${mixins.onMobile(css`
    height: 24px;
    width: 2px;
    margin: 0 24px;
  `)};
  background-color: ${colors.C4};
`;
