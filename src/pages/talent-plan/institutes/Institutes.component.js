import React from 'react';
import { Col, Row } from 'antd';

import { useIsSmallScreen } from '~/hooks';

import { Styled as CommonStyled } from '@tidb-community/ui';

import * as Styled from './institutes.styled';

const universityNames = [
  '加州大学',
  '华中科技大学',
  '中国科学技术大学',
  '华东师范大学',
  '南开大学',
  '电子科技大学',
  '北京邮电大学',
  '上海交通大学',
  '浙江大学',
  '北京航空航天大学',
  '武汉大学',
  '广东工业大学',
  '北京大学',
  '复旦大学',
  '华南理工大学',
  '宾州州立大学',
  '吉林大学',
  '亚琛工业大学',
  '澳大利亚国立大学',
  '早稻田大学',
  '大连理工大学',
  '东南大学',
  '四川大学',
  '西安交通大学',
  '南京大学',
  '清华大学',
  '西北工业大学',
  '中国科学院大学',
  '中山大学',
  '同济大学',
  '哈尔滨工业大学',
  '北京科技大学',
  '东北大学',
  '深圳大学',
  '桂林电子科技大学',
  '山东大学',
  '雪城大学',
  '芝加哥大学',
  '天津大学',
  '卡内基梅隆大学',
  '北京理工大学',
  '乔治亚理工大学',
  '俄亥俄州立大学',
  '南加利福利亚大学',
  '新南威尔士大学',
  '伊利诺伊大学',
  '瑞典皇家理工大学',
  '不列颠哥伦比亚大学',
  '爱丁堡大学',
  '北卡罗来纳大学',
  '杜克大学',
  '赫尔辛基大学',
  '苏黎世联邦理工大学',
  '墨尔本皇家理工大学',
  '台湾大学',
  '威斯康辛大学',
  '佐治亚理工学院',
  '南洋理工大学',
  '新加坡国立大学',
  '南加州大学',
];

const Institutes = () => {
  const { isSmallScreen } = useIsSmallScreen();

  const MAX_LIST_ITEMS = 10;
  // split list into chunks of 15
  const chunks = [];
  for (let i = 0; i < universityNames.length; i += MAX_LIST_ITEMS) {
    chunks.push(universityNames.slice(i, i + MAX_LIST_ITEMS));
  }

  const PAGE_SIZE = isSmallScreen ? 1 : 3;
  const pages = [];
  for (let i = 0; i < chunks.length; i += PAGE_SIZE) {
    pages.push(chunks.slice(i, i + PAGE_SIZE));
  }

  return (
    <Styled.Container>
      <Styled.Content>
        <CommonStyled.Title>个人学习者来源</CommonStyled.Title>
        <Styled.Carousel>
          {pages.map((page) => (
            <Styled.CarouselContent>
              {
                <Row gutter={16}>
                  {page.map((chunk) => (
                    <Col key={chunk[0]} span={isSmallScreen ? 24 : 8}>
                      <Styled.ListCard>
                        {chunk.map((name) => (
                          <Styled.ListItem key={name}> {name} </Styled.ListItem>
                        ))}
                      </Styled.ListCard>
                    </Col>
                  ))}
                </Row>
              }
            </Styled.CarouselContent>
          ))}
        </Styled.Carousel>
      </Styled.Content>
    </Styled.Container>
  );
};

export default Institutes;
