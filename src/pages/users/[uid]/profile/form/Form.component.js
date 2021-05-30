import * as R from 'ramda';
import React, { useState } from 'react';
import moment from 'moment';
import useSWR from 'swr';
import { Button, Col, Row, Skeleton, Tooltip, Form as AntForm, message } from 'antd';
import { Form, Input, Select } from 'formik-antd';
import { Formik } from 'formik';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { api } from '@tidb-community/datasource';
import { useRouter } from 'next/router';

import * as Styled from './form.styled';
import { form as formUtils } from '~/utils';
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

const DatePicker = (props) => (
  <Styled.DatePicker
    {...props}
    format={dateFormat}
    disabledDate={(currentDate) => {
      return currentDate.isAfter(moment());
    }}
  />
);

const FormComponent = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { data: profileResp, error } = useSWR('profile.fetch');

  const isLoading = !error && !profileResp;
  if (isLoading) return <Skeleton />;

  const { uid } = router.query;
  const { data } = profileResp;
  const { username, bio, name, gender, dateOfBirth, address } = form;

  const bioMaxLength = 140;

  const initialValues = {
    [username.name]: data.username,
    [bio.name]: data.bio?.substr(0, bioMaxLength),
    [name.name]: data.name,
    [gender.name]: data.gender,
    [dateOfBirth.name]: data.date_of_birth && moment(data.date_of_birth, dateFormat),
    [address.name]: data.address,
  };

  const onSubmit = formUtils.wrapFormikSubmitFunction((values) => {
    const { username } = values;
    setIsSubmitting(true);
    return formUtils.getRecaptchaToken().then((re_token_v3) => {
      return api.profile
        .update({
          ...values,
          re_token_v3,
        })
        .then(() => {
          message.success('个人信息更新成功');
          if (username !== uid) {
            router.push(`/users/${username}/profile`);
          }
        })
        .finally(() => {
          setIsSubmitting(false);
        });
    });
  });

  const formikProps = {
    initialValues,
    onSubmit,
    validationSchema: schema,
  };

  return (
    <Formik {...formikProps}>
      {({ errors }) => (
        <Form layout="vertical">
          <Row gutter={32}>
            <Col sm={24} md={12}>
              <Item label={<UserName />} name={username.name}>
                <Input {...username} />
              </Item>

              <Item label="简介" name={bio.name}>
                <Input.TextArea {...bio} showCount maxLength={bioMaxLength} />
              </Item>

              <Item label="姓名" name={name.name}>
                <Input {...name} />
              </Item>

              <Row gutter={32}>
                <Col sm={24} md={10}>
                  <Item label="性别" name={gender.name}>
                    <Select {...gender}>
                      <Option value={0}>男</Option>
                      <Option value={1}>女</Option>
                    </Select>
                  </Item>
                </Col>
                <Col sm={24} md={14}>
                  <Item label="出生日期" name={dateOfBirth.name}>
                    <DatePicker {...dateOfBirth} />
                  </Item>
                </Col>
              </Row>

              <Item label="地址" name={address.name}>
                <Input {...address} />
              </Item>

              <Button type="primary" htmlType="submit" disabled={!R.isEmpty(errors)} loading={isSubmitting}>
                更新信息
              </Button>
            </Col>

            <Col sm={24} md={12}>
              <AntForm.Item label="头像">
                <Styled.Avatar src={data.avatar_url} />
              </AntForm.Item>
            </Col>
          </Row>
        </Form>
      )}
    </Formik>
  );
};

export default FormComponent;
