import React from "react";
import styles from "./BecomeMVA.module.scss";

export default function BecomeMVA({iconUrl, title, summary}) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.icon}>
        <img src={iconUrl} alt=""/>
      </div>
      <div className={styles.title}>
        {title}
      </div>
      <div className={styles.summary}>
        {summary}
      </div>
    </div>
  )
}
