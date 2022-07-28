import * as React from 'react';

import * as Styled from './CompanyVerification.styled';
import { Button, Checkbox, Col, Input, Modal, Radio, Row, Space, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { Description, SendVerifyCodeButton, UploadBox } from './CompanyVerification.styled';
import { sleep } from '~/utils/datetime.utils';
import Anchor from '~/components/Anchor';

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {}

const CompanyVerification: React.FC<IProps> = (props) => {
  //function Verification.component(props: IProps) {
  const { children, ...rest } = props;
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const handleOk = async (event: React.MouseEvent) => {
    setConfirmLoading(true);
    await sleep(2000);
    setVisible(false);
    setConfirmLoading(false);
  };
  const handleCancel = (event: React.MouseEvent) => {
    setVisible(false);
  };

  const [sendVerifyCodeLoading, setSendVerifyCodeLoading] = useState(false);
  const handleSendVerifyCode = async (event: React.MouseEvent) => {
    setSendVerifyCodeLoading(true);
    await sleep(2000);
    setSendVerifyCodeLoading(false);
  };

  const [validateBy, setValidateBy] = useState<'email' | 'file'>('email');
  const validateByEmailNode = (
    <Row gutter={16}>
      <Col span={12}>
        <Input placeholder={'请输入企业邮箱'} />
      </Col>
      <Col span={12}>
        <Input
          placeholder={'请输入验证码'}
          suffix={
            <Styled.SendVerifyCodeButton onClick={handleSendVerifyCode} loading={sendVerifyCodeLoading}>
              获取验证码
            </Styled.SendVerifyCodeButton>
          }
        />
      </Col>
    </Row>
  );
  const validateByFileNode = (
    <div>
      <Styled.UploadBox>
        <UploadOutlined /> 上传文件
      </Styled.UploadBox>
      <Styled.Description>
        请提供飞书、钉钉、企业微信等办公软件的名片截图，或工牌照片，或在职证明（需手写仅用于 TiDB Community
        认证字样，并加盖企业公章）；信息清晰可见，内容真实有效，不得做任何修改；支持 .jpg .jpeg .bmp .png
        格式，大小不超过 5 M。
      </Styled.Description>
    </div>
  );
  return (
    <>
      <Styled.Container {...rest}>
        <Styled.Start></Styled.Start>
        <Styled.Center>
          <Styled.Title>认证公司信息</Styled.Title>
          <Styled.Description>需要 1~3 个工作日，认证后可获得 200 积分</Styled.Description>
        </Styled.Center>
        <Styled.End>
          <Button type={'primary'} onClick={() => setVisible(true)}>
            立即认证
          </Button>
        </Styled.End>
      </Styled.Container>

      <Modal
        visible={visible}
        title="认证信息"
        onOk={handleOk}
        onCancel={handleCancel}
        okText="提交"
        cancelText="取消"
        confirmLoading={confirmLoading}
      >
        <Space size={16} direction={'vertical'}>
          <Radio.Group value={validateBy} onChange={(event) => setValidateBy(event.target.value)}>
            <Radio value={'email'}>企业邮箱认证</Radio>
            <Radio value={'file'}>飞书、钉钉、企业微信、工牌、在职证明</Radio>
          </Radio.Group>
          {validateBy === 'email' ? validateByEmailNode : validateByFileNode}
          <Checkbox>
            我已阅读并同意 <Anchor href={'https://pingcap.com/zh/privacy-policy'}>《隐私协议》</Anchor>
          </Checkbox>
        </Space>
      </Modal>
    </>
  );
};
export default CompanyVerification;
