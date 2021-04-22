import { css } from 'styled-components';
import { mixins } from '../index';

export default css`
  .ant-form-item-extra {
    ${mixins.typography('p3')};
    margin-top: 12px;
  }
`;
