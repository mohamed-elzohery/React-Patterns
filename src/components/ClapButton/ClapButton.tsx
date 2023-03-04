import React, { useReducer } from 'react';
import {ReactComponent as ClapIcon} from './clapp.svg';
import classes from './ClapButton.module.css';
import ClapCount from './ClapCount';
import ClapTotal from './ClapTotal';
import WithAnimation, { Animatable } from '../../HOCs/WithAnimation';
import reducer, { ClapButtonIncrement, ClapButtonMargClicked } from './ClabButtonReducer'

const initialState = {
  isClicked: false,
  count: 0,
  totalCount: 200
};

export type ClapButtonStateType =  typeof initialState;

interface ClapButtonPropsI extends Partial<Animatable>{

}

const ClapButton: React.FC<ClapButtonPropsI> = ({animate}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const MAX_COUNT = 50;

  const handleClapClick = () => {
    // Optionally animate button
    animate?.();
    if(state.count >= MAX_COUNT) return;
    dispatch(ClapButtonIncrement);
    if(state.isClicked) return;
    dispatch(ClapButtonMargClicked);
  }

  return (
    <button className={classes['clap-button']} type='button' onClick={handleClapClick}>
        <ClapIcon className={classes['clap-icon']} />
        <ClapCount count={state.count} />
        <ClapTotal total={state.totalCount} />
    </button>
  )
};

const ClapButtonWithAnimation = () => {
  return <WithAnimation WrappedElement={ClapButton} />
}

export default ClapButtonWithAnimation