import * as R from 'ramda';
import Image from 'next/image';
import React from 'react';
import { Row } from 'antd';
import { useRouter } from 'next/router';

import * as Styled from './career.styled';
import data from './career.data';
import { link as linkUtils } from 'utils';

const { cert: certData, job: jobData } = data;

const Career = () => {
  const router = useRouter();

  const onCertClick = R.curry(linkUtils.handleRedirect)(router);

  return (
    <Styled.Container>
      <Styled.Header {...R.pick(['title', 'desc'], data)} />

      <Styled.CertSection>
        <Styled.Title>{certData.title}</Styled.Title>
        <Row gutter={[32, 32]}>
          {['PCTA', 'PCTP'].map(name => (
            <Styled.CertCol
              key={name}
              onClick={e => onCertClick(`https://university.pingcap.com/certificate/${name}/`)}
            >
              <Image alt={name} src={`/images/community/${name}.svg`} width="642" height="257" />
            </Styled.CertCol>
          ))}
        </Row>
      </Styled.CertSection>

      <Styled.JobSection>
        <Styled.Title>{jobData.title}</Styled.Title>
      </Styled.JobSection>
    </Styled.Container>
  );
};

export default Career;
