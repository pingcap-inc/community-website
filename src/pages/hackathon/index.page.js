import * as Styled from './index.styled';
import { FAQCollapsePanel, getImage, ProcedureCardsGroup } from './index.styled';
import { CoreLayout } from '~/layouts';
import { Col, Image, Row } from 'antd';
import { useIsSmallScreen } from '~/hooks';
import _ from 'lodash';
import { handleRedirect } from '~/utils/link.utils';
import { useRouter } from 'next/router';
import { useState } from 'react';

const SectionTitle = ({ children }) => (
  <Styled.SectionTitle>
    <Styled.SectionTitleBackground />
    {children}
  </Styled.SectionTitle>
);

const ProcedureCard = ({ title, date, desc, buttonText, buttonLink, sm }) => (
  <>
    {!sm && <Styled.ProcedureCardDivider />}
    <Styled.ProcedureCardWrapper isSmallScreen={sm}>
      <Styled.ProcedureCard>
        <Styled.ProcedureCardGradientSlice />
        <Styled.ProcedureCardTitle>{title}</Styled.ProcedureCardTitle>
        <Styled.ProcedureCardDate>{date}</Styled.ProcedureCardDate>
        <Styled.ProcedureCardDescription>{desc}</Styled.ProcedureCardDescription>
        <Styled.ProcedureCardButton href={buttonLink}>{buttonText}</Styled.ProcedureCardButton>
      </Styled.ProcedureCard>
    </Styled.ProcedureCardWrapper>
  </>
);

const Prize = ({ title, reward, count, src, huge }) => {
  return (
    <Styled.Prize src={src}>
      <Styled.PrizeTitle huge={huge}>{title}</Styled.PrizeTitle>
      <Styled.PrizeReward>{reward}</Styled.PrizeReward>
      <Styled.PrizeCount>{count}</Styled.PrizeCount>
    </Styled.Prize>
  );
};

const BenefitCard = ({ icon, content }) => {
  return (
    <Styled.BenefitCardWrapper>
      <Styled.BenefitCard>
        <Styled.BenefitCardIcon src={icon} />
        <Styled.BenefitCardContent>{content}</Styled.BenefitCardContent>
      </Styled.BenefitCard>
    </Styled.BenefitCardWrapper>
  );
};

const JudgeCard = ({ name, desc, src, detail }) => {
  return (
    <Styled.JudgeCard src={src}>
      <Styled.JudgeCardOverlay>{detail}</Styled.JudgeCardOverlay>
      <Styled.JudgeCardContent>
        <Styled.JudgeCardName>{name}</Styled.JudgeCardName>
        <Styled.JudgeCardDescription>{desc}</Styled.JudgeCardDescription>
      </Styled.JudgeCardContent>
    </Styled.JudgeCard>
  );
};

const groupsData = [
  {
    name: '工具组',
    desc: '对 TiDB 部署运维、数据流转（数据迁移、数据复制、全量导入导出）、集群容灾、诊断和可视化等配套工具的优化或新创意。',
  },
  {
    name: '内核组',
    desc: '为 TiDB、TiKV、PD 性能、稳定性、易用性或功能等各方面做出提升，也可以构建云原生时代的 TiDB 内核等。',
  },
  {
    name: '生态组',
    desc: '丰富 TiDB/TiKV/TiDB Cloud 应用生态，补充和增强上下游工具、平台、应用对 TiDB/TiKV/TiDB Cloud 的支持能力，例如增强 MySQL 生态中间件、应用框架对 TiDB 的兼容性，基于 TiDB Cloud 的云上应用开发等。',
  },
  { name: '∞', desc: '欢迎其他任何 Cool idea，创造不设限！\n PS. Chaos Mesh 爱好者看过来' },
];

