import React from 'react';
import { Button } from 'antd';

import * as Styled from './box.styled';

const Box = ({ title, text, extra, children, settingsLabel = '设置', onSettingsClick = () => {} }) => {
  return (
    <Styled.Container>
      {children ? (
        <Styled.Content>{children}</Styled.Content>
      ) : (
        <>
          <Styled.Content>
            <h2>{title}</h2>
            <p>
              {text}
              <span>{extra}</span>
            </p>
          </Styled.Content>
          <Button type="link" onClick={onSettingsClick}>
            {settingsLabel}
          </Button>
        </>
      )}
    </Styled.Container>
  );
};

export default Box;
