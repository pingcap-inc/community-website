import * as Styled from './index.styled';
import { getImage, TableCellContentInner } from './index.styled';
import { CoreLayout } from '~/layouts';
import { Col, Image, Row } from 'antd';
import { useIsSmallScreen } from '~/hooks';
import _ from 'lodash';
import { handleRedirect } from '~/utils/link.utils';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { carouselData, finalists, groupsData, judgesData, seo, winners } from '~/pages/events/hackathon2021/datasource';
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

const NewsCard = ({ title, src, sm }) => {
  return (
    <Styled.NewsCard src={src} sm={sm}>
      <Styled.NewsCardContent sm={sm}> {title} </Styled.NewsCardContent>
    </Styled.NewsCard>
  );
};

const WinnerCard = ({ github, intro, video, name, prize, rfc, src, sm }) => {
  return (
    <>
      <div>
        <Styled.WinnerCard src={src} sm={sm}>
          <Styled.WinnerCardContent sm={sm}>
            {' '}
            {prize} <br /> {name}
          </Styled.WinnerCardContent>
          <Styled.WinnerCardOverlay>{intro}</Styled.WinnerCardOverlay>
        </Styled.WinnerCard>
      </div>
      <Styled.WinnerRow justify="center" gutter={16}>
        {rfc && (
          <Styled.Link border href={rfc}>
            RFC
          </Styled.Link>
        )}
        {github && (
          <Styled.Link border href={github}>
            Github Repo
          </Styled.Link>
        )}
        {video && (
          <Styled.Link border href={video}>
            视频回放
          </Styled.Link>
        )}
      </Styled.WinnerRow>
    </>
  );
};

const splitCarousel = (data, size) => {
  // split data into groups of 3
  return _.chunk(data, size);
};

const BannerNavButtonsGroup = ({ isSmallScreen }) => (
  <Styled.BannerNavButtonsGroup isSmallScreen={isSmallScreen}>
    {/*<Styled.BannerNavButton onClick={toHash('intro')}>介绍</Styled.BannerNavButton>*/}
    {/*<Styled.BannerNavButton onClick={toHash('prizes')}>奖项</Styled.BannerNavButton>*/}
    {/*<Styled.BannerNavButton onClick={toHash('judges')}>评委</Styled.BannerNavButton>*/}
    {/*<Styled.BannerNavButton onClick={toHash('scores')}>积分榜</Styled.BannerNavButton>*/}
    {/*<Styled.BannerNavButton onClick={toHash('faq')}>常见问题</Styled.BannerNavButton>*/}
    {/*<Styled.BannerNavButton onClick={toHash('news')}>专题报道</Styled.BannerNavButton>*/}
    {/*<Styled.BannerNavButton onClick={toHash('partners')}>合作伙伴</Styled.BannerNavButton>*/}
  </Styled.BannerNavButtonsGroup>
);

const Page = ({ data }) => {
  const { isSmallScreen } = useIsSmallScreen();
  const router = useRouter();
  const [QROverlay, setQROverlay] = useState(false);
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
                <Styled.BannerButton disabled>报名截止</Styled.BannerButton>
              </Styled.BannerButtonsGroup>
              {!isSmallScreen && <BannerNavButtonsGroup />}
            </Styled.BannerContent>
          </Styled.Banner>
          {isSmallScreen && <BannerNavButtonsGroup isSmallScreen={isSmallScreen} />}
        </Styled.BannerWrapper>
        <Styled.Section id="intro">
          <SectionTitle>大赛回顾</SectionTitle>
          <p>
            主题为「Explore the Sky」的 TiDB Hackathon 2021 完美收官！今年已经是 TiDB Hackathon
            第五届赛事，参赛规模创历届之最，共有 279人 ，64
            支队伍参赛，有来自腾讯、华为、网易、美团、字节、京东、滴滴等企业的上班族，也有来自北大、北邮、中科院、上海交大、RMIT
            等高校的学生。
          </p>
          <p>
            在两天一夜的 Hacking Time 中，围绕着内核、工具、生态、「∞」四大赛道，选手们拿出了众多令评委惊艳的项目。在
            TiDB 内核方向做出不少 hardcore 、大幅提升性能的创新项目，在工具方向对 TiDB
            的可观测性及诊断易用性做出了大幅优化，在生态扩展方向百花齐放，出现了语法完备的分布式图数据库，给 TiDB
            打通了入湖的高速通道，很多项目其实已经在 TiDB 的 Roadmap 里，并已经具备落地的成熟度。最终，有 10
            支队伍瓜分了总计 40万元的现金奖，另有 10
            支队伍分获无限创意奖、校园团队奖、用户之选奖、最佳市场潜力奖、云上应用奖、积分挑战奖、技术潜力奖、最佳人气奖。
          </p>
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
                {data.map((item) => (
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
          <SectionTitle>获奖项目</SectionTitle>
          <Row justify="space-around">
            {winners.map((item) => (
              <Col onClick={() => handleRedirect(router, item.url)}>
                <WinnerCard
                  name={item.name}
                  prize={item.prize}
                  src={`/images/hackathon/winner-${item.name}.jpg`}
                  sm={isSmallScreen}
                  intro={item.intro}
                  github={item.github}
                  rfc={item.rfc}
                  video={item.video}
                />
              </Col>
            ))}
            {isSmallScreen ||
              (winners.length % 3 !== 0 &&
                _.range(3 - (winners.length % 3)).map((_) => <Styled.DummyNewsCard sm={isSmallScreen} />))}
          </Row>
        </Styled.Section>
        <Styled.Section>
          <SectionTitle>入围项目</SectionTitle>
          <Row justify="space-around">
            {finalists.map((item) => (
              <Col onClick={() => handleRedirect(router, item.url)}>
                <Styled.FinalistCard sm={isSmallScreen}>{item.intro}</Styled.FinalistCard>
                <Styled.FinalistRow justify="start" sm={isSmallScreen}>
                  <div>团队名称：{item.team}</div>
                </Styled.FinalistRow>
                <Styled.FinalistRow justify="space-between" sm={isSmallScreen}>
                  <div>项目名称：{item.project}</div>
                  <Styled.Link href={item.rfc}> RFC </Styled.Link>
                </Styled.FinalistRow>
              </Col>
            ))}
            {isSmallScreen ||
              (finalists.length % 3 !== 0 &&
                _.range(3 - (finalists.length % 3)).map((_) => <Styled.DummyNewsCard sm={isSmallScreen} />))}
          </Row>
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
            {_.range(1, 4).map((i) => (
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
