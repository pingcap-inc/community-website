import styled from 'styled-components';
import { mixins } from '@tidb-community/ui';
import Anchor from '~/components/Anchor';

export const ListItem = styled.div`
  margin-bottom: 2rem;
  ${mixins.boxShadow()};
  background-color: #fff;
  border-radius: 4px;
  padding: 2rem;
`;

export const Title = styled(Anchor)`
  display: flex;
  ${mixins.typography('h2')};
`;

export const TitleText = styled.div`
  margin-left: 0.5rem;
`;

export const Summary = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  word-wrap: break-word;
`;

export const Metadata = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const MetadataStart = styled.div``;

export const MetadataEnd = styled.div``;
