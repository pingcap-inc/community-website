import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Title } from 'react-head';

import * as Styled from './simple.styled';

const SimpleLayout = ({ headTitle = 'PingCAP Account', title = 'TiDB', subtitle = 'SQL at Scale', children }) => {
  useEffect(() => {
    // react-head would not overwrite default title tag
    // see https://github.com/tizmagik/react-head/issues/83
    // why here? if we remove title tag early than react-head injected it, the title will change to the host shortly.
    const defaultTitle = document.getElementById('default-title');
    if (defaultTitle) defaultTitle.parentNode.removeChild(defaultTitle);
  }, []);

  return (
    <>
      <Title>{headTitle}</Title>
      <Styled.Container>
        <Styled.Main>
          <Styled.Logo />
          <Styled.Title>{title}</Styled.Title>
          <Styled.SubTitle>{subtitle}</Styled.SubTitle>
          {children}
        </Styled.Main>
      </Styled.Container>
    </>
  );
};

SimpleLayout.displayName = 'SimpleLayout';
SimpleLayout.propTypes = {
  headTitle: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.element,
};

export default SimpleLayout;
