import styled, { css } from 'styled-components';
import { colors } from '@tidb-community/ui';

export const PreviewWrapper = styled.div`
  max-width: 100%;
  //height: calc(100vh - 16px);
`

export const VideoBox = styled.div`
  //width: 160px;
  padding-bottom: 1rem;
  ${props => props.isSmallScreen && css`width: 100%`}
`;

export const Preview = styled.div`
  padding-bottom: 62.8%;
  width: 100%;
  height: 100px;
  border-radius: 4px;
  background-color: ${colors.C4};
`;
export const Title = styled.div`
  font-size: 12px;
  display: block;
  line-height: 20px;
  height: 38px;
  margin-top: 6px;
  overflow: hidden;
`;
