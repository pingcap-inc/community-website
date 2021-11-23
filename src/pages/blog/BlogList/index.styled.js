import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 1rem;
`;

export const List = styled.div`
  //display: flex;
  //flex-wrap: wrap;
`;

export const Item = styled.div`
  &:not(:first-child) {
    margin-top: 2rem;
  }
`;
