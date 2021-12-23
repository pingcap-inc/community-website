import * as Styled from './index.styled';
import { FAQCollapsePanel, getImage, ProcedureCardsGroup, TableCellContentInner } from './index.styled';
import { CoreLayout } from '~/layouts';
import { Col, Image, Row } from 'antd';
import { useIsSmallScreen } from '~/hooks';
import _ from 'lodash';
import { handleRedirect } from '~/utils/link.utils';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { carouselData, FAQData, groupsData, judgesData, seo, stepsData } from '~/pages/events/hackathon2021/datasource';
import { CommunityHead } from '~/components';
import { getI18nProps } from '~/utils/i18n.utils';
import { api } from '@tidb-community/datasource';
import jsConvert from 'js-convert-case';
import Leaderboard from '~/pages/events/hackathon2021/leaderboard';
import { common as commonUtils } from '~/utils';

export const getServerSideProps = async (ctx) => {
  const client = await api.initStrapiClient();

  const data = await Promise.all([
    client.get('tidbio-hackathon-2021-leaderboards'),
    client.get('tidbio-hackathon-2021-news'),
  ]);
  const i18nProps = await getI18nProps(['common'])(ctx);

  return {
    props: {
      ...i18nProps,
      data: jsConvert.camelKeys(
        {
          leaderboard: data[0],
          news: data[1],
        },
        {
          recursive: true,
          recursiveInArray: true,
        }
      ),
    },
  };
};

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

