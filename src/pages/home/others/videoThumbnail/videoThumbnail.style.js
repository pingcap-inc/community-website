import styled, { css } from 'styled-components';
import { colors } from '@tidb-community/ui';

export const PreviewWrapper = styled.div`
  max-width: 100%;
`;

export const VideoBox = styled.div`
  cursor: pointer;

  &:hover {
    color: ${colors.B1};
  }

  padding-bottom: 1rem;
  ${(props) =>
    props.isSmallScreen &&
    css`
      width: 100%;
    `}
`;

export const Preview = styled.div`
  background-image: url(${(props) => props.src});
  background-size: auto 100%;
  padding-bottom: 62.8%;
  width: 100%;
  height: 100px;
  border-radius: 4px;
`;
export const Title = styled.div`
  font-size: 16px;
  font-weight: 400;
  display: block;
  line-height: 20px;
  margin-top: 0.75rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

export const MetaBox = styled.div`
  display: flex;
`;

export const IconWrapper = styled.span`
  font-size: 14px;
  color: ${colors.C4};
  padding-right: 1rem;
`;
