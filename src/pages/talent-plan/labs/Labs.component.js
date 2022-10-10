import React from 'react';
import { Col, Image, Row } from 'antd';

import { Styled as CommonStyled } from '@tidb-community/ui';

import { cdn } from '~/utils';

import * as Styled from './labs.styled';

const orgs = [
  {
    img: '/images/talent-plan/labs-logo-3.png',
    name: '华中科技大学国家光电实验室并行数据实验室',
  },
  {
    img: '/images/talent-plan/labs-logo-6.png',
    name: '中国科学技术大学 ADSL 实验室',
  },
  {
    img: '/images/talent-plan/labs-logo-4.png',
    name: '南开大学数据库实验室',
  },
  {
    img: '/images/talent-plan/labs-logo-1.png',
    name: '电子科技大学计算机科学与工程学院',
  },
  {
    img: '/images/talent-plan/labs-logo-2.png',
    name: '华东师范大学数据科学与工程学院',
  },
  {
    img: '/images/talent-plan/labs-logo-5.png',
    name: '人民大学信息学院',
  },
];

const Labs = () => {
  return (
    <Styled.Container>
      <Styled.Content>
        <CommonStyled.Title>谁在使用我们的项目</CommonStyled.Title>
        <Row gutter={16}>
          {orgs.map((org) => (
            <Col lg={8} md={12} xs={24} key={org.name}>
              <Styled.LabCard>
                <Styled.Row gutter={4}>
                  <Styled.LabCardImgWrapper span={12}>
                    <Image preview={false} src={cdn.getImageUrl(org.img)} />
                  </Styled.LabCardImgWrapper>
                  <Col span={12}>
                    <Styled.LabCardTitle> {org.name} </Styled.LabCardTitle>
                  </Col>
                </Styled.Row>
              </Styled.LabCard>
            </Col>
          ))}
        </Row>
      </Styled.Content>
    </Styled.Container>
  );
};

export default Labs;
