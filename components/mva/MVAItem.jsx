import React from 'react'
import styles from './MVAItem.module.scss'

export default function MVAItem({avatarUrl, name, organization, position}) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.avatar}>
        <img src={avatarUrl} alt={name}/>
      </div>
      <div className={styles.name}>
        {name}
      </div>
      <div className={styles.organization}>
        {organization}
      </div>
      <div className={styles.position}>
        {position}
      </div>
    </div>
  )
}