const stepsData = [
  {
    title: 'STEP 1 ：提交报名',
    date: '截至 12月27日',
    desc: (
      <div>
        报名开始，只要你对 coding 感兴趣，都可以报名参加，点击
        <Styled.Link href={'https://asktug.com/t/topic/273502'}>查看参赛指南。</Styled.Link>
      </div>
    ),
    action: '完成报名',
    url: 'https://forms.pingcap.com/f/TiDBHackathon2021apply',
  },
  {
    title: 'STEP 2 ：完成组队',
    date: '报名后 - 12月28日',
    desc: <div>报名成功即可启动组队，找到你喜欢的队友组成战队，选拔队长，拟定队名，提交团队 RFC</div>,
    action: '提交 RFC',
    url: 'https://forms.pingcap.com/f/TiDBHackathon2021RFC',
  },
  {
    title: 'STEP 3 ：赛前准备',
    date: '截至 1月7日（共 10天）',
    desc: (
      <div>
        我们给你准备了充分的<Styled.Link href={'https://asktug.com/t/topic/273503'}>学习资料</Styled.Link>
        ，专业导师群内答疑等，让你学习无障碍。
      </div>
    ),
    action: '查看学习资料',
    url: 'https://asktug.com/t/topic/27350',
  },
  {
    title: 'STEP 4 ：现场调试',
    date: '1月8日（周六）',
    desc: <div>北京、上海、杭州、成都、深圳、广州任选一处决赛参赛点，还可以走进 PingCAP Office 感受 P 社文化。</div>,
    action: '下载答辩 PPT 模板',
    url: 'TODO',
  },
  {
    title: 'STEP 5：现场答辩&颁奖',
    date: '1月9日（周日）',
    desc: <div>决赛现场如火如荼，众多奖项等你拿！</div>,
  },
];

const FAQData = [
  { q: '1. 每支参赛队伍最多几个人？', a: '团队参赛最多 4 人为一个小组。单人参赛也支持哦～' },
  {
    q: '2. 主办方提供餐饮和住宿吗？',
    a: '我们提供参赛者和志愿者比赛期间的餐饮（两份午餐、一份早餐、两份晚餐），参赛选手可留在比赛场地过夜，如需在场地附近租住宾馆请自行解决～',
  },
  { q: '3. 比赛会由于疫情取消吗？', a: '我们会密切关注疫情动向，如有不可抗力则比赛会改为全程线上，不会取消哦～' },
  { q: '4. 会场分别在哪些城市？', a: '上海、北京、杭州、广州、成都、深圳' },
  {
    q: '5. 什么时候可以开始编写代码？',
    a: '组队完成后就可以开始编写代码了！如果遇到学习资料中尚未解答的问题，可以加入Hackathon 2021 参赛群，群内将有导师不定期线上答疑，以及集中直播分享。',
  },
  { q: '6. 校园团队奖参与评选的人群是？', a: '该团队成为需要全员皆为：未毕业大学生、硕士、博士。' },
];

const judgesData = [
  {
    name: '郭炜',
    desc: 'Apache Foundation Member',
    detail: `Apache Foundation Member, Apache IPMC Member. Apache Dolphin Scheduler PMC，ClickHouse 华人社区创始人，中国 2021 年开源杰出人物。
郭炜先生毕业于北京大学，先后在中金、IBM、Teradata 任大数据方重要职位，对大数据前沿研究做出卓越贡献。`,
  },
  {
    name: '翟佳',
    desc: 'Apache Pulsar PMC 成员、StreamNative 联合创始人',
    detail:
      '翟佳曾任职于 EMC，担任统一存储部门技术负责人。他主要从事实时计算和分布式存储系统的相关研究工作，在开源项目 Apache BookKeeper、Apache Pulsar 等项目中持续贡献代码，是开源项目 Apache Pulsar 和 Apache BookKeeper 的 PMC 成员和 Committer。',
  },
  {
    name: '吴晟',
    desc: 'Tetrate 创始工程师',
    detail: 'Tetrate 创始工程师，Apache 软件基金会董事，Apache SkyWalking 创始人。',
  },
];