const Prize = ({ title, reward, count, src, huge, rewardSize, sm }) => {
  return (
    <Styled.Prize src={src} sm={sm}>
      <Styled.PrizeTitle huge={huge} sm={sm}>
        {title}
      </Styled.PrizeTitle>
      <Styled.PrizeReward sm={sm} style={{ fontSize: rewardSize }}>
        {reward}
      </Styled.PrizeReward>
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

const JudgeCard = ({ name, desc, src, detail, sm }) => {
  return (
    <Styled.JudgeCard src={src} sm={sm}>
      <Styled.JudgeCardOverlay sm={sm}>{detail}</Styled.JudgeCardOverlay>
      <Styled.JudgeCardContent sm={sm}>
        <Styled.JudgeCardName>{name}</Styled.JudgeCardName>
        <Styled.JudgeCardDescription sm={sm}>{desc}</Styled.JudgeCardDescription>
      </Styled.JudgeCardContent>
    </Styled.JudgeCard>
  );
};

const NewsCard = ({ title, src, url, sm }) => {
  return (
    <Styled.NewsCard src={src} sm={sm}>
      <Styled.NewsCardContent sm={sm}> {title} </Styled.NewsCardContent>
    </Styled.NewsCard>
  );
};

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
    <Styled.BannerNavButton onClick={toHash('news')}>专题报道</Styled.BannerNavButton>
    <Styled.BannerNavButton onClick={toHash('partners')}>合作伙伴</Styled.BannerNavButton>
  </Styled.BannerNavButtonsGroup>
);

const Page = ({ data }) => {
  const { isSmallScreen } = useIsSmallScreen();
  const router = useRouter();
  const [QROverlay, setQROverlay] = useState(false);
  console.log(data);
  return (
    <CoreLayout>
      <CommunityHead title={seo.title} description={seo.description} keyword={seo.keywords} />

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
          TiDB Hackathon 自 2017 年起已连续举办四届，本届主题为「Explore the Sky」，参赛者可以尽情发挥天马行空的想象，用
          TiDB 创造无限可能。
        </Styled.Section>
        <Styled.Section>
          <SectionTitle>主题赛道</SectionTitle>
          {_.chunk(groupsData, isSmallScreen ? 2 : 4).map((data, chunkId) => (
            <Styled.Table>
              <thead>
                {data.map((item, idx) => (
                  <Styled.TableHeaderCell isSmallScreen={isSmallScreen}>
                    <Styled.TableHeaderCellContent>
                      <div>{item.name}</div>
                      <Styled.TableHeaderIcon src={getImage(`group-icon-${chunkId * 2 + idx + 1}.svg`)} />
                    </Styled.TableHeaderCellContent>
                  </Styled.TableHeaderCell>
                ))}
              </thead>
              <tr>
                {data.map((item, idx) => (
                  <Styled.TableCell isSmallScreen={isSmallScreen}>
                    <Styled.TableCellContent>
                      <TableCellContentInner>{item.desc}</TableCellContentInner>
                    </Styled.TableCellContent>
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
            <Col xs={24} lg={8}>
              <Prize
                sm={isSmallScreen}
                title={'一等奖'}
                count={'1 支队伍'}
                reward={''}
                src={getImage('prize-1.svg')}
                huge
              />
            </Col>
            <Col xs={12} lg={8}>
              <Prize
                sm={isSmallScreen}
                title={'二等奖'}
                count={'3 支队伍'}
                reward={''}
                src={getImage('prize-2.svg')}
                huge
              />
            </Col>
            <Col xs={12} lg={8}>
              <Prize
                sm={isSmallScreen}
                title={'三等奖'}
                count={'6 支队伍'}
                reward={''}
                src={getImage('prize-3.svg')}
                huge
              />
            </Col>
          </Styled.PrizesRow>
          <Styled.GlowLabel tall> 特别奖项 </Styled.GlowLabel>
          <Styled.PrizesRow justify={'space-around'}>
            <Col>
              <Prize
                sm={isSmallScreen}
                title={'技术潜力奖'}
                count={'1 支队伍'}
                reward={'¥5000'}
                src={getImage('prize-special.svg')}
              />
            </Col>
            <Col>
              <Prize
                sm={isSmallScreen}
                title={'用户之选奖'}
                count={'1 支队伍'}
                reward={'¥5000'}
                src={getImage('prize-special.svg')}
              />
            </Col>
            <Col>
              <Prize
                sm={isSmallScreen}
                title={'云上应用奖'}
                count={'1 支队伍'}
                reward={'¥3000+云资源代金券'}
                src={getImage('prize-special.svg')}
                rewardSize={isSmallScreen ? 12 : 16}
              />
            </Col>
            <Col>
              <Prize
                sm={isSmallScreen}
                title={'无限创意奖'}
                count={'1 支队伍'}
                reward={'¥5000'}
                src={getImage('prize-special.svg')}
              />
            </Col>
          </Styled.PrizesRow>
          <Styled.PrizesRow justify={'space-around'}>
            <Col>
              <Prize
                sm={isSmallScreen}
                title={'积分挑战奖'}
                count={'3 支队伍'}
                reward={'¥2000'}
                src={getImage('prize-special.svg')}
              />
            </Col>
            <Col>
              <Prize
                sm={isSmallScreen}
                title={'最佳人气奖'}
                count={'1 支队伍'}
                reward={'罗技机械键盘'}
                src={getImage('prize-special.svg')}
              />
            </Col>
            <Col>
              <Prize
                sm={isSmallScreen}
                title={'校园团队奖'}
                count={'1 支队伍'}
                reward={'教育基金 ¥5000'}
                rewardSize={isSmallScreen ? 14 : 16}
                src={getImage('prize-special.svg')}
              />
            </Col>
            <Col>
              <Prize
                sm={isSmallScreen}
                title={'决赛入围奖'}
                count={'20 支队伍'}
                reward={'倍轻松按摩仪'}
                src={getImage('prize-special.svg')}
              />
            </Col>
            <Col>
              <Prize
                sm={isSmallScreen}
                title={'神秘奖项'}
                count={'？'}
                reward={'现场揭晓'}
                src={getImage('prize-special.svg')}
              />
            </Col>
          </Styled.PrizesRow>
          注：所有奖项奖金均为税前金额，奖项
          <Styled.Link fontSize="16px" href="https://asktug.com/t/topic/273513">
            评选规则
          </Styled.Link>
          可参考评分规则 。<Styled.GlowLabel tall> 其他参赛福利 </Styled.GlowLabel>
          <Styled.PrizesRow gutter={32}>
            {[
              '专业导师赛前辅导',
              '评委大咖深度点评',
              '技术同好现场交流',
              '优秀项目孵化落地',
              '获奖团队品牌曝光',
              '参赛者专属大礼包',
            ].map((benefit, idx) => (
              <Col xs={24} md={8}>
                <BenefitCard icon={getImage(`benefit-icon-${idx + 1}.svg`)} content={benefit} />
              </Col>
            ))}
          </Styled.PrizesRow>
        </Styled.Section>
        <Styled.Section id="judges">
          <SectionTitle>评委</SectionTitle>
          <Styled.JudgesLabel>
            <Styled.GlowLabel>评委</Styled.GlowLabel>
            <hr />
          </Styled.JudgesLabel>
          <Row justify="space-between">
            {judgesData.map((judge) => (
              <Col>
                <JudgeCard
                  name={judge.name}
                  desc={judge.desc}
                  src={getImage(`judges/${encodeURIComponent(judge.name)}.png`)}
                  detail={judge.detail}
                  sm={isSmallScreen}
                />
              </Col>
            ))}
            {judgesData.length % (isSmallScreen ? 2 : 5) !== 0 &&
              _.range((isSmallScreen ? 2 : 5) - (judgesData.length % (isSmallScreen ? 2 : 5))).map((_) => (
                <Styled.DummyJudgeCard sm={isSmallScreen} />
              ))}
          </Row>
          <Styled.SectionFooter>评委按姓名字母排序</Styled.SectionFooter>
        </Styled.Section>
        <Styled.Section id="scores">
          <SectionTitle>积分榜</SectionTitle>
          <Leaderboard sm={isSmallScreen} data={data.leaderboard} />
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
          <Styled.FAQButton
            onClick={() => handleRedirect(router, 'https://asktug.com/c/Mutual-communication/Hackathon')}
          >
            更多赛事 FAQ
          </Styled.FAQButton>
        </Styled.Section>
        <Styled.Section id="news">
          <SectionTitle>专题报道</SectionTitle>
          <Row justify="space-around">
            {data.news.map((item) => (
              <Col onClick={() => handleRedirect(router, item.url)}>
                <NewsCard
                  name={item.title}
                  src={commonUtils.getStrapiImgProps(item.preview).src}
                  sm={isSmallScreen}
                  title={item.title}
                />
              </Col>
            ))}
            {isSmallScreen ||
              (data.news.length % 3 !== 0 &&
                _.range(3 - (data.news.length % 3)).map((_) => <Styled.DummyNewsCard sm={isSmallScreen} />))}
          </Row>
        </Styled.Section>
        <Styled.PartnerSection id="partners">
          <SectionTitle>合作伙伴</SectionTitle>
          黄金赞助
          <Styled.LogoWrapper>
            {_.range(1, 4).map((i) => (
              <img
                src={getImage(`gold-sponsor-${i}.png`)}
                height={isSmallScreen ? 60 : 80}
                alt={`gold-sponsor-${i}.png`}
              />
            ))}
          </Styled.LogoWrapper>
          白银赞助
          <Styled.LogoWrapper>
            {_.range(1, 3).map((i) => (
              <img
                src={getImage(`silver-sponsor-${i}.png`)}
                height={isSmallScreen ? 60 : 80}
                alt={`silver-sponsor-${i}.png`}
              />
            ))}
          </Styled.LogoWrapper>
          云资源赞助/云技术服务支持
          <Styled.LogoWrapper>
            {_.range(1, 5).map((i) => (
              <img
                src={getImage(`cloud-sponsor-${i}.png`)}
                height={isSmallScreen ? 60 : 80}
                alt={`cloud-sponsor-${i}.png`}
              />
            ))}
          </Styled.LogoWrapper>
          协作方
          <Styled.LogoWrapper>
            {_.range(1, 3).map((i) => (
              <img
                src={getImage(`corecognizer-logo-${i}.png`)}
                height={isSmallScreen ? 60 : 80}
                alt={`corecognizer-logo-${i}.png`}
              />
            ))}
          </Styled.LogoWrapper>
          媒体/合作社区
          <Styled.LogoWrapper>
            {_.range(17, 0, -1).map((i) => (
              <img
                src={getImage(`partner-logo-${i}.png`)}
                height={isSmallScreen ? 60 : 80}
                alt={`partner-logo-${i}.png`}
              />
            ))}
          </Styled.LogoWrapper>
        </Styled.PartnerSection>
        <Styled.Section>
          <SectionTitle>往期回顾</SectionTitle>
          <Styled.Carousel>
            {splitCarousel(carouselData, isSmallScreen ? 1 : 3).map((group) => (
              <Styled.CarouselInner>
                {group.map((item) => (
                  <Styled.CarouselContent
                    width={100 / splitCarousel(carouselData, isSmallScreen ? 1 : 3)[0].length + '%'}
                  >
                    <Styled.Link href={item.url}>
                      <Image preview={false} src={item.img} />
                    </Styled.Link>
                    <Styled.CarouselDescription>{item.desc}</Styled.CarouselDescription>
                  </Styled.CarouselContent>
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
