import * as Styled from './Ranking.styled';
//import { Table } from 'antd';
//import { tikv_columns, tikv_columns_participation, tikv_data } from './datasource';
import { Styled as CommonStyled } from '@tidb-community/ui';
import Anchor from '~/components/Anchor';
import React from 'react';

const Ranking = () => {
  return (
    <Styled.Container>
      <Styled.Content>
        <CommonStyled.Title>学习活动</CommonStyled.Title>
        {/*<Styled.Banner sm={isSmallScreen} />*/}
        <Styled.Link>
          <li>
            <Anchor href={'https://mp.weixin.qq.com/s/gn-hzLGXTqMG418evx98bw'}>
              Talent Plan 子课程支持中国数据库暑期学校 2023
            </Anchor>{' '}
            （已结束）
          </li>
          <li>2023 Talent Plan 华中科技大学暑期训练营 （已结束）</li>
          <li>
            <Anchor href={'https://asktug.com/t/topic/665861'}>2022 年 Talent Plan tinyKV 学习营</Anchor> （已结束）
          </li>
          <li>
            <Anchor href={'https://asktug.com/t/topic/665106'}>2022 年 Talent Plan 分布式事务短训营</Anchor> （已结束）
          </li>
          <li>
            <Anchor href={'https://asktug.com/t/topic/393068'}>2021 年 Talent Plan tinyKV 学习营</Anchor> （已结束）
          </li>
        </Styled.Link>
        {/*  {['一等奖', '二等奖', '三等奖'].map((prize, idx) => (*/}
        {/*    <>*/}
        {/*      <h3>{prize}</h3>*/}
        {/*      <Table dataSource={tikv_data[idx]} columns={tikv_columns} pagination={false} />;*/}
        {/*    </>*/}
        {/*  ))}*/}
        {/*  <h3>最佳参与奖</h3>*/}
        {/*  <Table dataSource={tikv_data[3]} columns={tikv_columns_participation} pagination={false} />*/}
        {/*  <h3>优胜奖</h3>*/}
        {/*  <Table dataSource={tikv_data[4]} columns={tikv_columns.slice(0, -1)} pagination={false} />*/}
      </Styled.Content>
    </Styled.Container>
  );
};

export default Ranking;