const carouselData = [
  'https://via.placeholder.com/420x240.png',
  'https://via.placeholder.com/420x240.png',
  'https://via.placeholder.com/420x240.png',
  'https://via.placeholder.com/420x240.png',
  'https://via.placeholder.com/420x240.png',
];

const splitCarousel = (data, size) => {
  // split data into groups of 3
  return _.chunk(data, size);
};

const toHash = (hash) => () => (window.location.hash = hash);

const BannerNavButtonsGroup = ({ isSmallScreen }) => (
  <Styled.BannerNavButtonsGroup isSmallScreen={isSmallScreen}>
    <Styled.BannerNavButton onClick={toHash('intro')}>介绍</Styled.BannerNavButton>
    <Styled.BannerNavButton onClick={toHash('prizes')}>奖项</Styled.BannerNavButton>
    <Styled.BannerNavButton onClick={toHash('judges')}>评委</Styled.BannerNavButton>
    <Styled.BannerNavButton onClick={toHash('scores')}>积分榜</Styled.BannerNavButton>
    <Styled.BannerNavButton onClick={toHash('faq')}>常见问题</Styled.BannerNavButton>
    <Styled.BannerNavButton onClick={toHash('partners')}>合作伙伴</Styled.BannerNavButton>
  </Styled.BannerNavButtonsGroup>
);

