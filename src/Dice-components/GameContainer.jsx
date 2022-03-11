import { useDispatch } from "react-redux"
import { diceActions } from "../store/diceSlice";
import DiceContainer from "./DiceContainer"
import InfoText from "./InfoText"

function GameContainer({ dices, saveDice,  }) {
    let mofo = dices

    const dispatch = useDispatch();
    const roll = () => {
      dispatch(diceActions.reroll())
    }
    const reset = () => {
      dispatch(diceActions.reset())
    }
  return (
    <div className="gameContainer">
        <InfoText />
        <DiceContainer dices={dices} saveDice={ saveDice } />
        <button style={{
            fontFamily: 'Karla',
            fontStyle: 'bold',
            fontWeight:'700',

            borderRadius: '4px',
            
            backgroundColor:'#5035FF',
             color: 'white',
              width: '92px',
               height: '36px'}}
               onClick={mofo.some(item => item.saved === false) ? ()=>{roll()} : ()=>{reset()}}>
            { mofo.some(item => item.saved === false) ? 'Roll' : 'Reset Game'}
        </button>


    </div>
  )
}

export default GameContainer