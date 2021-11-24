import styled from 'styled-components';
import { transparentize } from 'polished';
import { colors } from '@tidb-community/ui';

export const MainWrapper = styled.div`
  background: #e9eaee;
`;

export const VisualContainer = styled.div`
  position: relative;
  max-width: 991px;
  margin: 70px auto 54px;
`;

export const Content = styled.main`
  margin-top: 16px;
  padding: 30px 37px;
  border-radius: 6px;
  min-height: 413px;
  background: white;
`;

export const Side = styled.div`
  position: absolute;
  top: 56px;
  left: -52px;
`;

export const Title = styled.h1`
  display: block;
  font-size: 32px;
  line-height: 32px;
`;

export const Meta = styled.div`
  margin-top: 16px;
`;

export const Declaration = styled.p`
  font-size: 14px;
  line-height: 30px;
  margin-top: 16px;
  margin-bottom: 16px;
  color: ${transparentize(0.5, colors.F2)};
`;

export const Tag = styled.span`
  &:before {
    content: '# ';
  }
`;

export const Footer = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;

  .ant-checkbox-wrapper {
    max-width: 80px;
    min-width: 80px;
  }
`;

export const Actions = styled.div`
  margin-top: 32px;

  > .ant-btn:not(:first-child) {
    margin-left: 16px;
  }
`;

export const Editor = styled.div`
  margin-top: 12px;
  padding: 0 11px;
`;