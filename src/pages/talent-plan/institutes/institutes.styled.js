import styled from 'styled-components';
import { colors, Styled } from '@tidb-community/ui';
import { getImage } from '~/pages/talent-plan/talent-plan.utils';

export const Container = styled(Styled.Section)`
  && {
    color: ${colors.M1};
    padding: 0;
  }
`;

export const Content = styled(Styled.Content)`
  position: relative;
  padding: 5rem 1rem 7.5rem;
`;

export const ListCard = styled.div`
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  background-color: ${colors.M2};
  padding: 32px;
`;

export const ListItem = styled.div`
  color: ${colors.F1};
  line-height: 2.5;

  &:before {
    background-size: 24px 24px;
    height: 24px;
    width: 24px;
    display: inline-block;
    content: '  ';
    background-image: url('${getImage('institutes-item-icon.svg')}');
  }
`;
