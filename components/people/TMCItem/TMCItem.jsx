import React from 'react'
import styles from './TMCItem.module.scss'

export default function TMCItem({avatarUrl, name, organization, position}) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.avatar}>
        <img src={avatarUrl} alt={name}/>
      </div>
      <div className={styles.name}>
        {name}
      </div>
      <div className={styles.metadata}>
        {organization} {position}
      </div>
    </div>
  )
}
