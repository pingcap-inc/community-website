import React from 'react'
import styles from './TMCItem.module.scss'

export default function TMCItem({name, company, title}) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.avatar}>
        {/*<img src={`images/avatar/${name}.jpg`} alt={name}/>*/}
        <img src={`images/people/avatar.svg`} alt={name}/>
      </div>
      <div className={styles.name}>
        {name}
      </div>
      <div className={styles.metadata}>
        {company} {title}
      </div>
    </div>
  )
}
