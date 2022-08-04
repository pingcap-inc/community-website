import * as React from 'react';
import { useMemo, useState } from 'react';
import { Checkbox, Col, Input, message, Modal, Radio, Row, Space } from 'antd';
import useSWR from 'swr';
import { UploadOutlined } from '@ant-design/icons';

import * as Styled from './CompanyVerification.styled';
import { useTimer } from '~/hooks/timer';
import VerificationIcon from './verification_icon.svg';
import type { UploadFile } from 'antd/es/upload/interface';
import { companySendCode, companyVerifyByEmail, companyVerifyByFile, ECompanyVerifiedStatus, profile } from '~/api/me';

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {}

const CompanyVerification: React.FC<IProps> = (props) => {
  const { children, ...rest } = props;

  const [email, setEmail] = useState('');
  const [verifyCode, setVerifyCode] = useState('');

  const [sendVerifyCodeLoading, setSendVerifyCodeLoading] = useState(false);
  const { remainSecond, reset, hasRemain } = useTimer();
  const handleSendVerifyCode = async () => {
    setSendVerifyCodeLoading(true);
    const result = await companySendCode(email);
    const { detail } = result.data;
    switch (detail) {
      case 'success': {
        message.success('验证码已发送成功');
        reset();
        break;
      }
      case 'rate limit': {
        message.error('发送频率过快，请稍候再试');
        break;
      }
      case 'params error': {
        message.error('Email 错误');
        break;
      }
      case 'application has already been submitted': {
        message.error('公司认证状态不是 “未认证”, 无法操作申请相关接口');
        break;
      }
      default: {
        message.error('未知错误');
        break;
      }
    }
    setSendVerifyCodeLoading(false);
  };

  const [validateBy, setValidateBy] = useState<'email' | 'file'>('email');

  const { data } = useSWR('/api/profile', profile);

  const validateByEmailNode = (
    <Row gutter={[16, 16]}>
      <Col sm={24} md={12}>
        <Input placeholder={'请输入企业邮箱'} value={email} onChange={(event) => setEmail(event.target.value)} />
      </Col>
      <Col sm={24} md={12}>
        <Input
          placeholder={'请输入验证码'}
          value={verifyCode}
          onChange={(event) => setVerifyCode(event.target.value)}
          suffix={
            <Styled.SendVerifyCodeButton
              onClick={handleSendVerifyCode}
              loading={sendVerifyCodeLoading}
              disabled={hasRemain}
            >
              {hasRemain ? `重新获取(${remainSecond}秒)` : '获取验证码'}
            </Styled.SendVerifyCodeButton>
          }
        />
      </Col>
    </Row>
  );

  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const validateByFileNode = (
    <div>
      <Styled.UploadBox
        maxCount={1}
        multiple={false}
        beforeUpload={() => false}
        fileList={fileList}
        onChange={({ file }) => {
          setFileList([file]);
        }}
      >
        <UploadOutlined /> 上传文件
      </Styled.UploadBox>
      <Styled.Description>
        请提供飞书、钉钉、企业微信等办公软件的名片截图，或工牌照片，或在职证明（需手写仅用于 TiDB Community
        认证字样，并加盖企业公章）；信息清晰可见，内容真实有效，不得做任何修改；支持 .jpg .jpeg .bmp .png
        格式，大小不超过 5 M。
      </Styled.Description>
    </div>
  );

  const [checked, setChecked] = useState(false);
  const disabled = useMemo(() => {
    const emailValid = validateBy === 'email' && email !== '' && verifyCode !== '';
    const fileValid = validateBy === 'file' && fileList.length === 1;
    return !(checked && (emailValid || fileValid));
  }, [checked, email, fileList.length, validateBy, verifyCode]);

  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const handleOk = async () => {
    setConfirmLoading(true);
    let result;
    switch (validateBy) {
      case 'email': {
        //axios post email and verify code
        result = await companyVerifyByEmail(email, verifyCode);
        break;
      }
      case 'file': {
        const file = fileList[0];
        if (file) {
          //@ts-ignore
          result = await companyVerifyByFile(file);
        }
        break;
      }
    }
    const { detail } = result?.data;
    switch (detail) {
      case 'success': {
        message.success('认证申请提交成功');
        setVisible(false);
        break;
      }
      case 'params error': {
        message.error('Email 错误');
        break;
      }
      case 'application has already been submitted': {
        message.error('公司认证状态不是 “未认证”, 无法操作申请相关接口');
        break;
      }
      default: {
        message.error('未知错误');
        break;
      }
    }
    setConfirmLoading(false);
  };
  const handleCancel = () => {
    setVisible(false);
  };

  const status: ECompanyVerifiedStatus = data?.data.company_verified_status;
  let buttonNode: React.ReactNode = undefined;
  switch (status) {
    case ECompanyVerifiedStatus.unVerified: {
      buttonNode = (
        <Styled.UnVerifiedButton type={'primary'} onClick={() => setVisible(true)}>
          立即认证
        </Styled.UnVerifiedButton>
      );
      break;
    }
    case ECompanyVerifiedStatus.pending: {
      buttonNode = <Styled.VerifyPendingButton>审核中</Styled.VerifyPendingButton>;
      break;
    }
    case ECompanyVerifiedStatus.verified: {
      buttonNode = <Styled.VerifiedButton>已认证</Styled.VerifiedButton>;
      break;
    }
  }

  return (
    <>
      <Styled.Container {...rest}>
        <Styled.Start>
          <VerificationIcon />
        </Styled.Start>
        <Styled.Center>
          <Styled.Title>认证公司信息</Styled.Title>
          <Styled.Description>首次认证成功可获得 100 积分奖励；</Styled.Description>
          <Styled.Description>更新认证信息，审核通过后可获得 50 积分奖励。</Styled.Description>
        </Styled.Center>
        <Styled.End>{buttonNode}</Styled.End>
      </Styled.Container>

      <Modal
        visible={visible}
        title="认证信息"
        onOk={handleOk}
        onCancel={handleCancel}
        okText="提交"
        cancelText="取消"
        confirmLoading={confirmLoading}
        okButtonProps={{ disabled }}
      >
        <Space size={16} direction={'vertical'}>
          <Radio.Group value={validateBy} onChange={(event) => setValidateBy(event.target.value)}>
            <Radio value={'email'}>企业邮箱认证</Radio>
            <Radio value={'file'}>飞书、钉钉、企业微信、工牌、在职证明</Radio>
          </Radio.Group>
          {validateBy === 'email' ? validateByEmailNode : validateByFileNode}
          <Checkbox checked={checked} onChange={(event) => setChecked(event.target.checked)}>
            我已阅读并同意{' '}
            <Styled.PrivacyPolicyAnchor href={'https://pingcap.com/zh/privacy-policy'}>
              《隐私协议》
            </Styled.PrivacyPolicyAnchor>
          </Checkbox>
        </Space>
      </Modal>
    </>
  );
};
export default CompanyVerification;
