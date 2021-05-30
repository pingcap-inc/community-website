import React from 'react';
import { Button, Col, Row, Form, Input, Select } from 'antd';
import { getFormData } from '@tidb-community/datasource';

const formData = getFormData();
const { personalPositions } = formData.org.enums;
const { Option } = Select;

const FormComponent = ({ data = {} }) => {
  return (
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
  );
};

export default FormComponent;
