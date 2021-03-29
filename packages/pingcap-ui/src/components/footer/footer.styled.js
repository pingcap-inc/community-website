import { Row, Col } from 'antd';
import styled from 'styled-components';

import * as colors from '../../colors';
import * as mixins from '../../mixins';

export const Container = styled.div`
  background: ${colors.M2};
  margin-top: 6rem;
`;

export const Content = styled.div`
  ${mixins.responsive()};
  padding-top: 3rem;
  padding-bottom: 3rem;
`;

export const NavRow = styled(Row)`
  margin-bottom: 3rem;
`;

export const NavCol = styled(Col)`
  max-width: 250px;
`;

export const NavTitle = styled.h3`
  ${mixins.reset()};
  ${mixins.typography('h3')};
  margin-bottom: 2rem;
`;

export const NavItem = styled.div`
  ${mixins.typography('p1')};
  cursor: pointer;
  color: ${colors.B4};
  margin-bottom: 1rem;

  &:hover {
    color: ${colors.B1};
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export const SocialsContainer = styled(Col)`
  ${mixins.flexEnd()};
  margin-bottom: 3rem;
`;

export const SocialsList = styled(Row).attrs({
  justify: 'end',
  align: 'top',
  gutter: [16, 12],
})`
  width: 180px;
`;

export const SocialsItem = styled(Col).attrs({
  span: 8,
})`
  ${mixins.flexEnd()};
`;

export const IconWrapper = styled.span`
  cursor: pointer;
  font-size: 0;
  --iconColor: ${colors.B3};

  svg {
    ${mixins.size('36px')};
  }

  &:hover {
    --iconColor: ${colors.B1};
  }
`;

export const Copyright = styled(Col)`
  span {
    font-size: 1.2em;
    position: relative;
    top: 0.15em;
  }
`;

export const Logo = styled(Col)`
  ${mixins.logoTitle('h2')};
  ${mixins.flexEnd()};

  img {
    ${mixins.size('24px', '28px')};
    margin-right: 0.25rem;
  }
`;
