import React from 'react';
import Layout from '~/pages/member/layout';
import * as Styled from './index.styled';
import Anchor from '~/components/Anchor';

const Page = () => (
  <Layout>
    <Styled.Container>
      <h1 className="title">TiDB 社区经验值 & 积分获取指南（新）</h1>
      <h2 className="subtitle">TiDB 社区简介</h2>
      TiDB社区是由 TiDB
      生态中的开发者、用户、Contributor、合作伙伴一起建立的分享、学习平台。在这里，我们可以自由发声，互相协助解决问题。很荣幸
      TiDB 社区建立初期中有很多小伙伴参与贡献，才有了现在的 TiDB 社区。 为了给 TiDB
      社区成员们带来更好的体验及福利，回馈大家对社区的突出贡献，TiDB
      社区推出经验值&amp;积分体系也在逐步完善，以下内容将会介绍整个经验值 &amp; 积分体系，包括如何获取经验值 &amp;
      积分，积分如何兑换礼品等。
      <h2 className="subtitle">一、经验值及等级说明</h2>
      目前， TiDB 社区体系试运营中，社区的所有成员可以通过签到、发布文章、回答问题、点赞分享等多种方式快速获得社区经验值
      &amp; 积分，还可以随心所欲的使用积分来兑换超值的 TiDB 周边礼品、下载资料及参与社区某些特定活动等。
      经验值、等级、荣誉称号的对应关系如下：
      <table cellSpacing="0" cellPadding="0" border="1">
        <tbody>
          <tr>
            <td>用户等级</td>
            <td>经验值</td>
            <td>荣誉称号</td>
          </tr>
          <tr>
            <td>V1</td>
            <td>1 ~ 49</td>
            <td rowSpan="5">无称号</td>
          </tr>
          <tr>
            <td>V2</td>
            <td>50 ~ 99</td>
          </tr>
          <tr>
            <td>V3</td>
            <td>100 ~ 199</td>
          </tr>
          <tr>
            <td>V4</td>
            <td>200 ~ 499</td>
          </tr>
          <tr>
            <td>V5</td>
            <td>500 ~ 999</td>
          </tr>
          <tr>
            <td>V6</td>
            <td>1000 ~ 1999</td>
            <td rowSpan="2">初级贡献者</td>
          </tr>
          <tr>
            <td>V7</td>
            <td>2000 ~ 4999</td>
          </tr>
          <tr>
            <td>V8</td>
            <td>5000 ~ 9999</td>
            <td>中级贡献者</td>
          </tr>
          <tr>
            <td>V9</td>
            <td>10000 ~ 19999</td>
            <td>高级贡献者</td>
          </tr>
          <tr>
            <td>V10</td>
            <td>20000 ~ 49999</td>
            <td rowSpan="2">荣誉贡献者</td>
          </tr>
          <tr>
            <td>V11</td>
            <td>50000 以上</td>
          </tr>
        </tbody>
      </table>
      ps：荣誉称号：不同的称号可以获得不同的权益及称号徽章（待上线）
      <h2 className="subtitle">二、积分的作用</h2>
      社区成员获得积分后，可以在<Anchor href="https://accounts.pingcap.com/points#/shop">积分商城中</Anchor>
      兑换 TiDB 周边礼品、PCTA/PCTP 考证等，还可参与抽奖，资料下载、召唤 TiDB 社区专家答疑、参与活动等。
      <Anchor href="https://accounts.pingcap.com/points#/shop">可点击兑换入口</Anchor>
      直达兑换礼品页面，如果你对积分兑换有任何想法，
      <Anchor href="https://forms.pingcap.com/f/833aba14-99cd-48b9-a969-fc35e790fbe6">
        请点击参加周边定制意见征集
      </Anchor>
      ，想兑换什么，你说了算。
      <h2 className="subtitle">三、如何获得经验值 & 积分</h2>
      <table cellSpacing="0" cellPadding="0" border="1">
        <tbody>
          <tr>
            <td>类型</td>
            <td>奖励行为事件</td>
            <td>经验值奖励</td>
            <td>积分奖励</td>
            <td>每天最多奖励次数</td>
            <td>说明</td>
          </tr>
          <tr>
            <td>
              完成<Anchor href="/my/company">公司信息</Anchor>填写
            </td>
            <td>50</td>
            <td>50</td>
            <td>仅第一次完善信息奖励</td>
            <td />
          </tr>
          <tr>
            <td>
              完成<Anchor href="/my/profile">个人信息</Anchor>填写
            </td>
            <td>20</td>
            <td>20</td>
            <td>仅第一次完善信息奖励</td>
            <td />
          </tr>
          <tr>
            <td>
              绑定 <Anchor href="/my/settings">Github</Anchor> 账号
            </td>
            <td>10</td>
            <td>20</td>
            <td>仅第一次绑定账号奖励</td>
            <td>
              Contributor 在绑定成功后将自动授予：
              <Anchor href="https://asktug.com/badges/111/-">Contributor 专属徽章</Anchor>
            </td>
          </tr>
          <tr>
            <td>
              绑定<Anchor href="/my/settings">邮箱</Anchor>
            </td>
            <td>10</td>
            <td>20</td>
            <td>仅第一次绑定邮箱奖励</td>
            <td>
              绑定邮箱之后将可解锁 TiDB
              社区每周精选邮件推送功能，第一时间获得社区精选资讯(热门问答+干货技术文章+活动推荐)。
            </td>
          </tr>
          <tr>
            <td>
              绑定<Anchor href="/my/settings">手机号码</Anchor>
            </td>
            <td>10</td>
            <td>20</td>
            <td>仅第一次绑定手机号码奖励</td>
            <td>绑定手机号码是为了方便紧急情况下，社区技术老师可以第一时间与你取得联系，协助解决技术问题。</td>
          </tr>
          <tr>
            <td>
              <Anchor href="/member#/summary">签到</Anchor>
            </td>
            <td>2 ~ 5</td>
            <td>2 ~ 5</td>
            <td>1</td>
            <td>
              <Anchor href="/member#/summary">点击『签到』</Anchor>领取奖励, 签到 1 天奖励 2 分；连续签到 2 天奖励 3
              分；连续签到 3 天及以上奖励 5 分，断签重新开始。
            </td>
          </tr>
          <tr>
            <td rowSpan="7">
              <Anchor href="https://asktug.com">AskTUG 技术问题（TiDB 技术问题、应用开发者专区、其他技术问题）</Anchor>
            </td>
            <td>发布问题帖子</td>
            <td>5</td>
            <td>5</td>
            <td>10</td>
            <td>需按照要求发布到对应的问题需求板块中，被删除扣除对应积分及经验。</td>
          </tr>
          <tr>
            <td>回答问题</td>
            <td>8</td>
            <td>8</td>
            <td>10</td>
            <td>无效回复被删除后，扣除对应积分及经验。</td>
          </tr>
          <tr>
            <td>回答问题被选为『最佳答案』</td>
            <td>15</td>
            <td>15</td>
            <td>10</td>
            <td>把自己的回复设置为 『最佳答案』 时不会获得奖励。</td>
          </tr>
          <tr>
            <td>为 自发帖子 标记『最佳答案』</td>
            <td>5</td>
            <td>5</td>
            <td>10</td>
            <td>为自己发布的帖子标记『最佳答案』时奖励，把自己的回复设置为『最佳答案』时不会获得奖励。</td>
          </tr>
          <tr>
            <td>帖子被点赞</td>
            <td>2</td>
            <td>2</td>
            <td>10</td>
            <td>不可给自己点赞，赞被取消后，也会扣除对应的积分及经验。</td>
          </tr>
          <tr>
            <td>帖子被引用</td>
            <td>5</td>
            <td>10</td>
            <td>10</td>
            <td>被引用的内容会给帖子原作者增加积分。</td>
          </tr>
          <tr>
            <td>帖子被推荐置顶</td>
            <td>10</td>
            <td>20</td>
            <td>3</td>
            <td>被管理员推荐置顶。</td>
          </tr>
          <tr>
            <td rowSpan="5">
              <Anchor href="/blog">专栏</Anchor>
            </td>
            <td>发布技术文章&amp;专栏</td>
            <td>100 ~ 200</td>
            <td>100 ~ 200</td>
            <td>不限制</td>
            <td>
              <Anchor href="/blog">专栏：发布入口</Anchor>，发布规则参考：
              <Anchor href="/blog/66c5e81b">专栏技术文章发布指南&amp;指引</Anchor>
            </td>
          </tr>
          <tr>
            <td>文章被点赞</td>
            <td>2</td>
            <td>2</td>
            <td>10</td>
            <td>不可给自己点赞，赞被取消后，也会扣除对应的积分及经验。</td>
          </tr>
          <tr>
            <td>文章被收藏</td>
            <td>5</td>
            <td>5</td>
            <td>10</td>
            <td>自己收藏自己的专栏（技术文章）不给分。</td>
          </tr>
          <tr>
            <td>文章被引用</td>
            <td>5</td>
            <td>10</td>
            <td>10</td>
            <td>被引用的专栏（技术文章）会给原作者增加积分。</td>
          </tr>
          <tr>
            <td>文章被推荐置顶</td>
            <td>10</td>
            <td>20</td>
            <td>3</td>
            <td>被管理员推荐置顶。</td>
          </tr>
          <tr>
            <td rowSpan="8">课程学习</td>
            <td>完成 101-TiDB 快速起步课程学习</td>
            <td>50</td>
            <td>50</td>
            <td>仅 1 次</td>
            <td>
              <Anchor href="https://learn.pingcap.com/learner/course/6">点击学习</Anchor>
            </td>
          </tr>
          <tr>
            <td>完成 201-TiDB 集群的架构与特点课程学习</td>
            <td>50</td>
            <td>50</td>
            <td>仅 1 次</td>
            <td>
              <Anchor href="https://learn.pingcap.com/learner/course/600003">点击学习</Anchor>
            </td>
          </tr>
          <tr>
            <td>完成 301-TiDB 系统管理基础课程学习</td>
            <td>50</td>
            <td>50</td>
            <td>仅 1 次</td>
            <td>
              <Anchor href="https://learn.pingcap.com/learner/course/30002">点击学习</Anchor>
            </td>
          </tr>
          <tr>
            <td>完成 302-TiDB 高级系统管理课程学习</td>
            <td>100</td>
            <td>100</td>
            <td>仅 1 次</td>
            <td>
              <Anchor href="https://learn.pingcap.com/learner/course/120005">点击学习</Anchor>
            </td>
          </tr>
          <tr>
            <td>完成 304-TiDB 性能调优案例课程学习</td>
            <td>50</td>
            <td>50</td>
            <td>仅 1 次</td>
            <td>
              <Anchor href="https://learn.pingcap.com/learner/course/570012">点击学习</Anchor>
            </td>
          </tr>
          <tr>
            <td>完成 307-TiDB 性能调优课程学习</td>
            <td>100</td>
            <td>100</td>
            <td>仅 1 次</td>
            <td>
              <Anchor href="https://learn.pingcap.com/learner/course/540005">点击学习</Anchor>
            </td>
          </tr>
          <tr>
            <td>完成 305-TiDB 故障排除案例课程学习</td>
            <td>50</td>
            <td>50</td>
            <td>仅 1 次</td>
            <td>
              <Anchor href="https://learn.pingcap.com/learner/course/690007">点击学习</Anchor>
            </td>
          </tr>
          <tr>
            <td>完成 308-TiDB 故障排除课程学习</td>
            <td>100</td>
            <td>100</td>
            <td>仅 1 次</td>
            <td>暂未上线</td>
          </tr>
          <tr>
            <td rowSpan="6">
              <Anchor href="https://tidb.net/talent-plan">Talent Plan</Anchor>
            </td>
            <td>参加 Talent Plan</td>
            <td>20</td>
            <td>20</td>
            <td>仅 1 次</td>
            <td>授予 “Talent Plan”徽章</td>
          </tr>
          <tr>
            <td>提出有价值 BUG 功能建议</td>
            <td>30</td>
            <td>30</td>
            <td>5</td>
            <td></td>
          </tr>
          <tr>
            <td>解决 ISSUE</td>
            <td>80</td>
            <td>80</td>
            <td>无上限</td>
            <td></td>
          </tr>
          <tr>
            <td>通过 Talent Plan 某个完整路径作业</td>
            <td>100 ~ 500</td>
            <td>100 ~ 500</td>
            <td>仅 1 次</td>
            <td></td>
          </tr>
          <tr>
            <td>成为 Talent Plan 分享导师</td>
            <td>100</td>
            <td>100</td>
            <td>仅 1 次</td>
            <td></td>
          </tr>
          <tr>
            <td>参加 Talent Plan 辅导活动</td>
            <td>100</td>
            <td>100</td>
            <td>仅 1 次</td>
            <td></td>
          </tr>
          <tr>
            <td rowSpan="4">
              <Anchor href="https://learn.pingcap.com/learner/certification-center">认证</Anchor>
            </td>
            <td>通过从业者认证</td>
            <td>100</td>
            <td>100</td>
            <td>仅 1 次</td>
            <td>
              <Anchor href="https://learn.pingcap.com/learner/exam-market/list?category=%E4%BB%8E%E4%B8%9A%E8%80%85">从业者考试</Anchor>
            </td>
          </tr>
          <tr>
            <td>通过 PCTA 认证</td>
            <td>200</td>
            <td>200</td>
            <td>仅 1 次</td>
            <td>
              <Anchor href="https://learn.pingcap.com/learner/exam-market/list?category=PCTA">PCTA 考试</Anchor>
            </td>
          </tr>
          <tr>
            <td>通过 PCTP 认证</td>
            <td>500</td>
            <td>500</td>
            <td>仅 1 次</td>
            <td>
              <Anchor href="https://learn.pingcap.com/learner/exam-market/list?category=PCTP">PCTP 考试</Anchor>
            </td>
          </tr>
          <tr>
            <td>通过 PCSD 认证</td>
            <td>350</td>
            <td>350</td>
            <td>仅 1 次</td>
            <td>
              <Anchor href="https://learn.pingcap.com/learner/exam-market/list?category=PCSD">PCSD 考试</Anchor>
            </td>
          </tr>
        </tbody>
      </table>
      <h2 className="subtitle">四、新增追加奖励入口</h2>
      在原有获得经验值&amp;积分奖励基础上，TiDB 社区追加奖励入口，新增奖励以下行为事件，请把对应的证据截图发到邮箱：
      <a href="mailto:huangmanshen@pingcap.com">huangmanshen@pingcap.com</a>
      ，相关工作人员会在1-3个工作日内审核，并给予一定的经验值&amp;积分奖励。
      <table cellSpacing="0" cellPadding="0" border="1">
        <tbody>
          <tr>
            <td rowSpan="2">类型</td>
            <td rowSpan="2">新增奖励行为事件</td>
            <td colSpan="2">奖励</td>
            <td rowSpan="2">最多奖励次数</td>
            <td rowSpan="2">说明</td>
          </tr>
          <tr>
            <td>经验值</td>
            <td>积分</td>
          </tr>
          <tr>
            <td rowSpan="6">参加 &amp; 发起活动</td>
            <td>发起活动</td>
            <td>50 ~ 150</td>
            <td>50 ~ 150</td>
            <td>不限制</td>
            <td>主动发起话题活动，并组织宣传至活动完整落地。</td>
          </tr>
          <tr>
            <td>参加线上会议</td>
            <td>10</td>
            <td>20</td>
            <td>不限制</td>
            <td />
          </tr>
          <tr>
            <td>参加线下活动</td>
            <td>40</td>
            <td>80</td>
            <td>不限制</td>
            <td />
          </tr>
          <tr>
            <td>出席线上线下活动并担任讲师</td>
            <td>100</td>
            <td>200</td>
            <td>不限制</td>
            <td />
          </tr>
          <tr>
            <td>接受社区采访或访谈</td>
            <td>60</td>
            <td>120</td>
            <td>不限制</td>
            <td />
          </tr>
          <tr>
            <td>宣讲分享 TiDB</td>
            <td>50 ~ 500</td>
            <td>100 ~ 1000</td>
            <td>不限制</td>
            <td />
          </tr>
          <tr>
            <td rowSpan="6">参与贡献 TiDB</td>
            <td>在任何平台输出文章分享 TiDB</td>
            <td>100 ~ 200</td>
            <td>100 ~ 200</td>
            <td>不限制</td>
            <td />
          </tr>
          <tr>
            <td>在 TiDB 社区输出技术文章</td>
            <td>100 ~ 200</td>
            <td>100 ~ 200</td>
            <td>不限制</td>
            <td />
          </tr>
          <tr>
            <td>授权 TiDB 社区对优质文章进行转发传播</td>
            <td>100 ~ 200</td>
            <td>100 ~ 200</td>
            <td>不限制</td>
            <td>
              传播渠道包括但不限制于以下渠道： 1、AskTUG 全栈置顶资源位 2、知乎「TiDB 后花园」专栏收录 3、TiDB
              社区其他渠道，如公众号、自媒体渠道、CSDN、掘金、思否、开源中国等技术社区
            </td>
          </tr>
          <tr>
            <td>上传示例程序 &amp; 技术视频</td>
            <td>20 ~ 100</td>
            <td>20 ~ 100</td>
            <td>不限制</td>
            <td />
          </tr>
          <tr>
            <td>产出教学视频</td>
            <td>100 ~ 500</td>
            <td>100 ~ 500</td>
            <td>不限制</td>
            <td />
          </tr>
          <tr>
            <td>编写书籍</td>
            <td>100 ~ 1000</td>
            <td>100 ~ 1000</td>
            <td>不限制</td>
            <td />
          </tr>
          <tr>
            <td rowSpan="8">参与改进 TiDB</td>
            <td>新版本内测</td>
            <td>100</td>
            <td>100</td>
            <td>不限制</td>
            <td />
          </tr>
          <tr>
            <td>提交完整的产品缺陷路径</td>
            <td>100</td>
            <td>100</td>
            <td>不限制</td>
            <td>
              在<Anchor href="https://asktug.com/c/advice-feedback/bugs">【建议&amp;反馈·产品缺陷】</Anchor>
              提交BUG复现步骤，后经确认为BUG，并无其他成员提交相同BUG时奖励
            </td>
          </tr>
          <tr>
            <td>协助产品缺陷优化</td>
            <td>100 ~ 2000</td>
            <td>100 ~ 2000</td>
            <td>不限制</td>
            <td />
          </tr>
          <tr>
            <td>提交完整的产品需求</td>
            <td>10</td>
            <td>10</td>
            <td>不限制</td>
            <td>
              在<Anchor href="https://asktug.com/c/advice-feedback/requirements">【建议&amp;反馈·产品需求】</Anchor>
              按提示提交完整的产品需求
            </td>
          </tr>
          <tr>
            <td>协助产品需求开发及验证</td>
            <td>200 ~ 1000</td>
            <td>200 ~ 1000</td>
            <td>不限制</td>
            <td />
          </tr>
          <tr>
            <td>周边工具测试</td>
            <td>100</td>
            <td>100</td>
            <td>不限制</td>
            <td>产出测评文章</td>
          </tr>
          <tr>
            <td>参与产品需求调研</td>
            <td>50 ~ 100</td>
            <td>50 ~ 100</td>
            <td>不限制</td>
            <td />
          </tr>
          <tr>
            <td>撰写、修改、优化文档</td>
            <td>50</td>
            <td>50</td>
            <td>不限制</td>
            <td />
          </tr>
          <tr>
            <td rowSpan="2">其他</td>
            <td>年度 MVA</td>
            <td>300</td>
            <td>300</td>
            <td>评选上年度 MVA 时奖励，不限次数</td>
            <td>在一年内（自然年）为 TiDB 社区贡献优质技术内容分享达到 3 个及以上，即可当选 TiDB 社区年度 MVA。</td>
          </tr>
          <tr>
            <td>年度 MOA</td>
            <td>500</td>
            <td>500</td>
            <td>评选上年度 MOA 时奖励，不限次数</td>
            <td>在一年内（自然年）为 TiDB 社区贡献优质技术内容达到 10 个及以上，即可当选 TiDB 社区年度 MOA。</td>
          </tr>
        </tbody>
      </table>
      PS:
      <ul>
        <li>如果发现利用 BUG 或其他手段获取积分，管理员有权对该会员的积分进行处理。</li>
        <li>正常的消耗积分行为，不会减少等级经验。但如果是被惩罚扣分，也会扣除同样份额的等级经验</li>
      </ul>
    </Styled.Container>
  </Layout>
);

export default Page;
