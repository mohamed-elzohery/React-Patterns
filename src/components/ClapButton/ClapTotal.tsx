import React from 'react';
import styles from './ClapButton.module.css';


const ClapTotal: React.FC<{total: number}> = ({total}) => {
  return (
    <div className={styles['clap-total']}>{total}</div>
  )
}

export default ClapTotal