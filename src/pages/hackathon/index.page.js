import * as Styled from './index.styled';
import { FAQCollapsePanel, getImage, ProcedureCardsGroup } from './index.styled';
import { CoreLayout } from '~/layouts';
import { Col, Image, Row } from 'antd';

const SectionTitle = ({ children }) => (
  <Styled.SectionTitle>
    <Styled.SectionTitleBackground />
    {children}
  </Styled.SectionTitle>
);

const ProcedureCard = ({ title, date, desc, buttonText, buttonLink }) => (
  <>
    <Styled.ProcedureCardDivider />
    <Styled.ProcedureCardWrapper>
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

const Prize = ({ title, reward, count, src }) => {
  return (
    <Styled.Prize src={src}>
      <Styled.PrizeTitle>{title}</Styled.PrizeTitle>
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
      <Styled.JudgeCardOverlay>{desc}</Styled.JudgeCardOverlay>
      <Styled.JudgeCardContent>
        <Styled.JudgeCardName>{name}</Styled.JudgeCardName>
        <Styled.JudgeCardDescription>{detail}</Styled.JudgeCardDescription>
      </Styled.JudgeCardContent>
    </Styled.JudgeCard>
  );
};

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

const Page = () => {
  return (
    <CoreLayout>
      <Styled.Container>
        <Styled.Banner>
          <Styled.BannerContent>
            <Styled.BannerTitle />
            <Styled.BannerButtonsGroup>
              <Styled.BannerButton>立即报名</Styled.BannerButton>
              <Styled.BannerButton>加入官方群</Styled.BannerButton>
              <Styled.BannerButton>赛事咨询</Styled.BannerButton>
            </Styled.BannerButtonsGroup>
            <Styled.BannerNavButtonsGroup>
              <Styled.BannerNavButton>介绍</Styled.BannerNavButton>
              <Styled.BannerNavButton>奖项</Styled.BannerNavButton>
              <Styled.BannerNavButton>评委</Styled.BannerNavButton>
              <Styled.BannerNavButton>积分榜</Styled.BannerNavButton>
              <Styled.BannerNavButton>常见问题</Styled.BannerNavButton>
              <Styled.BannerNavButton>合作伙伴</Styled.BannerNavButton>
            </Styled.BannerNavButtonsGroup>
          </Styled.BannerContent>
        </Styled.Banner>
        <Styled.Section>
          <SectionTitle>大赛介绍</SectionTitle>
          本次 Hackathon 主题为「Explore the Sky」，尽情发挥天马行空的想象，用 TiDB 创造无限可能。
        </Styled.Section>
        <Styled.Section>
          <SectionTitle>主题赛道</SectionTitle>
          <Styled.Table>
            <thead>
              {[{ name: '工具组' }, { name: '内核组' }, { name: '生态组' }, { name: '创意组' }].map((item, idx) => (
                <Styled.TableHeaderCell>
                  <Styled.TableHeaderCellContent>
                    <div>{item.name}</div>
                    <Styled.TableHeaderIcon src={getImage(`group-icon-${idx + 1}.svg`)} />
                  </Styled.TableHeaderCellContent>
                </Styled.TableHeaderCell>
              ))}
            </thead>
            <tr>
              {[
                '对 TiDB 安装部署、数据流转、集群容灾、运维和可视化等配套工具的优化',
                '为 TiDB 性能、稳定性、易用性等各方面做出提升，也可以构建云原生时代的 TiDB 内核等',
                '对 TiDB/TiKV 上下游能力的连接、增强，例如管控中间件，周边应用框架适配等',
                '欢迎其他任何 Cool idea，创造不设限！PS. Chaos Mesh 爱好者看过来',
              ].map((item, idx) => (
                <Styled.TableCell>
                  <Styled.TableCellContent> {item} </Styled.TableCellContent>
                </Styled.TableCell>
              ))}
            </tr>
          </Styled.Table>
        </Styled.Section>
        <Styled.Section>
          <SectionTitle>参赛流程</SectionTitle>
          <ProcedureCardsGroup>
            <ProcedureCard
              title="提交报名"
              date="截至 12月27日"
              buttonLink="google.com"
              desc={
                <div>
                  报名开始，只要你对 coding 感兴趣，都可以报名参加，点击
                  <Styled.Link href={''}>查看参赛指南。</Styled.Link>
                </div>
              }
              buttonText="text"
            />
            <ProcedureCard
              title="提交报名"
              date="截至 12月27日"
              buttonLink="google.com"
              desc={
                <div>
                  报名开始，只要你对 coding 感兴趣，都可以报名参加，点击
                  <Styled.Link href={''}>查看参赛指南。</Styled.Link>
                </div>
              }
              buttonText="text"
            />
            <ProcedureCard
              title="提交报名"
              date="截至 12月27日"
              buttonLink="google.com"
              desc={
                <div>
                  报名开始，只要你对 coding 感兴趣，都可以报名参加，点击
                  <Styled.Link href={''}>查看参赛指南。</Styled.Link>
                </div>
              }
              buttonText="text"
            />
            <ProcedureCard
              title="提交报名"
              date="截至 12月27日"
              buttonLink="google.com"
              desc={
                <div>
                  报名开始，只要你对 coding 感兴趣，都可以报名参加，点击
                  <Styled.Link href={''}>查看参赛指南。</Styled.Link>
                </div>
              }
              buttonText="text"
            />
            <ProcedureCard
              title="提交报名"
              date="截至 12月27日"
              buttonLink="google.com"
              desc={
                <div>
                  报名开始，只要你对 coding 感兴趣，都可以报名参加，点击
                  <Styled.Link href={''}>查看参赛指南。</Styled.Link>
                </div>
              }
              buttonText="text"
            />
          </ProcedureCardsGroup>

          <Styled.LocationSpan>六城联动线下 Hacking：北京、上海、杭州、成都、深圳、广州</Styled.LocationSpan>
        </Styled.Section>
        <Styled.Section>
          <SectionTitle>大赛奖项</SectionTitle>
          <Styled.PrizesLabel> Top 3 奖项</Styled.PrizesLabel>
          <Styled.PrizesRow justify={'space-around'}>
            <Col>
              <Prize title={'亚军'} count={'2 支队伍'} reward={''} src={getImage('prize-1.svg')} />
            </Col>
            <Col>
              <Prize title={'冠军'} count={'1 支队伍'} reward={''} src={getImage('prize-1.svg')} />
            </Col>
            <Col>
              <Prize title={'季军'} count={'2 支队伍'} reward={''} src={getImage('prize-1.svg')} />
            </Col>
          </Styled.PrizesRow>
          奖金为税前金额
          <Styled.PrizesLabel> 特别奖项 </Styled.PrizesLabel>
          <Styled.PrizesRow justify={'space-around'}>
            <Col>
              <Prize title={'亚军'} count={'2 支队伍'} reward={'乐歌升降桌'} src={getImage('prize-special.svg')} />
            </Col>
            <Col>
              <Prize title={'亚军'} count={'2 支队伍'} reward={'乐歌升降桌'} src={getImage('prize-special.svg')} />
            </Col>
            <Col>
              <Prize title={'亚军'} count={'2 支队伍'} reward={'乐歌升降桌'} src={getImage('prize-special.svg')} />
            </Col>
            <Col>
              <Prize title={'亚军'} count={'2 支队伍'} reward={'乐歌升降桌'} src={getImage('prize-special.svg')} />
            </Col>
          </Styled.PrizesRow>
          <Styled.PrizesRow justify={'space-around'}>
            <Col>
              <Prize title={'亚军'} count={'2 支队伍'} reward={'乐歌升降桌'} src={getImage('prize-special.svg')} />
            </Col>
            <Col>
              <Prize title={'亚军'} count={'2 支队伍'} reward={'乐歌升降桌'} src={getImage('prize-special.svg')} />
            </Col>
            <Col>
              <Prize title={'亚军'} count={'2 支队伍'} reward={'乐歌升降桌'} src={getImage('prize-special.svg')} />
            </Col>
          </Styled.PrizesRow>
          <Styled.PrizesLabel> 其他参赛福利 </Styled.PrizesLabel>
          <Styled.PrizesRow gutter={32}>
            {[
              '专业导师赛前辅导',
              '参赛者证书',
              '参赛者专属周边',
              '获奖队伍专题推广',
              '个人&团队品牌宣传',
              '专题采访',
            ].map((benefit, idx) => (
              <Col span={8}>
                <BenefitCard icon={getImage(`benefit-icon-${idx + 1}.svg`)} content={benefit} />
              </Col>
            ))}
          </Styled.PrizesRow>
        </Styled.Section>
        <Styled.Section>
          <SectionTitle>评委&导师</SectionTitle>
          <Styled.JudgesLabel>
            <div>评委</div>
            <hr />
          </Styled.JudgesLabel>
          <Row justify="space-between" gutter={16}>
            <Col>
              <JudgeCard
                name="Dinanele"
                desc="Theory of computation"
                src={getImage('judge-avatar-1.png')}
                detail={'daskdjasjdasdjkalsdjalksdjaskld'}
              />
            </Col>
            <Col>
              <JudgeCard
                name="Dinanele"
                desc="Theory of computation"
                src={getImage('judge-avatar-1.png')}
                detail={'daskdjasjdasdjkalsdjalksdjaskld'}
              />
            </Col>
            <Col>
              <JudgeCard
                name="Dinanele"
                desc="Theory of computation"
                src={getImage('judge-avatar-1.png')}
                detail={'daskdjasjdasdjkalsdjalksdjaskld'}
              />
            </Col>
            <Col>
              <JudgeCard
                name="Dinanele"
                desc="Theory of computation"
                src={getImage('judge-avatar-1.png')}
                detail={'daskdjasjdasdjkalsdjalksdjaskld'}
              />
            </Col>
          </Row>

          <Styled.JudgesLabel>
            <div>导师</div>
            <hr />
          </Styled.JudgesLabel>
          <Row justify="space-between" gutter={16}>
            <Col>
              <JudgeCard
                name="Dinanele"
                desc="Theory of computation"
                src={getImage('judge-avatar-1.png')}
                detail={'daskdjasjdasdjkalsdjalksdjaskld'}
              />
            </Col>
            <Col>
              <JudgeCard
                name="Dinanele"
                desc="Theory of computation"
                src={getImage('judge-avatar-1.png')}
                detail={'daskdjasjdasdjkalsdjalksdjaskld'}
              />
            </Col>
            <Col>
              <JudgeCard
                name="Dinanele"
                desc="Theory of computation"
                src={getImage('judge-avatar-1.png')}
                detail={'daskdjasjdasdjkalsdjalksdjaskld'}
              />
            </Col>
            <Col>
              <JudgeCard
                name="Dinanele"
                desc="Theory of computation"
                src={getImage('judge-avatar-1.png')}
                detail={'daskdjasjdasdjkalsdjalksdjaskld'}
              />
            </Col>
          </Row>
        </Styled.Section>
        <Styled.Section>
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
            <Styled.CarouselInner>
              <Image width="33.3%" src="https://via.placeholder.com/420x240.png" />
              <Image width="33.3%" src="https://via.placeholder.com/420x240.png" />
              <Image width="33.3%" src="https://via.placeholder.com/420x240.png" />
            </Styled.CarouselInner>
            <Styled.CarouselInner>
              <Image width="33.3%" src="https://via.placeholder.com/420x240.png" />
              <Image width="33.3%" src="https://via.placeholder.com/420x240.png" />
              <Image width="33.3%" src="https://via.placeholder.com/420x240.png" />
            </Styled.CarouselInner>
            <Styled.CarouselInner>
              <Image width="33.3%" src="https://via.placeholder.com/420x240.png" />
              <Image width="33.3%" src="https://via.placeholder.com/420x240.png" />
              <Image width="33.3%" src="https://via.placeholder.com/420x240.png" />
            </Styled.CarouselInner>
          </Styled.Carousel>
        </Styled.Section>
        <Styled.Section>
          <SectionTitle>往期回顾</SectionTitle>
          <Styled.Carousel>
            <Styled.CarouselInner>
              <Image width="33.3%" src="https://via.placeholder.com/420x240.png" />
              <Image width="33.3%" src="https://via.placeholder.com/420x240.png" />
              <Image width="33.3%" src="https://via.placeholder.com/420x240.png" />
            </Styled.CarouselInner>
            <Styled.CarouselInner>
              <Image width="33.3%" src="https://via.placeholder.com/420x240.png" />
              <Image width="33.3%" src="https://via.placeholder.com/420x240.png" />
              <Image width="33.3%" src="https://via.placeholder.com/420x240.png" />
            </Styled.CarouselInner>
            <Styled.CarouselInner>
              <Image width="33.3%" src="https://via.placeholder.com/420x240.png" />
              <Image width="33.3%" src="https://via.placeholder.com/420x240.png" />
              <Image width="33.3%" src="https://via.placeholder.com/420x240.png" />
            </Styled.CarouselInner>
          </Styled.Carousel>
        </Styled.Section>
      </Styled.Container>
    </CoreLayout>
  );
};

export default Page;
