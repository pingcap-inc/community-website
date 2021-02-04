import React from 'react'
import styles from './MVAItem.module.scss'
import MyLink from "components/MyLink";

export default function MVAItem({avatarUrl, name, company, title, links}) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.avatar}>
          <img src={`images/avatar/${name}.jpg`} alt={name}/>
          {/*<img src={`images/mva/avatar.svg`} alt={name}/>*/}
        </div>
        <div className={styles.name}>
          {name}
        </div>
        <div className={styles.organization}>
          {company}
        </div>
        <div className={styles.position}>
          {title}
        </div>
      </div>
  
      <div className={styles.hover}>
        <ol className={styles.links}>
          {links.map((link, index) => link.href && (link.href === '#' ?
            <li key={index}>{link.name}</li> :
            <li key={index}><MyLink href={link.href}>{link.name}</MyLink></li> ))}
        </ol>
      </div>
      
    </div>
  )
}
