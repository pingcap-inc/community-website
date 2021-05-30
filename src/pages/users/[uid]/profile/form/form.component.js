import React from 'react';
import moment from 'moment';
import { Button, Col, Row, Form, Input, Select, Tooltip } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

import * as Styled from './form.styled';

const { Item } = Form;
const { Option } = Select;

const dateFormat = 'YYYY/MM/DD';

const UserName = () => (
  <Styled.UserName>
    用户名
    <Tooltip placement="right" title="每 30 天可修改一次">
      <QuestionCircleOutlined />
    </Tooltip>
  </Styled.UserName>
);

const DatePicker = ({ dateOfBirth }) => (
  <Styled.DatePicker
    placeholder="年/月/日"
    format={dateFormat}
    defaultValue={dateOfBirth && moment(dateOfBirth, dateFormat)}
    disabledDate={(currentDate) => {
      return currentDate.isAfter(moment());
    }}
  />
);

const FormComponent = ({ data = {} }) => {
  return (
    <Form layout="vertical">
      <Row gutter={32}>
        <Col sm={24} md={12}>
          <Item label={<UserName />}>
            <Input placeholder="请输入" defaultValue={data.username} />
          </Item>

          <Item label="简介">
            <Input.TextArea placeholder="介绍一下你自己吧" showCount maxLength={140} defaultValue={data.bio} />
          </Item>

          <Item label="姓名">
            <Input placeholder="请填写真实姓名" defaultValue={data.name} />
          </Item>

          <Row gutter={32}>
            <Col sm={24} md={10}>
              <Item label="性别">
                <Select defaultValue={data.gender} placeholder="请选择">
                  <Option value={0}>男</Option>
                  <Option value={1}>女</Option>
                </Select>
              </Item>
            </Col>
            <Col sm={24} md={14}>
              <Item label="出生日期">
                <DatePicker dateOfBirth={data.date_of_birth} />
              </Item>
            </Col>
          </Row>

          <Item label="地址">
            <Input placeholder="请填写详细地址" defaultValue={data.address} />
          </Item>

          <Button type="primary">更新信息</Button>
        </Col>

        <Col sm={24} md={12}>
          <Item label="头像">
            <Styled.Avatar src={data.avatar_url} />
          </Item>
        </Col>
      </Row>
    </Form>
  );
};

export default FormComponent;
