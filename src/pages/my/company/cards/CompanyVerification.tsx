import * as React from 'react';
import { useMemo, useState } from 'react';
import { Button, Checkbox, Col, Input, message, Modal, Radio, Row, Space } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

import * as Styled from './CompanyVerification.styled';
import { sleep } from '~/utils/datetime.utils';
import type { UploadFile } from 'antd/es/upload/interface';
import { useTimer } from '~/hooks/timer';
import VerificationIcon from './verification_icon.svg';

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {}

const CompanyVerification: React.FC<IProps> = (props) => {
  //function Verification.component(props: IProps) {
  const { children, ...rest } = props;

  const [email, setEmail] = useState('');
  const [verifyCode, setVerifyCode] = useState('');

  const [sendVerifyCodeLoading, setSendVerifyCodeLoading] = useState(false);
  const { remainSecond, reset, hasRemain } = useTimer();
  const handleSendVerifyCode = async () => {
    setSendVerifyCodeLoading(true);
    await sleep(2000);
    reset();
    message.success('验证码已发送成功');
    setSendVerifyCodeLoading(false);
  };

  const [validateBy, setValidateBy] = useState<'email' | 'file'>('email');
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
        onChange={(event) => {
          console.log({ event });
          setFileList(event.fileList);
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
    switch (validateBy) {
      case 'email': {
        //axios post email and verify code
        break;
      }
      case 'file': {
        const formData = new FormData();
        formData.append('file', fileList[0]);
        //post formData
        break;
      }
    }
    await sleep(2000);
    setVisible(false);
    setConfirmLoading(false);
  };
  const handleCancel = () => {
    setVisible(false);
  };

  const status: 'unverified' | 'pending' | 'verified' = 'unverified';
  let buttonNode: React.ReactNode = undefined;
  switch (status) {
    case 'unverified': {
      buttonNode = (
        <Button type={'primary'} onClick={() => setVisible(true)}>
          立即认证
        </Button>
      );
      break;
    }
    case 'pending': {
      buttonNode = (
        <Button type={'primary'} disabled>
          审核中
        </Button>
      );
      break;
    }
    case 'verified': {
      buttonNode = (
        <Button type={'primary'} onClick={() => setVisible(true)}>
          已认证
        </Button>
      );
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
          <Checkbox value={checked} onChange={(event) => setChecked(event.target.checked)}>
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