const Page = () => {
  const { isSmallScreen } = useIsSmallScreen();
  const router = useRouter();
  const [QROverlay, setQROverlay] = useState(false);
  return (
    <CoreLayout>
      {QROverlay && (
        <Styled.BannerQRCodeOverlay onClick={() => setQROverlay(false)}>
          <Styled.BannerQRCodeContent>
            <Styled.BannerQRCodeImage />
            <Styled.BannerQRCodeText>报名后添加小助手进群吧！</Styled.BannerQRCodeText>
          </Styled.BannerQRCodeContent>
        </Styled.BannerQRCodeOverlay>
      )}

      <Styled.Container>
        <Styled.BannerWrapper>
          <Styled.Banner isSmallScreen={isSmallScreen}>
            <Styled.BannerContent isSmallScreen={isSmallScreen}>
              {isSmallScreen ? <Styled.BannerTitleMobile /> : <Styled.BannerTitle />}

              <Styled.BannerButtonsGroup isSmallScreen={isSmallScreen}>
                <Styled.BannerButton
                  onClick={() => handleRedirect(router, 'https://forms.pingcap.com/f/TiDBHackathon2021apply')}
                >
                  立即报名
                </Styled.BannerButton>
                <Styled.BannerButton onClick={() => setQROverlay(true)}>加入官方群</Styled.BannerButton>
                <Styled.BannerButton onClick={toHash('faq')}>赛事咨询</Styled.BannerButton>
              </Styled.BannerButtonsGroup>
              {!isSmallScreen && <BannerNavButtonsGroup />}
            </Styled.BannerContent>
          </Styled.Banner>
          {isSmallScreen && <BannerNavButtonsGroup isSmallScreen={isSmallScreen} />}
        </Styled.BannerWrapper>
        <Styled.Section id="intro">
          <SectionTitle>大赛介绍</SectionTitle>
          本次 Hackathon 主题为「Explore the Sky」，尽情发挥天马行空的想象，用 TiDB 创造无限可能。
        </Styled.Section>
        <Styled.Section>
          <SectionTitle>主题赛道</SectionTitle>
          {_.chunk(groupsData, isSmallScreen ? 2 : 4).map((data) => (
            <Styled.Table>
              <thead>
                {data.map((item, idx) => (
                  <Styled.TableHeaderCell isSmallScreen={isSmallScreen}>
                    <Styled.TableHeaderCellContent>
                      <div>{item.name}</div>
                      <Styled.TableHeaderIcon src={getImage(`group-icon-${idx + 1}.svg`)} />
                    </Styled.TableHeaderCellContent>
                  </Styled.TableHeaderCell>
                ))}
              </thead>
              <tr>
                {data.map((item, idx) => (
                  <Styled.TableCell isSmallScreen={isSmallScreen}>
                    <Styled.TableCellContent> {item.desc} </Styled.TableCellContent>
                  </Styled.TableCell>
                ))}
              </tr>
            </Styled.Table>
          ))}
        </Styled.Section>
        <Styled.Section>
          <SectionTitle>参赛流程</SectionTitle>
          {!isSmallScreen ? (
            <ProcedureCardsGroup>
              {stepsData.map((step) => (
                <ProcedureCard
                  title={step.title}
                  date={step.date}
                  desc={step.desc}
                  buttonText={step.action}
                  buttonLink={step.url}
                />
              ))}
            </ProcedureCardsGroup>
          ) : (
            <>
              {_.chunk(stepsData, 2).map((data) => (
                <ProcedureCardsGroup>
                  {data.slice(0, 2).map((step) => (
                    <ProcedureCard
                      sm
                      title={step.title}
                      date={step.date}
                      buttonLink={step.url}
                      desc={step.desc}
                      buttonText={step.action}
                    />
                  ))}
                </ProcedureCardsGroup>
              ))}
            </>
          )}

          <Styled.LocationSpan>六城联动线下 Hacking：北京、上海、杭州、成都、深圳、广州</Styled.LocationSpan>
        </Styled.Section>
        <Styled.Section id="prizes">
          <SectionTitle>大赛奖项</SectionTitle>
          <Styled.GlowLabel tall> Top 3 奖项</Styled.GlowLabel>
          <Styled.PrizesRow justify={'space-around'}>
            <Col>
              <Prize title={'二等奖'} count={'3 支队伍'} reward={''} src={getImage('prize-2.svg')} huge />
            </Col>
            <Col>
              <Prize title={'一等奖'} count={'1 支队伍'} reward={''} src={getImage('prize-1.svg')} huge />
            </Col>
            <Col>
              <Prize title={'三等奖'} count={'6 支队伍'} reward={''} src={getImage('prize-3.svg')} huge />
            </Col>
          </Styled.PrizesRow>
          奖金为税前金额
          <Styled.GlowLabel tall> 特别奖项 </Styled.GlowLabel>
          <Styled.PrizesRow justify={'space-around'}>
            <Col>
              <Prize title={'CTO 特别奖'} count={'1 支队伍'} reward={'¥5000'} src={getImage('prize-special.svg')} />
            </Col>
            <Col>
              <Prize title={'无限创意奖'} count={'1 支队伍'} reward={'¥5000'} src={getImage('prize-special.svg')} />
            </Col>
            <Col>
              <Prize title={'积分挑战奖'} count={'3 支队伍'} reward={'¥2000'} src={getImage('prize-special.svg')} />
            </Col>
            <Col>
              <Prize
                title={'最佳人气奖'}
                count={'1 支队伍'}
                reward={'罗技机械键盘'}
                src={getImage('prize-special.svg')}
              />
            </Col>
          </Styled.PrizesRow>
          <Styled.PrizesRow justify={'space-around'}>
            <Col>
              <Prize
                title={'校园团队奖'}
                count={'1 支队伍'}
                reward={'教育基金 ¥5000'}
                src={getImage('prize-special.svg')}
              />
            </Col>
            <Col>
              <Prize
                title={'决赛入围奖'}
                count={'20 支队伍'}
                reward={'倍轻松按摩仪'}
                src={getImage('prize-special.svg')}
              />
            </Col>
            <Col>
              <Prize title={'神秘奖项'} count={'？'} reward={'现场揭晓'} src={getImage('prize-special.svg')} />
            </Col>
          </Styled.PrizesRow>
          <Styled.GlowLabel tall> 其他参赛福利 </Styled.GlowLabel>
          <Styled.PrizesRow gutter={32}>
            {[
              '专业导师赛前辅导',
              '参赛者证书',
              '参赛者专属周边',
              '获奖队伍专题推广',
              '个人&团队品牌宣传',
              '专题采访',
            ].map((benefit, idx) => (
              <Col xs={24} md={8}>
                <BenefitCard icon={getImage(`benefit-icon-${idx + 1}.svg`)} content={benefit} />
              </Col>
            ))}
          </Styled.PrizesRow>
        </Styled.Section>
        <Styled.Section id="judges">
          <SectionTitle>评委&导师</SectionTitle>
          <Styled.JudgesLabel>
            <Styled.GlowLabel>评委</Styled.GlowLabel>
            <hr />
          </Styled.JudgesLabel>
          <Row justify="space-between" gutter={16}>
            {judgesData.map((judge) => (
              <Col xs={12} md={6}>
                <JudgeCard
                  name={judge.name}
                  desc={judge.desc}
                  src={getImage(`judge-${judge.name}.png`)}
                  detail={judge.detail}
                />
              </Col>
            ))}
          </Row>

          <Styled.JudgesLabel>
            <Styled.GlowLabel>导师</Styled.GlowLabel>
            <hr />
          </Styled.JudgesLabel>
          <Row justify="space-between" gutter={16}>
            <Col xs={12} md={6}>
              <JudgeCard
                name="Dinanele"
                desc="Theory of computation"
                src={getImage('judge-avatar-1.png')}
                detail={'daskdjad'}
              />
            </Col>
            <Col xs={12} md={6}>
              <JudgeCard
                name="Dinanele"
                desc="Theory of computation"
                src={getImage('judge-avatar-1.png')}
                detail={'daskdjasdjaskld'}
              />
            </Col>
            <Col xs={12} md={6}>
              <JudgeCard
                name="Dinanele"
                desc="Theory of computation"
                src={getImage('judge-avatar-1.png')}
                detail={'daskjaskld'}
              />
            </Col>
            <Col xs={12} md={6}>
              <JudgeCard
                name="Dinanele"
                desc="Theory of computation"
                src={getImage('judge-avatar-1.png')}
                detail={'daskdjjakld'}
              />
            </Col>
          </Row>
        </Styled.Section>
        <Styled.Section id="faq">
          <SectionTitle>常见问题</SectionTitle>
          <Styled.FAQWrapper>
            <Styled.FAQCollapse>
              {FAQData.map((entry) => (
                <FAQCollapsePanel header={entry.q}>{entry.a}</FAQCollapsePanel>
              ))}
            </Styled.FAQCollapse>
          </Styled.FAQWrapper>
          <Styled.FAQButton>更多赛事 FAQ</Styled.FAQButton>
        </Styled.Section>
        <Styled.Section>
          <SectionTitle>专题报道</SectionTitle>
          <Styled.Carousel>
            {splitCarousel(carouselData, isSmallScreen ? 1 : 3).map((group) => (
              <Styled.CarouselInner>
                {group.map((url) => (
                  <Image width={100 / splitCarousel(carouselData, isSmallScreen ? 1 : 3)[0].length + '%'} src={url} />
                ))}
              </Styled.CarouselInner>
            ))}
          </Styled.Carousel>
        </Styled.Section>
        <Styled.Section>
          <SectionTitle>往期回顾</SectionTitle>
          <Styled.Carousel>
            {splitCarousel(carouselData, isSmallScreen ? 1 : 3).map((group) => (
              <Styled.CarouselInner>
                {group.map((url) => (
                  <Image width={100 / splitCarousel(carouselData, isSmallScreen ? 1 : 3)[0].length + '%'} src={url} />
                ))}
              </Styled.CarouselInner>
            ))}
          </Styled.Carousel>
        </Styled.Section>
      </Styled.Container>
    </CoreLayout>
  );
};

export default Page;
