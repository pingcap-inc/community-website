import React from 'react';
// @ts-ignore
import Layout from '~/pages/member/layout';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { api } from '@tidb-community/datasource';
// @ts-ignore
import { PageLoader } from '~/components';
import * as Styled from './index.styled';
import { ConfigProvider, Empty } from 'antd';
import { getImage } from '~/pages/home/home.utils';

const Page = () => {
  const { isReady } = useRouter();
  const { data } = useSWR<api.ApiResponse<{ data: api.points.RedeemRecordEntry[] }, any>, any>(
    isReady && ['points.getRedeemRecords']
  );

  if (!data)
    return (
      <Layout>
        <PageLoader />
      </Layout>
    );

  const tableData = data.data;

  const columns = [
    { title: '礼品', dataIndex: 'product_name' },
    { title: '消费积分', dataIndex: 'points' },
    { title: '收货人', dataIndex: 'consignee_name' },
    { title: '手机号码', dataIndex: 'consignee_phone' },
    { title: '详细地址', dataIndex: 'consignee_addrss' },
    { title: '备注', dataIndex: 'comment' },
    { title: '物流单号', dataIndex: 'tracking_number' },
    { title: '物流公司', dataIndex: 'courier_company' },
    { title: '时间', dataIndex: 'created_at' },
  ];

  return (
    <Layout>
      <ConfigProvider
        renderEmpty={() => <Empty image={getImage('/images/list-placeholder.svg')} description={'暂无数据'} />}
      >
        <Styled.Table columns={columns} dataSource={tableData} pagination={false} />
      </ConfigProvider>
    </Layout>
  );
};

export default Page;
