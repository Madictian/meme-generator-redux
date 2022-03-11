import './DiceApp.css';
import GameContainer from './Dice-components/GameContainer';
import { useEffect,  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { diceActions } from './store/diceSlice';



function DiceApp() {

  
  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(diceActions.fill())
    
  }, [dispatch])

  const dice = useSelector(state => state.dice.diceList)


  return (
    <div className="DiceApp">
      <GameContainer dices={dice}  />
    </div>
  );
}

export default DiceApp;
