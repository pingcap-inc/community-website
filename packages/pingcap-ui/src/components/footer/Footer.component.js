import PropTypes from 'prop-types';
import React from 'react';
import { Row, Col } from 'antd';

import GithubIcon from './icons/github.svg';
import TwitterIcon from './icons/twitter.svg';
import FacebookIcon from './icons/facebook.svg';
import LinkedInIcon from './icons/linkedin.svg';
import SlackIcon from './icons/slack.svg';
import YoutubeIcon from './icons/youtube.svg';
import * as Styled from './footer.styled';

const icons = [GithubIcon, TwitterIcon, FacebookIcon, LinkedInIcon, SlackIcon, YoutubeIcon];

const Footer = ({ logo, title, navItems, onNavClick }) => (
  <Styled.Container>
    <Styled.Content>
      <Row align="top">
        <Col xs={24} md={18}>
          <Styled.NavRow gutter={[16, 48]}>
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
          <Styled.SocialsList>
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

      <Row>
        <Styled.Copyright xs={24} md={18}>
          <span>&copy;</span>2021 TiDB Community.
        </Styled.Copyright>
        <Styled.Logo xs={24} md={6}>
          {logo}
          {title}
        </Styled.Logo>
      </Row>
    </Styled.Content>
  </Styled.Container>
);

Footer.propTypes = {
  logo: PropTypes.element.isRequired,
  navItems: PropTypes.array.isRequired,
  onNavClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default Footer;
