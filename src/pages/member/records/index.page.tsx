import React, { useEffect, useState } from 'react';
// @ts-ignore
import Layout from '~/pages/member/layout';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { api } from '@tidb-community/datasource';
// @ts-ignore
import { PageLoader } from '~/components';
import * as Styled from './index.styled';
import { Link, Tutorial } from '../index.styled';
import { ConfigProvider, Empty } from 'antd';
import { cdn } from '~/utils';

const Page = () => {
  const { isReady } = useRouter();

  const { data } = useSWR<api.ApiResponse<{ data: api.points.GetMeData }, any>, any>(isReady && ['points.getMe']);

  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(20);
  const [total, setTotal] = useState(0);
  // const { data: records } = useSWR<api.ApiResponse<{ data: api.points.AwardedPointEntry[] }, any>, any>(isReady && ['points.getAwardedPoints', {currentPage, perPage}]);
  // when currentPage changes, fetch new data
  const [tableData, setTableData] = useState<api.points.AwardedPointEntry[]>([]);
  useEffect(() => {
    api.points.getAwardedPoints({ currentPage, perPage }).then((data) => {
      setTableData(data.data);
      setTotal(data.total_num);
    });
  }, [isReady, currentPage, perPage]);

  if (!data || !tableData)
    return (
      <Layout>
        <PageLoader />
      </Layout>
    );

  const pointsData = data?.data;

  const columns = [
    {
      title: '摘要',
      dataIndex: 'digest',
    },
    {
      title: '积分变化',
      dataIndex: 'points',
    },
    {
      title: '经验值变化',
      dataIndex: 'exps',
    },
    {
      title: '备注',
      dataIndex: 'comment',
    },
    {
      title: '时间',
      dataIndex: 'created_at',
    },
  ];

  const onChange = (page: number, pageSize: number) => {
    setCurrentPage(page);
    setPerPage(pageSize);
  };

  return (
    <Layout>
      <Styled.PointsContainer>
        <div>
          <span>
            <Styled.PointsContainerLabel>经验值</Styled.PointsContainerLabel>
            <Styled.PointsContainerValue>{pointsData.current_exps}</Styled.PointsContainerValue>
          </span>
          <span>
            <Styled.PointsContainerLabel>积分</Styled.PointsContainerLabel>
            <Styled.PointsContainerValue>{pointsData.current_points}</Styled.PointsContainerValue>
          </span>
        </div>
        <div>
          <Tutorial>
            <Link href="/member/rules">升级攻略</Link>
          </Tutorial>
        </div>
      </Styled.PointsContainer>
      <ConfigProvider
        renderEmpty={() => <Empty image={cdn.getImageUrl('/images/list-placeholder.svg')} description={'暂无数据'} />}
      >
        <Styled.Table
          columns={columns}
          dataSource={tableData}
          pagination={{
            position: ['bottomCenter'],
            onChange,
            total,
            pageSize: perPage,
          }}
        />
      </ConfigProvider>
    </Layout>
  );
};

export default Page;
