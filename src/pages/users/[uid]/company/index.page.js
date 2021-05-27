import Link from 'next/link';
import React from 'react';
import { Button, Col, Row, Form, Input, Select } from 'antd';
import { getFormData } from '@tidb-community/datasource';

import * as Styled from './company.styled';
import Layout from '~/pages/users/layout';
import { CommunityHead } from '~/components/head';

const pageTitle = '公司信息';
const formData = getFormData();
const { personalPositions } = formData.org.enums;
const { Option } = Select;

const Company = () => (
  <>
    <CommunityHead title={pageTitle} />

    <Layout title={pageTitle}>
      <Styled.Alert
        type="info"
        showIcon
        message={
          <>
            完成公司信息填写可 +20 积分，完成认证可以获得 +200 经验值，+200 积分
            <Link href="/account/organization/new">点击完成认证</Link>
          </>
        }
      />

      <Form layout="vertical">
        <Row gutter={32}>
          <Col sm={24} md={12}>
            <Form.Item label="公司名称">
              <Input placeholder="请输入" />
            </Form.Item>

            <Form.Item label="职位">
              <Select placeholder="请选择">
                {personalPositions.map(({ value, label }) => (
                  <Option key={value} value={value}>
                    {label}
                  </Option>
                ))}
              </Select>
            </Form.Item>

            <Button type="primary">更新信息</Button>
          </Col>

          <Col sm={24} md={12} />
        </Row>
      </Form>
    </Layout>
  </>
);

export default Company;
