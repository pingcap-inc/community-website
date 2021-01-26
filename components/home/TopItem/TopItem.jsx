import React from 'react'
import styles from './TopItem.module.scss'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/zh'
import MyLink from "components/MyLink";

dayjs.extend(relativeTime)

export default function TopItem({title, categoryName, categoryColor, tags, authorUrl, authorName, authorAvatarUrl, replyCount, lastPostedAt, link}) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <MyLink href={link}>{title}</MyLink>
      </div>
      <div className={styles.metadata}>
        <div className={styles.metadata_category}>
          <Tag color={categoryColor}>{categoryName}</Tag>
          {tags.map((tag, index) => <Tag key={index} color={'ccc'}>{tag}</Tag>)}
        </div>
        <div className={styles.metadata_statistics}>
          <div className={styles.metadata_statistics_reply_count}>
            回复 {replyCount}
          </div>
          <div className={styles.metadata_statistics_last_posted_at}>
            {dayjs(lastPostedAt).locale('zh').fromNow()}
          </div>
        </div>
      </div>
    </div>
  )
}

function Tag({color, children}) {
  return (
    <div className={styles.tag}>
      <div className={styles.tag_color} style={{backgroundColor: `#${color}`}}/>
      <div className={styles.tag_name}>
        {children}
      </div>
    </div>
  )
}
