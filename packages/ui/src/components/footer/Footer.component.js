import PropTypes from 'prop-types';
import React from 'react';
import { Grid, Row, Col } from 'antd';

import GithubIcon from './icons/github.svg';
import TwitterIcon from './icons/twitter.svg';
import FacebookIcon from './icons/facebook.svg';
import LinkedInIcon from './icons/linkedin.svg';
import SlackIcon from './icons/slack.svg';
import YoutubeIcon from './icons/youtube.svg';
import * as Styled from './footer.styled';

const { useBreakpoint } = Grid;

const icons = [GithubIcon, TwitterIcon, FacebookIcon, LinkedInIcon, SlackIcon, YoutubeIcon];

const Footer = ({ logo, title, navItems, onNavClick, hasMargin = false }) => {
  const bp = useBreakpoint();

  const justify = bp.xs ? 'center' : undefined;

  return (
    <Styled.Container hasMargin={hasMargin}>
      <Styled.Content>
        <Row align="top" justify={justify}>
          <Col xs={24} md={18}>
            <Styled.NavRow gutter={[16, 48]} justify={justify}>
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
            </Styled.NavRow>
          </Col>

          <Styled.SocialsContainer xs={24} md={6}>
            <Styled.SocialsList justify={justify}>
              {icons.map((Icon, idx) => (
                <Styled.SocialsItem key={idx}>
                  <Styled.IconWrapper>
                    <Icon />
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
  logo: PropTypes.element.isRequired,
  navItems: PropTypes.array.isRequired,
  onNavClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  hasMargin: PropTypes.bool,
};

export default Footer;
