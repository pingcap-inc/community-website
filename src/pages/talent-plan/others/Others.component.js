import React from 'react';

import { Styled as CommonStyled } from '@tidb-community/ui';

import * as Styled from './others.styled';

const Others = () => {
  return (
    <Styled.Container>
      <Styled.Content>
        <CommonStyled.Title>其他资源</CommonStyled.Title>
        <ul>
          <li>
            如果你对分布式数据库比较陌生，建议先从 PingCAP Education 学习网站{' '}
            <Styled.Link href="https://learn.pingcap.com/learner/course/600003">101 课程</Styled.Link>{' '}
            开始入手。你也可以通过神码制作的
            <Styled.Link href="https://www.bilibili.com/video/BV1Zh411i7Tp/?spm_id_from=333.337.search-card.all.click&vd_source=448ecb3691855b619da9f75851b12964">
              分布式数据库应用
            </Styled.Link>
            和
            <Styled.Link href="https://www.bilibili.com/video/BV1S14y1P7Mb/?spm_id_from=333.337.search-card.all.click&vd_source=448ecb3691855b619da9f75851b12964">
              分布式数据库开发
            </Styled.Link>
            了解数据库实现。
          </li>
          <li>
            <Styled.Link href="https://pingcap.com/zh/blog/?tag=TiDB%20%E6%BA%90%E7%A0%81%E9%98%85%E8%AF%BB,TiKV%20%E6%BA%90%E7%A0%81%E8%A7%A3%E6%9E%90">
              TiDB 源码阅读
            </Styled.Link>
            应该对你的 Talent Plan 学习有所帮助。
          </li>
          <li>
            <Styled.Link href="https://github.com/pingcap/awesome-database-learning">Awesome-db-learning</Styled.Link>{' '}
            收集了数据库和分布式存储方向的优质论文、博文、书籍和课程。希望能助你一臂之力。
          </li>
          <li>
            如果希望对 TiDB 有深入了解，可以参考{' '}
            <Styled.Link href="https://github.com/tidb-incubator/tidb-in-action">TiDB in Action</Styled.Link>
          </li>
          <li>
            如果希望对产业界如何使用 NewSQL 数据库，可以参考{' '}
            <Styled.Link href="https://github.com/pingcap/presentations">TiDB社区资料集锦</Styled.Link>
          </li>
        </ul>
      </Styled.Content>
    </Styled.Container>
  );
};

export default Others;
