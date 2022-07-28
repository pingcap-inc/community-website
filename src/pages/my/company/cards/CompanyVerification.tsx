import * as React from 'react';

import * as Styled from './CompanyVerification.styled';
import { Button, Checkbox, Col, Input, Modal, Radio, Row, Space } from 'antd';
import { useState } from 'react';

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {}

const CompanyVerification: React.FC<IProps> = (props) => {
  //function Verification.component(props: IProps) {
  const { children, ...rest } = props;
  const [visible, setVisible] = useState(false);
  const handleOk = (event: React.MouseEvent) => {
    setVisible(false);
  };
  const handleCancel = (event: React.MouseEvent) => {
    setVisible(false);
  };
  const [validateBy, setValidateBy] = useState<'email' | 'file'>('email');
  const validateByEmailNode = (
    <Row gutter={16}>
      <Col span={12}>
        <Input placeholder={'请输入企业邮箱'} />
      </Col>
      <Col span={12}>
        <Input placeholder={'请输入验证码'} suffix={<div>获取验证码</div>} />
      </Col>
    </Row>
  );
  const validateByFileNode = (
    <Row gutter={16}>
      <Col span={12}>
        <Input placeholder={'请输入企业邮箱'} />
      </Col>
      <Col span={12}>
        <Input placeholder={'请输入验证码'} suffix={<div>获取验证码</div>} />
      </Col>
    </Row>
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

      <Modal visible={visible} title="认证信息" onOk={handleOk} onCancel={handleCancel} okText="提交" cancelText="取消">
        <Space size={16} direction={'vertical'}>
          <Radio.Group value={validateBy} onChange={(event) => setValidateBy(event.target.value)}>
            <Radio value={'email'}>企业邮箱认证</Radio>
            <Radio value={'file'}>飞书、钉钉、企业微信、工牌、在职证明</Radio>
          </Radio.Group>
          {validateBy === 'email' ? validateByEmailNode : validateByFileNode}
          <Checkbox>我已阅读并同意《隐私协议》</Checkbox>
        </Space>
      </Modal>
    </>
  );
};
export default CompanyVerification;
