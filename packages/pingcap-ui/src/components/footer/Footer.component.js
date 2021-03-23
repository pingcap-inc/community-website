import PropTypes from 'prop-types';
import React from 'react';
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

      <Styled.SocialMediaContainer>
        {icons.map(Icon => (
          <Styled.SocialMediaItem>
            <Icon />
          </Styled.SocialMediaItem>
        ))}
      </Styled.SocialMediaContainer>
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
