import React from 'react';
import styles from './ClapButton.module.css';

const ClapCount: React.FC<{count: number}> = ({count}) => {
  return (
    <div className={styles['clap-count']}>+{count}</div>
  )
}

export default ClapCount