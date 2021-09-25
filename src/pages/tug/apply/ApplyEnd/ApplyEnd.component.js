import React, { useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import { Modal, Button } from 'antd';
import { api } from '@tidb-community/datasource';

import * as Styled from './applyEnd.styled';
import Form from './form';

const SuccessModal = (props) => (
  <Modal title="提交成功！" {...props}>
    <p>
      我们将于 3 个工作日内对您提交的材料进行审核，并以【AskTUG 私信】形式告知您结果。
      若审核通过，【微信小助手】将添加您为好友并邀请您进入 TUG 专属交流群，敬请留意。
    </p>
    <p>【AskTUG 私信】位置：社区导航栏 - 问答论坛 - 右上角头像下拉 - 私信</p>
  </Modal>
);

const ApplyEnd = (props) => {
  const router = useRouter();
  const [successModal, showSuccessModal] = useState(false);
  const [failModal, showFailModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [fieldMessage, setFieldMessage] = useState();

  const FailModal = useCallback(
    (props) => (
      <Modal title="提交失败" {...props}>
        <p>{errorMessage ?? 'System Error'}</p>
        {!!fieldMessage && (
          <ul>
            {Object.keys(fieldMessage).map((key) => (
              <li key={key}>
                {key}: {fieldMessage[key].join(', ')}
              </li>
            ))}
          </ul>
        )}
      </Modal>
    ),
    [errorMessage, fieldMessage]
  );

  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = (data) => {
    setIsSubmitting(true);
    api.tug
      .apply(data)
      .then((response) => {
        showSuccessModal(true);
      })
      .catch((error) => {
        setIsSubmitting(false);
        setErrorMessage(error.detail);
        setFieldMessage(error.errors);
        showFailModal(true);
      });
  };

  const handleSuccess = () => {
    router.push('/tug');
  };

  return (
    <Styled.Wrapper id="form">
      <Form onSubmit={handleSubmit} isSubmitting={isSubmitting} />
      <SuccessModal
        visible={successModal}
        onOk={() => showSuccessModal(false)}
        afterClose={handleSuccess}
        footer={
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button key="back" type="primary" onClick={() => showSuccessModal(false)}>
              确认
            </Button>
          </div>
        }
      />
      <FailModal
        visible={failModal}
        onOk={() => showFailModal(false)}
        errorMessage={errorMessage}
        footer={
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button key="back" type="primary" onClick={() => showFailModal(false)}>
              确认
            </Button>
          </div>
        }
      />
    </Styled.Wrapper>
  );
};

export default ApplyEnd;
