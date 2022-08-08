import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import { Form, FormItem, Select, Button, Col, Row, Skeleton, message, Modal, AutoComplete } from 'antd';
import { ExclamationCircleOutlined, SafetyOutlined } from '@ant-design/icons';

import { api, getFormData } from '@tidb-community/datasource';

import * as Styled from './form.styled';
import { profile } from '~/api/me';

const formData = getFormData();
const { personalPositions } = formData.org.enums;

const FormComponent = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [companyName, setCompanyName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const { data: profileResp, error, mutate } = useSWR('/api/profile', profile);
  const isLoading = !error && !profileResp;

  const { data } = profileResp;

  useEffect(() => {
    setCompanyName(data.companyName);
    setJobTitle(data.jobTitle);
  }, [data]);

  const handleSubmit = () => {
    Modal.confirm({
      title: '更新公司信息',
      icon: <ExclamationCircleOutlined />,
      content: '更新公司信息需要重新进行认证，确认更新吗？',
      okText: '确认',
      cancelText: '取消',
      onOk: async () => {
        setIsSubmitting(true);
        try {
          await api.profile.update({
            company_name: companyName,
            job_title: jobTitle,
          });
        } catch (error) {
          console.error(error);
          await message.success('公司信息更新失败，错误原因：', error);
        }
        await mutate();
        await message.success('公司信息更新成功');
        setIsSubmitting(false);
      },
    });
  };

  if (isLoading) return <Skeleton active />;

  return (
    <Form layout="vertical">
      <Row gutter={32}>
        <Col xs={24} md={12}>
          <FormItem label={<Styled.Label>公司名称</Styled.Label>}>
            <AutoComplete value={companyName} onChange={setCompanyName} placeholder={'请输入'} maxLength={128} />
          </FormItem>

          <FormItem label="职位">
            <Select
              value={jobTitle}
              onChange={(event) => setJobTitle(event.value)}
              placeholder={'请选择'}
              options={personalPositions}
            />
          </FormItem>

          <Button
            type="primary"
            ghost
            htmlType="submit"
            size="small"
            // disabled={!R.isEmpty(errors)}
            loading={isSubmitting}
            onClick={handleSubmit}
          >
            更新信息
          </Button>
        </Col>

        <Col xs={24} md={12} />
      </Row>
      <Styled.Description>
        <SafetyOutlined /> TiDB 社区保护你的个人隐私，此信息为非公开状态
      </Styled.Description>
    </Form>
  );
};

export default FormComponent;
