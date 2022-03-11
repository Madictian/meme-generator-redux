import Dice from "./Dice"

function DiceContainer({dices}) {
  return (
    <div className="diceContainer">

        {dices.map((dice)=>{
            return <Dice saved={dice.saved} key={dice.diceId} id={dice.diceId} value={dice.diceValue} />
        })}
        
    </div>
  )
}

export default DiceContainer