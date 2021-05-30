import React from 'react';
import moment from 'moment';
import useSWR from 'swr';
import { Button, Col, Row, Skeleton, Tooltip, Form as AntForm } from 'antd';
import { Form, Input, Select } from 'formik-antd';
import { Formik } from 'formik';
import { QuestionCircleOutlined } from '@ant-design/icons';

import * as Styled from './form.styled';
import { form, schema } from './form.data';

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

const DatePicker = ({ dateOfBirth, ...props }) => (
  <Styled.DatePicker
    {...props}
    format={dateFormat}
    defaultValue={dateOfBirth && moment(dateOfBirth, dateFormat)}
    disabledDate={(currentDate) => {
      return currentDate.isAfter(moment());
    }}
  />
);

const FormComponent = () => {
  const { data: profileResp, error } = useSWR('profile');
  const isLoading = !error && !profileResp;

  if (isLoading) return <Skeleton />;

  const { data } = profileResp;

  const onSubmit = (e) => {
    console.log(e);
  };

  const { username, bio, name, gender, dateOfBirth, address } = form;

  return (
    <Formik validationSchema={schema} validateOnChange onSubmit={onSubmit}>
      <Form layout="vertical">
        <Row gutter={32}>
          <Col sm={24} md={12}>
            <Item label={<UserName />} name={username.name}>
              <Input {...username} defaultValue={data.username} />
            </Item>

            <Item label="简介" name={bio.name}>
              <Input.TextArea {...bio} showCount maxLength={140} defaultValue={data.bio} />
            </Item>

            <Item label="姓名" name={name.name}>
              <Input {...name} defaultValue={data.name} />
            </Item>

            <Row gutter={32}>
              <Col sm={24} md={10}>
                <Item label="性别" name={gender.name}>
                  <Select {...gender} defaultValue={data.gender}>
                    <Option value={0}>男</Option>
                    <Option value={1}>女</Option>
                  </Select>
                </Item>
              </Col>
              <Col sm={24} md={14}>
                <Item label="出生日期" name={dateOfBirth.name}>
                  <DatePicker {...dateOfBirth} dateOfBirth={data.date_of_birth} />
                </Item>
              </Col>
            </Row>

            <Item label="地址" name={address.name}>
              <Input {...address} defaultValue={data.address} />
            </Item>

            <Button type="primary">更新信息</Button>
          </Col>

          <Col sm={24} md={12}>
            <AntForm.Item label="头像">
              <Styled.Avatar src={data.avatar_url} />
            </AntForm.Item>
          </Col>
        </Row>
      </Form>
    </Formik>
  );
};

export default FormComponent;
