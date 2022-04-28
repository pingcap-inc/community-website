import * as R from 'ramda';
import React, { useContext, useEffect, useState } from 'react';
import { Button, Col, message, Row } from 'antd';
import { Form, FormItem, Input } from 'formik-antd';
import { Formik } from 'formik';
import { api } from '@tidb-community/datasource';

import * as Styled from './form.styled';
import { fields, schema } from './form.fields';
// @ts-ignore
import { form as formUtils } from '~/utils';
// @ts-ignore
import { FormModalContext } from '../index.page';

const FormComponent = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { productId, setOpen } = useContext(FormModalContext);

  const { receiver, verificationCode, phoneNumber, address, comment } = fields;

  const onSubmit = formUtils.wrapFormikSubmitFunction((values) => {
    setIsSubmitting(true);
    // @ts-ignore
    return api.points
      .redeem({
        product_id: productId,
        consignee_name: values['receiver'],
        consignee_phone: values['phoneNumber'],
        consignee_phone_code: values['verificationCode'],
        consignee_addrss: values['address'],
        comment: values['comment'],
      })
      .then((res) => {
        (res.data.redeem_success ? message.success : message.error).call(message, res.data.comment);
        setOpen(false);
      })
      .catch((err) => {
        if (typeof err.errors != undefined) message.error(R.values(err.errors).join(', '));
        else message.error(err.detail);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  });

  const initialValues = {
    [receiver.name]: '',
    [verificationCode.name]: '',
    [phoneNumber.name]: '',
    [address.name]: '',
    [comment.name]: '',
  };

  const formikProps = {
    initialValues,
    onSubmit,
    validationSchema: schema,
  };

  const [codeAvailable, setCodeAvailable] = useState(true);

  const [timeLeft, setTimeLeft] = useState(0);
  useEffect(() => {
    if (timeLeft === 0) {
      setCodeAvailable(true);
      return;
    }
    setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
  }, [timeLeft]);

  const sendCode = (formik) => {
    return api.points
      .sendCode(formik.values['phoneNumber'])
      .then(() => {
        setTimeLeft(60);
        setCodeAvailable(false);
        message.success('发送成功');
      })
      .catch(() => {
        setTimeLeft(60);
        setCodeAvailable(false);
        message.error('发送失败');
      });
  };

  return (
    <Formik {...formikProps}>
      {(formik) => (
        <Form layout="vertical">
          <Row gutter={32}>
            <Col xs={24}>
              <FormItem
                label={<Styled.Label>{receiver.placeholder}</Styled.Label>}
                name={receiver.name}
                validate={receiver.validate}
              >
                <Input {...receiver} />
              </FormItem>
            </Col>

            <Col xs={24}>
              <FormItem
                label={<Styled.Label>{phoneNumber.placeholder}</Styled.Label>}
                name={phoneNumber.name}
                validate={phoneNumber.validate}
              >
                <Input {...phoneNumber} />
              </FormItem>
            </Col>

            <Col xs={24}>
              <FormItem
                label={<Styled.Label>{verificationCode.placeholder}</Styled.Label>}
                name={verificationCode.name}
                validate={verificationCode.validate}
              >
                <Row gutter={16} justify="space-between">
                  <Col flex={1}>
                    <Input {...verificationCode} />
                  </Col>
                  <Col>
                    <Button
                      size="small"
                      disabled={phoneNumber.validate(formik.values['phoneNumber']) !== undefined || !codeAvailable}
                      onClick={() => sendCode(formik)}
                    >
                      {codeAvailable ? '发送验证码' : timeLeft}
                    </Button>
                  </Col>
                </Row>
              </FormItem>
            </Col>

            <Col xs={24}>
              <FormItem
                label={<Styled.Label>{address.placeholder}</Styled.Label>}
                name={address.name}
                validate={address.validate}
              >
                <Input {...address} />
              </FormItem>
            </Col>

            <Col xs={24}>
              <FormItem
                label={<Styled.Label>{comment.label}</Styled.Label>}
                name={comment.name}
                validate={comment.validate}
              >
                <Input {...comment} />
              </FormItem>
            </Col>
          </Row>
          <Row justify="space-between">
            <Col>
              <Button
                type="primary"
                htmlType="submit"
                size="small"
                disabled={!R.isEmpty(formik.errors)}
                loading={isSubmitting}
              >
                提交
              </Button>
            </Col>

            <Col>
              <Button size="small" onClick={() => setOpen(false)}>
                取消
              </Button>
            </Col>
          </Row>
        </Form>
      )}
    </Formik>
  );
};

export default FormComponent;
