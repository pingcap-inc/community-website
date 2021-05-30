import React from 'react';
import useSWR from 'swr';
import { Button, Col, Row, Form, Input, Skeleton, Select } from 'antd';
import { getFormData } from '@tidb-community/datasource';

const formData = getFormData();
const { personalPositions } = formData.org.enums;
const { Option } = Select;

const FormComponent = () => {
  const { data: profileResp, error } = useSWR('profile');
  const isLoading = !error && !profileResp;

  if (isLoading) return <Skeleton />;

  const { data } = profileResp;

  return (
    <Form layout="vertical">
      <Row gutter={32}>
        <Col sm={24} md={12}>
          <Form.Item label="公司名称">
            <Input placeholder="请输入" defaultValue={data.company_name} />
          </Form.Item>

          <Form.Item label="职位">
            <Select placeholder="请选择" defaultValue={data.job_title}>
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
  );
};

export default FormComponent;
