import React from 'react';
import styles from './styles/cssModule.module.css';

//CSS Module
// - 클래스명 중복 방지

export default function CssModuleComponents() {
  console.log(styles);
  return (
    <div className={styles.container}>
      {/* 클래스명 간 공백 중요 */}
      <div className={[styles.red, styles.box].join(' ')}></div>
      <div className={[styles.orange, styles.box].join(' ')}></div>
      <div className={`${styles.yellow} ${styles.box}`}></div>
    </div>
  );
}
