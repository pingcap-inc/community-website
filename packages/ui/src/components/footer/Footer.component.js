import PropTypes from 'prop-types';
import React from 'react';
import { Grid, Row, Col } from 'antd';

import * as Styled from './footer.styled';

const { useBreakpoint } = Grid;

const Footer = ({ hasMargin = false, icons, logo, navItems, onNavClick, title }) => {
  const bp = useBreakpoint();

  const justify = bp.xs ? 'center' : undefined;

  return (
    <Styled.Container hasMargin={hasMargin}>
      <Styled.Content>
        <Row align="top" justify={justify}>
          <Styled.NavContainer xs={24} md={18}>
            <Row gutter={[16, 48]} justify={justify}>
              {navItems.map(({ title, items }) => (
                <Styled.NavCol key={title} xs={24} md={8}>
                  <Styled.NavTitle>{title}</Styled.NavTitle>

                  {items.map(({ title, link }) => (
                    <Styled.NavItem key={title} onClick={(e) => onNavClick(link)}>
                      {title}
                    </Styled.NavItem>
                  ))}
                </Styled.NavCol>
              ))}
            </Row>
          </Styled.NavContainer>

          <Styled.SocialsContainer xs={24} md={6}>
            <Styled.SocialsList justify={justify}>
              {icons.map(({ icon: Icon, link }, idx) => (
                <Styled.SocialsItem key={idx}>
                  <Styled.IconWrapper>
                    <Icon onClick={() => onNavClick(link)} />
                  </Styled.IconWrapper>
                </Styled.SocialsItem>
              ))}
            </Styled.SocialsList>
          </Styled.SocialsContainer>
        </Row>

        <Row gutter={[16, 16]} justify={justify}>
          <Styled.Copyright xs={24} md={18}>
            <span>&copy;</span>2021 TiDB Community.
          </Styled.Copyright>
          <Col xs={24} md={6}>
            <Styled.Logo>
              {logo}
              {title}
            </Styled.Logo>
          </Col>
        </Row>
      </Styled.Content>
    </Styled.Container>
  );
};

Footer.propTypes = {
  hasMargin: PropTypes.bool,
  icons: PropTypes.array.isRequired,
  logo: PropTypes.element.isRequired,
  navItems: PropTypes.array.isRequired,
  onNavClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default Footer;
