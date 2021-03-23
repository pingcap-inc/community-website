import PropTypes from 'prop-types';
import React from 'react';
import { Row, Col } from 'antd';
import { v4 as uuidV4 } from 'uuid';

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
      <Row>
        <Col xs={24} md={18}>
          <Styled.NavRow gutter={16}>
            {navItems.map(({ title, items }) => (
              <Styled.NavCol key={uuidV4()} span={8}>
                <Styled.NavTitle>{title}</Styled.NavTitle>

                {items.map(({ title, link }) => (
                  <Styled.NavItem key={uuidV4()} onClick={e => onNavClick(link)}>
                    {title}
                  </Styled.NavItem>
                ))}
              </Styled.NavCol>
            ))}
          </Styled.NavRow>
        </Col>

        <Col xs={24} md={6}>
          <Styled.SocialsRow>
            {icons.map(Icon => (
              <Styled.SocialsCol>
                <Styled.IconWrapper>
                  <Icon />
                </Styled.IconWrapper>
              </Styled.SocialsCol>
            ))}
          </Styled.SocialsRow>
        </Col>
      </Row>
    </Styled.Content>
  </Styled.Container>
);

Footer.propTypes = {
  logo: PropTypes.element.isRequired,
  navItems: PropTypes.array.isRequired,
  onNavClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};

export default Footer;
