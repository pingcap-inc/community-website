import PropTypes from 'prop-types';
import React from 'react';
import { v4 as uuidV4 } from 'uuid';

import * as Styled from './footer.styled';

const genNav = ({ items, onNavClick }) => {
  const { NavContainer, NavCol, NavTitle, NavItem } = Styled;

  return (
    <NavContainer>
      {items.map(item => {
        const { title, items, link } = item;
        const key = uuidV4();

        if (items) {
          return (
            <NavCol key={key}>
              <NavTitle>{title}</NavTitle>
              {genNav({ items, onNavClick })}
            </NavCol>
          );
        }

        return (
          <NavItem key={key} onClick={e => onNavClick(link)}>
            {title}
          </NavItem>
        );
      })}
    </NavContainer>
  );
};

const Footer = ({ logo, title, navItems, onNavClick }) => (
  <Styled.Container>
    <Styled.Content>{genNav({ items: navItems, onNavClick })}</Styled.Content>
  </Styled.Container>
);

Footer.propTypes = {
  logo: PropTypes.element.isRequired,
  navItems: PropTypes.array.isRequired,
  onNavClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};

export default Footer;
