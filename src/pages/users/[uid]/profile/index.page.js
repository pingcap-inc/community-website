import React from 'react';
import useSWR from 'swr';
import { Button, Col, Row, Form, Input } from 'antd';

import * as Styled from './profile.styled';
import Layout from '~/pages/users/layout';
import { CommunityHead } from '~/components/head';

const pageTitle = '公司信息';

const Profile = () => {
  const { data = {} } = useSWR('profile');

  return (
    <>
      <CommunityHead title={pageTitle} />

      <Layout title="个人信息">
        <Form layout="vertical">
          <Row gutter={32}>
            <Col sm={24} md={12}>
              <Form.Item label="用户名">
                <Input placeholder="请输入" defaultValue={data.username} />
              </Form.Item>

              <Form.Item label="简介">
                <Input.TextArea placeholder="介绍一下你自己吧" showCount maxLength={140} defaultValue={data.bio} />
              </Form.Item>

              <Form.Item label="姓名">
                <Input placeholder="请填写真实姓名" />
              </Form.Item>

              <Row gutter={32}>
                <Col sm={24} md={10}>
                  <Form.Item label="性别">
                    <Input placeholder="" />
                  </Form.Item>
                </Col>
                <Col sm={24} md={14}>
                  <Form.Item label="出生日期">
                    <Styled.DatePicker placeholder="年/月/日" format="YYYY/MM/DD" src={data.avatar_url} />
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item label="地址">
                <Input placeholder="请填写详细地址" />
              </Form.Item>

              <Button type="primary">更新信息</Button>
            </Col>

            <Col sm={24} md={12}>
              <Form.Item label="头像">
                <Styled.Avatar />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Layout>
    </>
  );
};

export default Profile;
