import React from 'react'
import styles from './ArticleItemWithExcerpt.module.scss'
import MyLink from "components/MyLink";

export default function ArticleItemWithExcerpt({title, authorUrl, authorName, authorAvatarUrl, views, excerpt, link}) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <MyLink href={link}>{title}</MyLink>
      </div>
      <div className={styles.metadata}>
        <a className={styles.metadata_author} href={authorUrl} target="_blank" rel="noopener noreferer">
          <div className={styles.metadata_author_avatar}>
            <img src={authorAvatarUrl} alt=""/>
          </div>
          <div className={styles.metadata_author_name}>
            {authorName}
          </div>
        </a>
        <div className={styles.metadata_views}>
          {views} 人阅读
        </div>
      </div>
      <div className={styles.excerpt}>
        {excerpt}
      </div>
    </div>
  )
}
