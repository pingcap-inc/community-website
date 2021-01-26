import React from 'react'
import styles from './Home.module.scss'
import HomeSection from "components/home/HomeSection/HomeSection";
import ArticleItemWithExcerpt from "components/home/ArticleItemWithExcerpt/ArticleItemWithExcerpt";
import {getAvatarUrlByAvatarTemplateString, getCategoryById, getTopicUrlById, getUserUrlByUsername, getExcerptByTopicId} from "../utils";
import TopItem from "components/home/TopItem/TopItem";
import {Col, Carousel} from "antd";
import banners from "../data/banners";
import events from "../data/events";
import ResponsiveRow from "components/ResponsiveRow/ResponsiveRow";
import MyLink from "components/MyLink";
import EventsItem from "components/EventsItem/EventsItem";
import LinkWithArrow from "components/LinkWithArrow/LinkWithArrow";
import HomeMVA from "components/home/HomeMVA/HomeMVA";
import SEO from "components/SEO";
import ArticleCategory from "components/home/ArticleCategory/ArticleCategory";
import ArticleItem from "components/home/ArticleItem/ArticleItem";

async function getTopicFromAskTUG(key) {
  const api = `https://asktug.com/c/blog/${key}/l/latest.json?order=default&page=0&per_page=10`
  const response = await fetch(api)
  const json = await response.json()
  json.topic_list.topics[0].excerpt = await getExcerptByTopicId(json.topic_list.topics[0].id)
  return json
}

async function getTopTopicFromAskTUG() {
  const api = `https://asktug.com/top/weekly.json?order=default&page=0&per_page=10`
  const response = await fetch(api)
  return await response.json()
}

export async function getStaticProps(context) {
  const [howTo, practice, theory, top] = await Promise.all([
    getTopicFromAskTUG('how-to'),
    getTopicFromAskTUG('practice'),
    getTopicFromAskTUG('theory'),
    getTopTopicFromAskTUG(),
  ])
  
  const topics = {
    howTo,
    practice,
    theory,
    top,
  }
  
  // if (false) {
  //   return {
  //     notFound: true,
  //   }
  // }
  
  return {
    props: {topics}, // will be passed to the page component as props
  }
}

