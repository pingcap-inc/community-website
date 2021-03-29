import * as R from 'ramda';
import Image from 'next/image';
import React from 'react';
import { Row, Col } from 'antd';
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
        <Row gutter={[32, 24]}>
          {['PCTA', 'PCTP'].map((name) => (
            <Col key={name} xs={24} md={12}>
              <Styled.CertContainer onClick={(e) => onCertClick(`https://university.pingcap.com/certificate/${name}/`)}>
                <Image alt={name} src={`/images/community/${name}.svg`} width="642" height="257" />
              </Styled.CertContainer>
            </Col>
          ))}
        </Row>
      </Styled.CertSection>

      <Styled.JobSection>
        <Styled.Title>{jobData.title}</Styled.Title>
        <Row gutter={[32, 24]}>
          {jobData.items.map(({ icon, position, location, link }, idx) => (
            <Col key={idx} xs={24} sm={12} md={8} lg={6}>
              <Styled.JobCard onClick={(e) => onCertClick(link)}>
                <Styled.JobImg>
                  <Image alt={position} src={icon} layout="fill" objectFit="contain" />
                </Styled.JobImg>
                <Styled.JobContent>
                  {[position, location].map((txt) => (
                    <Styled.JobText title={txt}>{txt}</Styled.JobText>
                  ))}
                </Styled.JobContent>
              </Styled.JobCard>
            </Col>
          ))}
        </Row>
      </Styled.JobSection>
    </Styled.Container>
  );
};

export default Career;
