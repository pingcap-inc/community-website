import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import { Form, Select, Button, Col, Row, Skeleton, message, Modal, AutoComplete } from 'antd';
import { ExclamationCircleOutlined, SafetyOutlined } from '@ant-design/icons';

import { getFormData } from '@tidb-community/datasource';

import * as Styled from './form.styled';
import { profile, update } from '~/api/me';
import { fetchOrganizationOptions } from '~/utils/form.utils';

const formData = getFormData();
const { personalPositions } = formData.org.enums;

const FormComponent = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [companyName, setCompanyName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [companyOptions, setCompanyOptions] = useState<{ label: string; value: string }[]>([]);

  const { data, error, mutate } = useSWR('/api/profile', profile);
  const isLoading = !error && !data;

  useEffect(() => {
    setCompanyName(data?.data?.company_name ?? '');
    setJobTitle(data?.data?.job_title ?? '');
  }, [data]);

  const handleSubmit = () => {
    Modal.confirm({
      title: '更新公司信息',
      icon: <ExclamationCircleOutlined />,
      content: '更新公司信息需要重新进行认证，确认更新吗？',
      okText: '确认',
      cancelText: '取消',
      onOk: async () => {
        if (companyName === '' || jobTitle === '') {
          message.error('请先完善公司信息');
          return;
        }
        setIsSubmitting(true);
        try {
          await update({
            company_name: companyName,
            job_title: jobTitle,
          });
        } catch (error) {
          console.error(error);
          await message.success('公司信息更新失败，错误原因：', error);
        }
        await mutate();
        setIsSubmitting(false);
        await message.success('公司信息更新成功');
      },
    });
  };

  const handleSearch = async (keyword: string) => {
    const options = await fetchOrganizationOptions(keyword);
    setCompanyOptions(options);
  };

  if (isLoading) return <Skeleton active />;

  return (
    <Form layout="vertical">
      <Row gutter={32}>
        <Col xs={24} md={12}>
          <Form.Item label={<Styled.Label>公司名称</Styled.Label>}>
            <AutoComplete
              value={companyName}
              onChange={setCompanyName}
              placeholder={'请输入'}
              maxLength={128}
              onSearch={handleSearch}
              options={companyOptions}
            />
          </Form.Item>

          <Form.Item label="职位">
            <Select
              value={jobTitle}
              onChange={(value) => setJobTitle(value)}
              placeholder={'请选择'}
              options={personalPositions}
            />
          </Form.Item>

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
