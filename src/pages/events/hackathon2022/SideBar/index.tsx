import * as React from 'react';
import { useRef } from 'react';
import classNames from 'classnames';
import Image from 'next/image';
import { Space, Tooltip } from 'antd';

import Anchor from '~/components/Anchor';

import * as Styled from './index.styled';
import SignupSvg from './signup.svg';
import WechatSvg from './wechat.svg';
import { signUpFormUrl } from '../data';
import qrCodeImage from '../Header/qrcode.jpg';

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {}

const SideBar: React.FC<IProps> = (props) => {
  //function index(props: IProps) {
  const { children, className, ...rest } = props;
  const tooltipContainerRef = useRef(null);
  return (
    <Styled.Container ref={tooltipContainerRef} className={classNames(className)} {...rest}>
      <Space size={20} direction={'vertical'}>
        <Anchor href={signUpFormUrl}>
          <Styled.Item>
            <Styled.ItemIcon>
              <SignupSvg />
            </Styled.ItemIcon>
            <Styled.ItemLabel>立即报名</Styled.ItemLabel>
          </Styled.Item>
        </Anchor>
        <Tooltip
          placement="left"
          color={'#FFF'}
          trigger={['click', 'focus']}
          title={
            <div style={{ textAlign: 'center' }}>
              <Image {...qrCodeImage} />
              <p style={{ color: '#000' }}>扫码添加小助手进群</p>
            </div>
          }
          getPopupContainer={() => tooltipContainerRef.current}
        >
          <Styled.Item>
            <Styled.ItemIcon>
              <WechatSvg />
            </Styled.ItemIcon>
            <Styled.ItemLabel>加入官方群</Styled.ItemLabel>
          </Styled.Item>
        </Tooltip>
      </Space>
    </Styled.Container>
  );
};

export default SideBar;
