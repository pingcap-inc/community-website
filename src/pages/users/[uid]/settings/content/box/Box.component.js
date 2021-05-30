import React from 'react';
import { Button } from 'antd';

import * as Styled from './box.styled';

const Box = ({ title, text, children, settingLabel = '设置', onSettingClick = (e) => {} }) => {
  return (
    <Styled.Container>
      {children ? (
        <Styled.Content>{children}</Styled.Content>
      ) : (
        <>
          <Styled.Content>
            <h2>{title}</h2>
            <p>{text}</p>
          </Styled.Content>
          <Button type="link" onClick={onSettingClick}>
            {settingLabel}
          </Button>
        </>
      )}
    </Styled.Container>
  );
};

export default Box;
