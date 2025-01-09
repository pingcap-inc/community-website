import React, { useState } from 'react';
// @ts-ignore
import Layout from '~/pages/member/layout';
import useSWR from 'swr';
import { api } from '@tidb-community/datasource';
// @ts-ignore
import { PageLoader } from '~/components';
import { useRouter } from 'next/router';

import * as Styled from './index.styled';
import { Link, Tutorial } from '../index.styled';
import { Button, Col, Modal, Row } from 'antd';
import FormComponent from './form';
import { ProductDataEntry } from '../../../../packages/datasource/src/api/points';

export const FormModalContext = React.createContext<any>({
  productId: '',
  open: false,
  setOpen: () => {},
});

const Page = () => {
  const { isReady } = useRouter();
  const { data } = useSWR<api.ApiResponse<{ data: api.points.GetMeData }, any>, any>(isReady && ['points.getMe']);
  const { data: products } = useSWR<api.ApiResponse<{ data: api.points.ProductDataEntry[] }, any>, any>(
    isReady && ['points.getProducts']
  );

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentProductId, setCurrentProductId] = useState('');
  const showModal = (id) => () => {
    setIsModalVisible(true);
    setCurrentProductId(id);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  if (!data || !products)
    return (
      <Layout>
        <PageLoader />
      </Layout>
    );

  const pointsData = data?.data;
  const productsData: ProductDataEntry[] = products?.data ?? [];

  const productsDataOutOfStock: ProductDataEntry[] = [];
  const productsDataInStock: ProductDataEntry[] = [];
  //console.log('!!productsData', productsData)
  productsData.forEach((value) => {
    if (value.remains === 0) {
      productsDataOutOfStock.push(value);
    } else {
      productsDataInStock.push(value);
    }
  });
  const productsDataOrdered: ProductDataEntry[] = [...productsDataInStock, ...productsDataOutOfStock];

  return (
    <FormModalContext.Provider value={{ productId: currentProductId, setOpen: setIsModalVisible }}>
      <Layout>
        <Styled.PointsContainer>
          <Tutorial>
            1.10-2.12 期间周边兑换统一于 2.13 后发货，如有周边兑换问题可联系 TiDB Robot 微信（tidbai）；
            课程/考证兑换请查看流程：
            <Link href="https://asktug.com/t/topic/1012912" fontSize="14px">
              课程/考证兑换码
            </Link>
            。
          </Tutorial>
          <Styled.PointsContainerInner>
            <div>
              <Styled.PointsContainerLabel>可用积分</Styled.PointsContainerLabel>
              <Styled.PointsContainerValue>{pointsData?.current_points}</Styled.PointsContainerValue>
            </div>
            <Link href="redeem/records">兑换记录</Link>
          </Styled.PointsContainerInner>
        </Styled.PointsContainer>

        <Modal title="确认订单" visible={isModalVisible} footer={null} onCancel={handleCancel}>
          <FormComponent />
        </Modal>

        <Row gutter={[16, 16]}>
          {productsDataOrdered.map((product) => (
            <Col xs={12} md={8} lg={6}>
              <Styled.Product>
                <Styled.ProductImage src={product.cover_url} />
                <Styled.ProductLine>{product.name}</Styled.ProductLine>
                <Styled.ProductLine red={product.remains > 0} gray>
                  {product.points} 积分 (剩余 {product.remains} 件)
                </Styled.ProductLine>
                <Button
                  type="default"
                  onClick={showModal(product.id)}
                  disabled={pointsData.current_points < product.points || product.remains === 0}
                >
                  立即兑换
                </Button>
              </Styled.Product>
            </Col>
          ))}
        </Row>
      </Layout>
    </FormModalContext.Provider>
  );
};
export default Page;
