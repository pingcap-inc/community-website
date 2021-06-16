import styled from 'styled-components';
import { colors, mixins } from '@tidb-community/ui';

export const Container = styled.div`
  ${mixins.responsive()};
  padding-top: 2rem;
`;

export const Main = styled.div`
  flex: 1;
  background-color: ${colors.M2};
  padding-bottom: 6em;
`;

export const GuidButton = styled.div`
  ${mixins.flexCenter()};
  position: fixed;
  bottom: 48px;
  right: 32px;
  background: ${colors.M1};
  padding: 12px;
  border-radius: 50%;
  box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d;
  cursor: pointer;

  svg {
    ${mixins.size('20px')};
    color: ${colors.F2};
  }

  &:hover {
    svg {
      color: ${colors.B1};
    }
  }
`;
