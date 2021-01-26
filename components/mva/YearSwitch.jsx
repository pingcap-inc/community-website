import React from "react";
import styles from "./YearSwitch.module.scss";
import {Space} from "antd";
import classNames from 'classnames'

export default function YearSwitch({onClick, items, value}) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.label}>
        年份
      </div>
      <Space className={styles.options} size={16}>
        {items.map((item, index) =>
          <div
            key={index}
            className={classNames(styles.options_item, {
              [styles.options_item_selected]: value === item.value,
            })}
            onClick={() => onClick(item.value)}>
            {item.name}
          </div>
        )}
      </Space>
    </div>
  )
}
