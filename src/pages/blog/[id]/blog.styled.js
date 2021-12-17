import styled, { css } from 'styled-components';
import { transparentize } from 'polished';
import { Breadcrumb as AntdBreadcrumb } from 'antd';
import { colors, mixins } from '@tidb-community/ui';

export const MainWrapper = styled.div`
  background: #e9eaee;
  *::selection {
    color: #000f0f !important;
    background-color: #f7d8d9 !important;
  }
`;

export const Breadcrumb = styled(AntdBreadcrumb)`
  padding-left: 16px;
`;

export const StatusAlert = styled.div`
  margin-top: 16px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
`;

export const Side = styled.div`
  ${mixins.onDesktop(css`
    position: sticky;
    height: 100%;
    margin-top: 4rem;
    top: 2rem;
  `)};
  ${mixins.onMobile(css`
    display: none;
  `)};
`;

export const BottomActions = styled.div`
  ${mixins.onDesktop(css`
    display: none;
  `)};
  ${mixins.onMobile(css`
    margin-top: 32px;
  `)};
`;

export const Main = styled.div`
  //position: relative;
  width: 991px;
  margin: 2rem;
  ${mixins.onMobile(css`
    padding: 0 1rem;
  `)};
`;

export const Body = styled.main`
  margin-top: 16px;
  padding: 30px 37px;
  border-radius: 6px;
  min-height: 413px;
  background: white;
`;

export const CoverImage = styled.div`
  margin-left: -37px;
  margin-right: -37px;
  margin-top: -30px;
  margin-bottom: 2rem;
  border-bottom: 2px ${colors.B4} solid;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;
`;

export const Title = styled.h1`
  font-size: 32px;
  line-height: 1.5;
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
  a {
    color: #73061c;
    &:hover {
      text-decoration: underline;
    }
  }
`;
