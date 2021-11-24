import styled from 'styled-components';
import { Input, Select } from 'antd';
import { colors } from '@tidb-community/ui';

export const Content = styled.main`
  padding: 36px 37px;
  border-radius: 6px;
  min-height: 413px;
  background: white;

  .ant-upload {
    display: block;
    width: 100%;
  }
`;

export const CoverImage = styled.div`
  margin-left: -37px;
  margin-right: -37px;
  margin-top: -36px;
  border-bottom: 2px ${colors.B4} solid;
  cursor: pointer;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CoverImagePlaceholder = styled.div`
  margin-left: -37px;
  margin-right: -37px;
  margin-top: -36px;
  padding: 36px 48px;
  border-bottom: 2px ${colors.B4} solid;
  font-size: 20px;
  line-height: 30px;
  color: #c7c7c7;
  user-select: none;
  cursor: pointer;
`;

export const TitleInput = styled(Input).attrs({
  bordered: false,
})`
  margin-top: 25px;
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
    margin-right: 16px;
  }

  > .ant-alert {
    margin-bottom: 32px;
  }
`;

export const Editor = styled.div`
  margin-top: 12px;
  padding: 0 11px;
`;
