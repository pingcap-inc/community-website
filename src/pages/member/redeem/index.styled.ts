import styled from 'styled-components';
// @ts-ignore
import { colors, mixins } from '@tidb-community/ui';

export const PointsContainer = styled.div`
  background-color: ${colors.M1};
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 6px;
`;

export const PointsContainerInner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 1rem;
`;

export const PointsContainerLabel = styled.span`
  color: ${colors.F1};
  margin-right: 0.5rem;
  font-size: 18px;
`;

export const PointsContainerValue = styled.span`
  color: ${colors.B1};
  font-size: 18px;
  margin-right: 2rem;
`;

export const ProductsContainer = styled.div``;

export const Product = styled.div`
  padding: 1rem;
  border-radius: 6px;
  background-color: ${colors.M1};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProductImage = styled.img`
  ${mixins.size('170px', '120px')}
  object-fit: cover;
  width: 100%;
  margin-bottom: 1rem;
`;

export const ProductLine = styled.div`
  height: 3rem;
  text-align: center;
  width: 100%;
  font-size: 14px;
  color: ${(props) => (props.red ? colors.B1 : props.gray ? colors.C4 : colors.F1)};
`;
