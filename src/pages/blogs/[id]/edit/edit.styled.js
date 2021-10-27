import styled from 'styled-components';
import { Input, Select } from 'antd';

export const MainWrapper = styled.div`
  background: #e9eaee;
`;

export const Container = styled.div`
  max-width: 991px;
  margin: 70px auto 54px;
`;

export const Content = styled.main`
  padding: 30px 37px;
  border-radius: 6px;
  min-height: 413px;
  background: white;
`;

export const TitleInput = styled(Input).attrs({
  bordered: false,
})`
  display: block;
  font-size: 32px;
  line-height: 32px;
`;

export const Meta = styled.div`
  margin-top: 16px;
`;

export const CategorySelect = styled(Select).attrs({
  bordered: false,
  showArrow: false,
  allowClear: true,
})`
  display: inline-block;
  font-size: 14px;
  min-width: 100px;
`;

export const TagsSelect = styled(Select).attrs({
  bordered: false,
  showArrow: false,
  mode: 'multiple',
  allowClear: true,
})`
  margin-left: 24px;
  display: inline-block;
  font-size: 14px;
  min-width: 250px;
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
