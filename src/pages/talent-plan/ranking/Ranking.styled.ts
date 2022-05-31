import styled from 'styled-components';
import { colors, Styled } from '@tidb-community/ui';
import { getImage } from '../talent-plan.utils';
import { FC, HTMLAttributes } from 'react';

export const Container = styled(Styled.Section)`
  && {
    color: ${colors.M1};
    padding: 0;
  }
`;

export const Content = styled(Styled.Content)`
  margin-top: 1rem;
  position: relative;
`;

export const Banner = styled.div<FC<HTMLAttributes<HTMLDivElement>> & { sm: boolean }>`
  height: 0;
  width: 100%;

  background-image: url('${(props) => getImage(`ranking-tikv-banner${props.sm ? '-mobile' : ''}.svg`)}');
  padding-top: calc(${(props) => (props.sm ? 397 / 428 : 260 / 1332)} * 100%);
  // background image full width
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  margin-bottom: 1rem;
`;

export const Link = styled.div`
  margin: 2rem 0;
  a {
    color: ${colors.B1};
    :hover {
      text-decoration: underline;
    }
  }
`;
