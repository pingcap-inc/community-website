import styled from 'styled-components';
import { colors } from '@tidb-community/ui';
import { FormItem } from 'formik-antd';

// FIXME: fromik-antd has an issue for supporting required field, so
// I copied the same asterisk stylings from AntD as below. But once
// formik - antd fixed the issue, we'd better to switch back to the
// official syntax. I.e. `<Form.Item rules={[{ required: true }]}>`
export const Container = styled(FormItem)`
  .ant-form-item-label > label {
    &:before {
      display: inline-block;
      margin-right: 4px;
      color: ${colors.AntD.error};
      font-size: 14px;
      font-family: 'SimSun,sans-serif';
      line-height: 1;
      content: '*';
    }
  }
`;
