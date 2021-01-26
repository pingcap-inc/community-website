import React from 'react'
import styles from './HowToBecome.module.scss'

export default function HowToBecome({index, iconUrl, title}) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.index}>
        {index}
      </div>
      <div className={styles.avatar}>
        <img src={iconUrl} alt={title}/>
      </div>
      <div className={styles.title}>
        {title}
      </div>
    </div>
  )
}
