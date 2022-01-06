import * as Styled from './index.styled';
import React from 'react';
import Layout from '~/pages/vip-center/layout';
import { Button, Progress, Row } from 'antd';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import { api } from '@tidb-community/datasource';
import { PageLoader } from '~/components';
// import 'api' from ''

const Page = () => {
  const { isReady } = useRouter();
  const { data, error } = useSWR(isReady && ['points.getMe']);
  if (!data)
    return (
      <Layout>
        <PageLoader />
      </Layout>
    );

  return (
    <Layout>
      <Styled.Title>会员等级</Styled.Title>
      <Styled.LevelContainer>
        <Row justify="space-between">
          <div>
            <Styled.Name>次数扩大司机</Styled.Name>
            <Styled.Level>V6</Styled.Level>
          </div>
          <Button> 开通</Button>
        </Row>
        <Row align="middle">
          <Styled.Score>3812</Styled.Score>
          <Styled.Rank>/rank</Styled.Rank>
        </Row>
        <Progress percent={50} showInfo={false} />
        <Styled.Tip>
          还差 300 经验升级为 V7，查看<Styled.Link>升级小攻略</Styled.Link>
        </Styled.Tip>
      </Styled.LevelContainer>
      <Styled.Title>徽章成就</Styled.Title>
    </Layout>
  );
};

export default Page;
