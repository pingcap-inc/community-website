import styled from 'styled-components';
import { Button as AntButton } from 'antd';
import { colors, mixins } from '@pingcap/pingcap-ui';

export const Container = styled.div`
  padding: 6rem 0;
  background: ${colors.M2};
`;

export const Content = styled.div`
  ${mixins.responsive()};
`;

export const Title = styled.h2`
  ${mixins.reset()};
  ${mixins.typography('h1')}
  margin-bottom: 2rem;
`;

export const Desc = styled.ul`
  ${mixins.reset()};
  ${mixins.typography('p1')};
  list-style: square inside;
  margin-bottom: 2rem;

  li {
    margin-bottom: 1rem;
  }
`;

export const Buttons = styled.div`
  button {
    margin-right: 2rem;

    &:last-child {
      margin-right: 0;
    }
  }
`;

export const Button = styled(AntButton).attrs({
  size: 'small',
  type: 'primary',
})``;
