import React from 'react';
import { Link } from '@tidb-community/ui';

import { BannerContent, BannerImage } from './banner.styled';

const Banner = () => {
  return (
    <BannerContent>
      <BannerImage />
      <p>
        完成认证即可解锁<b>「加急」处理问题</b>权限，让问题<b>获得「更快速」</b>的响应
        <br />
        完成认证还可获得 200 积分、200 经验值，以及专属的「认证会员」徽章
      </p>
      <p>邀请团队成员加入，可以获得：</p>
      <ul>
        <li>共享团队空间，及时同步团队问题的处理进度；</li>
        <li>共享“加急”权限；</li>
        <li>邀请团队成员免认证。</li>
      </ul>
      <p>
        更多详细信息，点击
        <Link href="https://asktug.com/t/topic/93140">认证前 vs 认证后权益对比</Link>，
        <Link href="https://asktug.com/t/topic/93405">团队认证操作指南</Link>
        查看
      </p>
    </BannerContent>
  );
};

export default Banner;