export default function Home({topics}) {
  const {
    howTo,
    practice,
    theory,
    top,
  } = topics
  // console.log('topics', topics)
  
  
  const articleImageUrl = '/images/home/article.svg'
  const qaImageUrl = '/images/home/qa.svg'
  const activityImageUrl = '/images/home/activity.svg'
  
  return (
    <>
      <SEO
        title="Home"
        description="TUG（TiDB User Group） 是由 TiDB 用户自发组织、管理的独立社区，PingCAP 官方提供赞助与支持。TUG 成立的初衷是“连接用户，共建社区”，汇聚了全球数据库、大数据技术从业者，是一个独立、自发、不以盈利为目的的组织。"
      />
      
      <main className={styles.wrapper}>
        
        <div className={styles.slideshow}>
          <Carousel autoplay>
            {banners.map((banner, index) =>
              <div key={index} className={styles.slideshow_item}>
                <MyLink href={banner.linkUrl}>
                  <img src={banner.imageUrl} alt={banner.title}/>
                </MyLink>
              </div>
            )}
          </Carousel>
        </div>
        
        <HomeSection
          title={'精选文章'}
          className={styles.articles}
          iconUrl={articleImageUrl}
          right={<LinkWithArrow href={'https://asktug.com/c/blog/l/latest'}>查看全部</LinkWithArrow>}
        >
          <ResponsiveRow gutter={[32, 32]}>
            <Col md={24} lg={8}>
              <ArticleCategory
                title={'经验教程'}
                color={1}
                link={'https://asktug.com/c/blog/how-to/l/latest'}
              >
                {howTo.topic_list.topics.slice(0, 1).map((topic, index) => {
                  const author = howTo.users.filter(user => user.id === topic.posters[0].user_id)[0]
                  const itemProps = {
                    title: topic.title,
                    authorUrl: getUserUrlByUsername(author.username),
                    authorName: author.name,
                    authorAvatarUrl: getAvatarUrlByAvatarTemplateString(author.avatar_template),
                    views: topic.views,
                    excerpt: topic.excerpt,
                    link: getTopicUrlById(topic.id),
                  }
                  return <ArticleItemWithExcerpt key={index} {...itemProps}/>
                })}
                {howTo.topic_list.topics.slice(1, 4).map((topic, index) => {
                  const itemProps = {
                    title: topic.title,
                    link: getTopicUrlById(topic.id),
                    color: 1,
                  }
                  return <ArticleItem key={index} {...itemProps}/>
                })}
              </ArticleCategory>
            </Col>
            <Col md={24} lg={8}>
              <ArticleCategory
                title={'用户实践'}
                color={2}
                link={'https://asktug.com/c/blog/practice/l/latest'}
              >
                {practice.topic_list.topics.slice(0, 1).map((topic, index) => {
                  const author = practice.users.filter(user => user.id === topic.posters[0].user_id)[0]
                  const itemProps = {
                    title: topic.title,
                    authorUrl: getUserUrlByUsername(author.username),
                    authorName: author.name,
                    authorAvatarUrl: getAvatarUrlByAvatarTemplateString(author.avatar_template),
                    views: topic.views,
                    excerpt: topic.excerpt,
                    link: getTopicUrlById(topic.id),
                  }
                  return <ArticleItemWithExcerpt key={index} {...itemProps}/>
                })}
                {practice.topic_list.topics.slice(1, 4).map((topic, index) => {
                  const itemProps = {
                    title: topic.title,
                    link: getTopicUrlById(topic.id),
                    color: 2,
                  }
                  return <ArticleItem key={index} {...itemProps}/>
                })}
              </ArticleCategory>
            </Col>
            <Col md={24} lg={8}>
              <ArticleCategory
                title={'原理解读'}
                color={3}
                link={'https://asktug.com/c/blog/theory/l/latest'}
              >
                {theory.topic_list.topics.slice(0, 1).map((topic, index) => {
                  const author = theory.users.filter(user => user.id === topic.posters[0].user_id)[0]
                  const itemProps = {
                    title: topic.title,
                    authorUrl: getUserUrlByUsername(author.username),
                    authorName: author.username,
                    authorAvatarUrl: getAvatarUrlByAvatarTemplateString(author.avatar_template),
                    views: topic.views,
                    excerpt: topic.excerpt,
                    link: getTopicUrlById(topic.id),
                  }
                  return <ArticleItemWithExcerpt key={index} {...itemProps}/>
                })}
                {theory.topic_list.topics.slice(1, 4).map((topic, index) => {
                  const itemProps = {
                    title: topic.title,
                    link: getTopicUrlById(topic.id),
                    color: 3,
                  }
                  return <ArticleItem key={index} {...itemProps}/>
                })}
              </ArticleCategory>
            </Col>
          </ResponsiveRow>
        </HomeSection>
        
        <HomeSection
          title={'热门问答'}
          className={styles.top}
          iconUrl={qaImageUrl}
          backgroundGray
          right={<LinkWithArrow href={'https://asktug.com/top'}>查看全部</LinkWithArrow>}
        >
          <ResponsiveRow>
            {top.topic_list.topics.slice(0, 10).map((topic, index) => {
              const author = top.users.filter(user => user.id === topic.posters[0].user_id)[0]
              const category = getCategoryById(topic.category_id)
              const itemProps = {
                title: topic.title,
                categoryName: category.name,
                categoryColor: category.color,
                tags: topic.tags,
                authorUrl: getUserUrlByUsername(author.username),
                authorName: author.username,
                authorAvatarUrl: getAvatarUrlByAvatarTemplateString(author.avatar_template),
                replyCount: topic.reply_count,
                lastPostedAt: topic.last_posted_at,
                link: getTopicUrlById(topic.id),
              }
              return (
                <Col key={index} sm={24} md={12}>
                  <TopItem {...itemProps}/>
                </Col>
              )
            })}
          </ResponsiveRow>
        </HomeSection>
        
        <HomeSection
          title={'TUG 活动'}
          className={styles.top}
          iconUrl={activityImageUrl}
          right={<LinkWithArrow href={'https://asktug.com'}>查看全部</LinkWithArrow>}
        >
          <ResponsiveRow justify="space-around" gutter={[32, 32]}>
            {events.map(((item, index) =>
              <Col key={index} xs={24} sm={16} md={16} lg={8}>
                <EventsItem {...item} />
              </Col>
            ))}
          </ResponsiveRow>
        </HomeSection>
  
        <HomeMVA/>
      </main>
    </>
  )
}
