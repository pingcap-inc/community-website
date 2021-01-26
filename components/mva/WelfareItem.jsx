import React from "react";
import styles from "./WelfareItem.module.scss";

export default function WelfareItem({iconUrl, name}) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wireframe}/>
      <div className={styles.content}>
        <div className={styles.icon}>
          <img src={iconUrl} alt=""/>
        </div>
        <div className={styles.name}>
          {name}
        </div>
      </div>
    </div>
  )
}
