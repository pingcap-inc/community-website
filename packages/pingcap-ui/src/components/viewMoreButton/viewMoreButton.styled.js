import styled from 'styled-components';
import { ArrowRightOutlined } from '@ant-design/icons';
import { colors, mixins } from '@pingcap/pingcap-ui';

export const Container = styled.div`
  color: ${colors.B1};
  text-transform: uppercase;
  cursor: pointer;
`;

export const ArrowIcon = styled(ArrowRightOutlined)`
  margin-right: 1rem;
`;
