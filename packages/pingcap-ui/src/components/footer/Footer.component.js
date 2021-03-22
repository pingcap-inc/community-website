import PropTypes from 'prop-types';
import React from 'react';
import { v4 as uuidV4 } from 'uuid';

import * as Styled from './footer.styled';

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
