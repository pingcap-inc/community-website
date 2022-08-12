import styled from 'styled-components';
import { colors, mixins } from '@tidb-community/ui';

export const Label = styled.div`
  ${mixins.flexVerticalCenter()};

  a {
    font-size: 12px;
    margin-left: 1em;
    color: ${colors.C4};

    &:hover {
      color: ${colors.B1};
    }
  }
`;

export const Description = styled.div`
  margin-top: .5rem;
  color: ${colors.C4};
`;
