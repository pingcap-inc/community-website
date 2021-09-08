import styled, { css } from 'styled-components';
import { colors, mixins } from '@tidb-community/ui';

export const PreviewWrapper = styled.div`
  max-width: 100%;
  position: relative;
`;

export const VideoBox = styled.div`
  cursor: pointer;
  padding-bottom: 1rem;

  &:hover {
    color: ${colors.B1};
  }

  ${(props) =>
    props.isSmallScreen &&
    css`
      width: 100%;
    `}
`;

export const Preview = styled.div`
  ${mixins.size('100%', '100px')};
  background-image: url(${(props) => props.src});
  background-size: auto 100%;
  padding-bottom: 62.8%;
  border-radius: 4px;
`;

export const Length = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  font-size: 12px;
  color: ${colors.M1};
  padding-right: 4px;
  padding-left: 4px;
  background-color: rgb(0, 0, 0, 0.4);
`;

export const Title = styled.div`
  ${mixins.lineClamp(2)};
  font-size: 14px;
  line-height: 1.75;
  margin-top: 0.75rem;
`;

export const MetaBox = styled.div`
  display: flex;
`;

export const IconWrapper = styled.span`
  gap: 4px;
  display: inline-flex;
  align-items: center;
  font-size: 14px;
  color: ${colors.C4};
  padding-right: 1rem;
`;
