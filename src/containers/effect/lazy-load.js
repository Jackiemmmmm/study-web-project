import React from 'react';
import styles from './styles.scss';

export default function LazyLoad() {
  return (
    <div className={styles.lazy_load}>
      <img src="" alt="img-1" />
      <img src="" alt="img-2" />
    </div>
  );
}
