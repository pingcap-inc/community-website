import React from 'react';
import styles from './HomeSection.module.scss';
import classNames from 'classnames';
import Container from 'components/Container/Container';

export default function HomeSection({
  className: classNameInput,
  iconUrl,
  title,
  backgroundGray,
  right,
  children,
  ...rest
}) {
  return (
    <div
      className={classNames(classNameInput, styles.wrapper, {
        [styles.background_gray]: backgroundGray,
      })}
      {...rest}
    >
      <Container>
        <div className={styles.header}>
          <div className={styles.header_left}>
            {iconUrl && (
              <div className={styles.header_left_icon}>
                <img src={iconUrl} alt="" />
              </div>
            )}
            <div className={styles.header_left_title}>{title}</div>
          </div>
          <div className={styles.header_right}>{right}</div>
        </div>
        <div className={styles.body}>{children}</div>
      </Container>
    </div>
  );
}
