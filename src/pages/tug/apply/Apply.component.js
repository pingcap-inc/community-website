import React from 'react';

import * as Styled from './apply.styled';
import ApplyStart from './ApplyStart';
import ApplyEnd from './ApplyEnd';

const Apply = () => (
  <Styled.Container>
    <Styled.Content>
      <Styled.Panel>
        <ApplyStart />
      </Styled.Panel>
      <Styled.Panel>
        <ApplyEnd />
      </Styled.Panel>
    </Styled.Content>
  </Styled.Container>
);

export default Apply;
