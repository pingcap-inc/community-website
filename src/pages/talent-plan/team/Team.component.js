import React from 'react';
import { Styled as CommonStyled } from '@tidb-community/ui';
import * as Styled from './team.styled';
import { useTranslation } from 'next-i18next';
import { Row } from 'antd';
import { getImage } from '~/pages/talent-plan/talent-plan.utils';

const Team = () => {
  const { t } = useTranslation('page-talent-plan');

  const lang = t('team', { returnObjects: true });

  return (
    <Styled.Container>
      <Styled.Content>
        <CommonStyled.Title> {lang.title} </CommonStyled.Title>
        <Row gutter={16}>
          {lang.members.map((member) => (
            <Styled.CardWrapper lg={6} xs={12} key={member.nameEN}>
              <Styled.MemberCard>
                <Styled.MemberCardAvatar size={48} src={getImage(`team-${member.nameZH}.png`)} />
                <Styled.MemberCardContent>
                  <Styled.MemberCardHeader>{member.nameZH}</Styled.MemberCardHeader>
                  <Styled.MemberCardLine>{member.nameEN}</Styled.MemberCardLine>
                  <Styled.MemberCardLine>{member.org}</Styled.MemberCardLine>
                  <Styled.MemberCardLine>{member.role}</Styled.MemberCardLine>
                  <Styled.MemberCardLine>{member.github}</Styled.MemberCardLine>
                </Styled.MemberCardContent>
              </Styled.MemberCard>
            </Styled.CardWrapper>
          ))}
        </Row>
      </Styled.Content>
    </Styled.Container>
  );
};

export default Team;
