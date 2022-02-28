import styled from 'styled-components';
import { mixins, colors } from '@tidb-community/ui';
import Anchor from '~/components/Anchor';

export const ListItem = styled.div`
  margin-bottom: 0.75rem;
  ${mixins.boxShadow()};
  background-color: #fff;
  border-radius: 4px;
  padding: 2rem;
`;

export const Title = styled.div`
  display: flex;
`;

export const TitleText = styled(Anchor)`
  ${mixins.typography('h2')};
`;

export const TitleBadge = styled.div`
  margin-left: 0.5rem;
`;

export const Summary = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  word-wrap: break-word;
  .emoji {
    height: 1.5rem;
  }
  a {
    color: ${colors.B1};
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Metadata = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const MetadataStart = styled.div``;

export const MetadataEnd = styled.div``;
