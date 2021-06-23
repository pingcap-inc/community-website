import * as R from 'ramda';
import Image from 'next/image';
import React from 'react';
import { Row, Col } from 'antd';
import { ViewMoreButton } from '@tidb-community/ui';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

import * as Styled from './career.styled';
import { genIcon, genLink } from './career.utils';
import { link as linkUtils } from '~/utils';

const Career = () => {
  const router = useRouter();
  const { t } = useTranslation('page-community');

  const lang = t('career', {
    returnObjects: true,
  });

  const {
    job,
    job: { viewAll },
  } = lang;

  const onLinkClick = R.curry(linkUtils.handleRedirect)(router);

  return (
    <Styled.Container>
      <Styled.Header {...R.pick(['title', 'desc'], lang)} />

      <Styled.CertSection>
        <Styled.Title>{t('career.certTitle')}</Styled.Title>

        <Row gutter={[32, 24]}>
          {['PCTA', 'PCTP'].map((name) => (
            <Col key={name} xs={24} md={12}>
              <Styled.CertContainer onClick={(e) => onLinkClick(`https://university.pingcap.com/certificate/${name}/`)}>
                <Image alt={name} src={`/images/community/${name}.svg`} width="642" height="257" />
              </Styled.CertContainer>
            </Col>
          ))}
        </Row>
      </Styled.CertSection>

      <Styled.JobSection>
        <Styled.Title>{job.title}</Styled.Title>

        <Row gutter={[32, 24]}>
          {job.items.map(({ iconId, position, location, linkId }, idx) => (
            <Col key={idx} xs={24} sm={12} md={8} lg={6}>
              <Styled.JobCard onClick={(e) => onLinkClick(genLink(linkId))}>
                <Styled.JobImg>
                  <Image alt={position} src={genIcon(iconId)} layout="fill" objectFit="contain" />
                </Styled.JobImg>
                <Styled.JobContent>
                  {[position, location].map((txt, idx) => (
                    <Styled.JobText key={idx} title={txt}>
                      {txt}
                    </Styled.JobText>
                  ))}
                </Styled.JobContent>
              </Styled.JobCard>
            </Col>
          ))}
        </Row>

        <Styled.ViewMoreWrapper>
          <ViewMoreButton onClick={(e) => onLinkClick(viewAll.link)}>{viewAll.label}</ViewMoreButton>
        </Styled.ViewMoreWrapper>
      </Styled.JobSection>
    </Styled.Container>
  );
};

export default Career;
