import { api } from '@tidb-community/datasource';
import { withVerifyCode } from '@tidb-community/ui';
import { Button, Checkbox, Col, Input, message, Result, Row } from 'antd';
import { Formik } from 'formik';
import { FormItem } from 'formik-antd';
import React, { useState } from 'react';
import * as Yup from 'yup';
import {
  SupportContainer,
  SupportForm,
  SupportFormDescription,
  SupportFormRequiredLabel,
} from '~/pages/support/_components/SupportForm';
import { form as formUtils } from '~/utils';

type UnauthorizedFormValues = {
  name: string;
  company: string;
  consult_detail: string;
  phone: string;
  phone_code: string;
};

const INITIAL_VALUES: UnauthorizedFormValues = { name: '', company: '', consult_detail: '', phone: '', phone_code: '' };

const fields = {
  name: {
    placeholder: '输入您的姓名',
    name: 'name',
  },
  company: {
    placeholder: '请输入您的公司名',
    name: 'company',
  },
  consult_detail: {
    placeholder: '请添加描述',
    name: 'consult_detail',
  },
  phone: {
    placeholder: '请输入手机号',
    name: 'phone',
  },
  phone_code: {
    placeholder: '验证码',
    name: 'phone_code',
  },
};

const unauthorizedSchema = Yup.object({
  phone: Yup.string().required('请输入手机号'),
  phone_code: Yup.string().required('请输入验证码'),
  name: Yup.string().min(2, '请输入有效姓名').required('未填写姓名'),
  company: Yup.string().min(2, '请输入有效公司名').required('未填写公司'),
  consult_detail: Yup.string(),
});

const authorizedSchema = Yup.object({
  name: Yup.string().min(2, '请输入有效姓名').required('未填写姓名'),
  company: Yup.string().min(2, '请输入有效公司名').required('未填写公司'),
  consult_detail: Yup.string(),
});

const VerifyCodeInput = withVerifyCode(Input);

export function SupportFormContent({ authorized }: { authorized: boolean }) {
  const [agree, setAgree] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [succeed, setSucceed] = useState(false);

  const onSubmit = formUtils.wrapFormikSubmitFunction((values) => {
    setIsSubmitting(true);

    return api.support
      .submitSupportForm({
        ...values,
      })
      .then(() => {
        message.success('提交成功');
        setSucceed(true);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  });

  if (!succeed) {
    return (
      <SupportContainer>
        <Result
          status="success"
          title="提交成功"
          subTitle={
            <>
              提交成功！我们将在 <b>1 个工作日内</b> 和您联系，为您提供所需的商业支持和咨询服务。感谢您对 TiDB
              的信任与支持，期待与您的进一步交流。
            </>
          }
        />
      </SupportContainer>
    );
  }

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validationSchema={authorized ? authorizedSchema : unauthorizedSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <SupportForm onSubmit={formik.handleSubmit}>
          <SupportFormDescription>
            为了更好地为您提供商业支持和个性化服务，请填写以下信息。我们承诺保护您的隐私，并仅将信息用于提供服务，我们将在
            1 个工作日内和您联系。
          </SupportFormDescription>
          <Row gutter={8}>
            {!authorized && (
              <Col xs={24}>
                <Row gutter={16}>
                  <Col xs={18}>
                    <FormItem
                      name="phone"
                      colon={false}
                      label={<SupportFormRequiredLabel>手机号</SupportFormRequiredLabel>}
                      labelCol={{ xs: 24 }}
                      labelAlign={'left'}
                    >
                      <Input id="phone" {...fields.phone} onChange={formik.handleChange} disabled={isSubmitting} />
                    </FormItem>
                  </Col>
                  <Col xs={6}>
                    <FormItem
                      name="phone_code"
                      label={<>&nbsp;</>}
                      colon={false}
                      labelCol={{ xs: 24 }}
                      labelAlign={'left'}
                    >
                      <VerifyCodeInput
                        id="phone_code"
                        {...fields.phone_code}
                        onChange={formik.handleChange}
                        sendVerifyCode={async () => api.support.sendPhoneCode({ phone: formik.values.phone })}
                        limitSeconds={60}
                        buttonDisabled={!formik.values.phone}
                        sendVerifyCodeBtnText="发送"
                        initialLimited={false}
                        countDownFormatter={(a) => `${a}`}
                        disabled={isSubmitting}
                      />
                    </FormItem>
                  </Col>
                </Row>
              </Col>
            )}
            <Col xs={24} md={12}>
              <FormItem
                name="name"
                colon={false}
                label={<SupportFormRequiredLabel>姓名</SupportFormRequiredLabel>}
                labelCol={{ xs: 24 }}
                labelAlign={'left'}
              >
                <Input id="name" {...fields.name} onChange={formik.handleChange} disabled={isSubmitting} />
              </FormItem>
            </Col>
            <Col xs={24} md={12}>
              <FormItem
                name="company"
                colon={false}
                labelCol={{ xs: 24 }}
                label={<SupportFormRequiredLabel>公司</SupportFormRequiredLabel>}
                labelAlign={'left'}
              >
                <Input id="company" {...fields.company} onChange={formik.handleChange} disabled={isSubmitting} />
              </FormItem>
            </Col>
            <Col xs={24}>
              <FormItem
                name="consult_detail"
                colon={false}
                labelCol={{ xs: 24 }}
                label={<SupportFormRequiredLabel>咨询事宜（非必填）</SupportFormRequiredLabel>}
                labelAlign={'left'}
              >
                <Input.TextArea
                  id="consult_detail"
                  {...fields.consult_detail}
                  onChange={formik.handleChange}
                  disabled={isSubmitting}
                />
              </FormItem>
            </Col>
          </Row>
          <Button disabled={!agree || !formik.isValid} style={{ marginTop: 16 }} type="primary" htmlType="submit" block>
            确认
          </Button>
          <Checkbox
            style={{ marginTop: 8 }}
            checked={agree}
            onChange={(ev) => setAgree(ev.target.checked)}
            disabled={isSubmitting}
          >
            我已阅读并同意{' '}
            <a
              style={{ textDecoration: 'underline' }}
              href="https://www.pingcap.cn/privacy-policy"
              target="_blank"
              rel="noopener"
            >
              《隐私协议》
            </a>
          </Checkbox>
        </SupportForm>
      )}
    </Formik>
  );
}
