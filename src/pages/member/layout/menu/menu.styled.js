import styled, { css } from 'styled-components';
import { colors, mixins } from '@tidb-community/ui';
import { Menu } from 'antd';

export const MobileMenu = styled(Menu)`
  position: relative;
  display: flex;
  justify-content: space-between;
  background: none;
  border: none;

  .ant-menu-item {
    margin: 0 !important;
  }
`;

export const Container = styled.ul`
  ${mixins.reset()};
  ${mixins.typography('p2')};
  list-style: none;
  border: 1px solid ${colors.T2};
`;

export const Item = styled.li`
  font-size: 1rem;
  display: block;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  cursor: pointer;
  padding: 0 1rem;
  transition: color 0.25s ease;
  color: ${colors.F1} !important;
  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }
  &:hover {
    color: ${colors.B1} !important;
  }
  height: 40px;
  line-height: 40px;

  ${(props) =>
    props.isActive &&
    css`
      cursor: default;
      border-left: 4px solid ${colors.B1};
      background: ${colors.M1} !important;
    `}
`;
