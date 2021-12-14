import styled from 'styled-components';
import { columnWidth } from '~/pages/events/hackathon2021/index.styled';
import { Radio } from 'antd';

export const Leaderboard = styled.div`
  width: ${10 * columnWidth}vw;
  // horizontally center
  margin-left: calc(50% - ${5 * columnWidth}vw);
`;

export const Table = styled.table`
  // table with 5 columns, rows are of alternating color, header is purple
  font-size: 1rem;
  width: 100%;
  margin-bottom: 1rem;
`;

export const TableHeadRow = styled.tr`
  // #674FF0 to #342878
  background: linear-gradient(to right bottom, #674ff0, #342878);
  color: #fff;
  padding: 10px;
  text-align: center;
  width: 100%;
`;

export const TableRow = styled.tr`
  background: ${(props) => (props.index % 2 === 0 ? '#303038' : '#25242C')};
`;

export const TableCell = styled.td`
  padding: 10px;
  text-align: center;
`;

export const TableHead = styled.thead``;

export const TableHeadCell = styled.th`
  padding: 10px;
  text-align: center;
`;

export const TableBody = styled.tbody`
  width: 100%;
`;

export const ColumnSwitch = styled(Radio.Group)`
  background: #211a4b;
  border-radius: 1rem;
  border: none;

  label {
    line-height: 1.65rem;
    height: 1.6rem;
    padding-left: 8px;
    padding-right: 8px;
    background: #211a4b;
    border: none !important;
    color: #a9a0d9;
  }

  label:first-child {
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
  }

  label:last-child {
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
  }

  .ant-radio-button-wrapper-checked {
    border-radius: 1rem;
    background: #6b6290 !important;
  }

  .ant-radio-button-wrapper:not(:first-child)::before {
    display: none;
  }
`;

export const ExpandButton = styled.a`
  color: #84fcfc;
  text-decoration: none;

  &:hover {
    color: #674ff0;
  }
`;
