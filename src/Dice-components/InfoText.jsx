
function InfoText() {
    const rules = 'Roll until all dice are the same. Click each die to freeze it at its current value between rolls.';
  return (
    <div>
        <h2 style={{color: '#4A4E74', font: 'Karla'}}>Tenzies</h2>
        <h3 style={{font:'inter', fontWeight: 400, fontSize:'13px', lineHeight: '15px', width: '230px', color: '#4A4E74'}}>{rules}</h3>

    </div>
  )
}

export default InfoText