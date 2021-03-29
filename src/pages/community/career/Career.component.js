import * as R from 'ramda';
import React from 'react';

import * as Styled from './career.styled';
import data from './career.data';

const { cert: certData, job: jobData } = data;

const Career = () => (
  <Styled.Container>
    <Styled.Header {...R.pick(['title', 'desc'], data)} />

    <Styled.CertSection>
      <Styled.Title>{certData.title}</Styled.Title>
    </Styled.CertSection>

    <Styled.JobSection>
      <Styled.Title>{jobData.title}</Styled.Title>
    </Styled.JobSection>
  </Styled.Container>
);

export default Career;
