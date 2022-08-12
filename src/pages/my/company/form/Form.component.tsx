import React, { useEffect, useMemo, useRef, useState } from 'react';
import useSWR from 'swr';
import { Form, Select, Button, Col, Row, Skeleton, message, Modal, Input, Spin } from 'antd';
import { ExclamationCircleOutlined, SafetyOutlined } from '@ant-design/icons';

import { getFormData } from '@tidb-community/datasource';

import * as Styled from './form.styled';
import { ECompanyVerifiedStatus, profile, update } from '~/api/me';
import { fetchOrganizationOptions } from '~/utils/form.utils';
import debounce from 'lodash/debounce';

const formData = getFormData();
const { personalPositions } = formData.org.enums;

const FormComponent = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [companyName, setCompanyName] = useState('');
  const [companyNameOther, setCompanyNameOther] = useState('');
  const [jobTitle, setJobTitle] = useState('');

  const { data, error, mutate } = useSWR('/api/profile', profile);
  const isLoading = !error && !data;

  useEffect(() => {
    setCompanyName(data?.data?.company_name ?? '');
    setJobTitle(data?.data?.job_title ?? '');
  }, [data]);

  const handleSubmit = () => {
    const onOk = async () => {
      setIsSubmitting(true);
      try {
        await update({
          company_name: companyName === '其它' ? companyNameOther : companyName ?? '',
          job_title: jobTitle ?? '',
        });
      } catch (error) {
        console.error(error);
        await message.success('公司信息更新失败，错误原因：', error);
      }
      await mutate();
      setIsSubmitting(false);
      message.success('公司信息更新成功');
    };

    const status: ECompanyVerifiedStatus = data?.data.company_verified_status;
    if (status === ECompanyVerifiedStatus.verified) {
      Modal.confirm({
        title: '更新公司信息',
        icon: <ExclamationCircleOutlined />,
        content: '更新公司信息需要重新进行认证，确认更新吗？',
        okText: '确认',
        cancelText: '取消',
        onOk,
      });
    } else {
      onOk();
    }
  };

  const fetchOptions = fetchOrganizationOptions;
  const debounceTimeout = 800;
  const [isFetching, setIsFetching] = useState(false);
  const [options, setOptions] = useState<{ value: string; label: string }[]>([]);
  const fetchRef = useRef(0);
  const handleSearch = useMemo(() => {
    const loadOptions = (value) => {
      fetchRef.current += 1;
      const fetchId = fetchRef.current;

      setOptions([]);
      setIsFetching(true);

      fetchOptions(value).then((options) => {
        // fetch is asynchronous, so the condition will make sure the
        // callback only updates for its own fetcher
        if (fetchId !== fetchRef.current) {
          return;
        }
        setOptions(options.concat({ value: '其它' }));
        setIsFetching(false);
      });
    };
    return debounce(loadOptions, debounceTimeout);
  }, [fetchOptions]);

  if (isLoading) return <Skeleton active />;

  return (
    <Form layout="vertical">
      <Row gutter={32}>
        <Col xs={24} md={12}>
          <Form.Item label={<Styled.Label>公司名称</Styled.Label>}>
            <Select
              allowClear
              showSearch
              filterOption={false}
              notFoundContent={isFetching ? <Spin size="small" /> : null}
              value={companyName === '' ? undefined : companyName}
              placeholder={'请选择所在的公司'}
              maxLength={128}
              onChange={(value) => setCompanyName(value)}
              onSearch={handleSearch}
              options={options}
            />
          </Form.Item>

          {companyName === '其它' && (
            <Form.Item>
              <Input
                value={companyNameOther}
                onChange={(event) => setCompanyNameOther(event.target.value)}
                placeholder={'请输入所在的公司'}
                maxLength={128}
              />
            </Form.Item>
          )}

          <Form.Item label="职位">
            <Select
              allowClear
              value={jobTitle === '' ? undefined : jobTitle}
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
