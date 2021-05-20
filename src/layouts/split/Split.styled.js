import styled, { css } from 'styled-components';
import { Row as AntRow, Col as AntCol } from 'antd';

export const Container = styled(AntRow)`
  margin-top: ${(props) => props.$marginTop};
  margin-bottom: ${(props) => props.$marginBottom};
  ${(props) =>
    props.$paddingHorizontal &&
    css`
      padding-left: 24px;
      padding-right: 24px;
    `}
`;

export const ItemContainer = styled(AntCol)`
  ${(props) =>
    props.$marginTop &&
    css`
      margin-top: 36px;
    `}
`;

export const ItemContainerWithDivider = styled(ItemContainer)`
  border-right: 1px solid ${(props) => props.$dividerColor};
`;
