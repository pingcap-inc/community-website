import { css } from 'styled-components';
import { colors } from '../';

export const paginationStyles = css`
  .ant-pagination-item-active {
    border-color: ${colors.B1} !important;
  }

  .ant-pagination-item:focus-visible a,
  .ant-pagination-item:hover a,
  .ant-pagination-item-active a {
    color: ${colors.B1} !important;
  }

  .ant-pagination-prev:focus-visible .ant-pagination-item-link,
  .ant-pagination-next:focus-visible .ant-pagination-item-link,
  .ant-pagination-prev:hover .ant-pagination-item-link,
  .ant-pagination-next:hover .ant-pagination-item-link {
    color: ${colors.B1} !important;
  }
`;

export default paginationStyles;
