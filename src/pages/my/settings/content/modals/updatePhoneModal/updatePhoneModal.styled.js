import styled from 'styled-components';
import { Input } from 'formik-antd';
import { colors, mixins } from '@tidb-community/ui';

export const PhoneInput = styled(Input)`
  ${mixins.flexVerticalCenter()};

  .ant-input-prefix {
    color: ${colors.F2};
    height: 18px;
    padding-right: 0.5rem;
    margin-right: 0.5rem;
    border-right: 1px solid ${colors.C2};
  }
`;
