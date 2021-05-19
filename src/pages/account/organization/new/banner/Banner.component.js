import React from 'react';

import { BannerContent, BannerImage } from './banner.styled';

const Banner = () => {
  return (
    <BannerContent>
      <BannerImage />
      <p>完成认证，方便社区专家更好地处理您的问题。</p>
      <p>认证通过后，将会授予”认证会员“徽章并奖励：经验值200分，积分200分，同时你将享有以下权限：</p>
      <ul>
        <li>学习交流</li>
        <li>培训&认证</li>
        <li>名企直推</li>
      </ul>
      <p>共建社区、挣企业经验值，获取更多优享权益：</p>
      <ul>
        <li>产品咨询：产品技术，业务架构，开发运维</li>
        <li>业务指导：PoC 指导，架构规划，上线指导，版本升级 & 扩容咨询，重点保障</li>
        <li>故障排查：日常问答、紧急救援</li>
        <li>交流学习：社区 VIP 用户线下活动</li>
      </ul>
    </BannerContent>
  );
};

export default Banner;
