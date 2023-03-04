import React from 'react';
import {ReactComponent as ClapIcon} from './clapp.svg';
import classes from './ClapButton.module.css';
import ClapCount from './ClapCount';
import ClapTotal from './ClapTotal';
import WithAnimation from '../../HOCs/WithAnimation';

const ClapButton = () => {
  return (
    <button className={classes['clap-button']}>
        <ClapIcon className={classes['clap-icon']} />
        <ClapCount count={0} />
        <ClapTotal total={0} />
    </button>
  )
};

const ClapButtonWithAnimation = () => {
  return <WithAnimation><ClapButton /></WithAnimation>
}

export default ClapButtonWithAnimation