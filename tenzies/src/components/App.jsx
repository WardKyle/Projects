import React from "react"
import "./App.css"
import Dice from "./Dice"
import {nanoid} from "nanoid"
import Confetti from 'react-confetti'


function App(){
  const [roll, reRoll] = React.useState(randomDice()) 
  const [tenzies, setTenzies]  = React.useState(false)


  React.useEffect(() => {
    const allHeld = roll.every(el => el.isHeld === true)
    const firstValue = roll[0].value
    const allSameValue = roll.every(el => el.value === firstValue)
if(allHeld && allSameValue)setTenzies(true)
  },[roll])

  function randomDice(){
    const diceArr = [];
    for(let i=0;i<10;i++){
      diceArr.push({
        value: Math.ceil(Math.random() * 6),
        id: nanoid(),
        isHeld: false
      })        
    }
    return diceArr
  }

  function reRollDice(){
    const newRoll = randomDice()
    reRoll(prevState => prevState.map(el => el.isHeld? el : newRoll[prevState.indexOf(el)]))
  }

  function Hold(id){
    reRoll(prevState => {
      return prevState.map(el => el.id === id ? {...el, isHeld:!el.isHeld} : el)
    })
  }

  function resetGame(){
    setTenzies(false)
    reRoll(randomDice)
  }

  const thisRoll = roll.map(el => <Dice value={el.value} key={el.id} isHeld={el.isHeld} holdDice={()=>Hold(el.id)}/>)

  return (
    <main>
      <div className="instructions--container">
      <h1>Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p></div>
      <div className="dice--container">
        {thisRoll}
      </div>
      {tenzies? <div><button id="roll--button" onClick={resetGame}>New Game</button><Confetti /></div> : <button id="roll--button" onClick={reRollDice}>Roll</button>}
    </main>
  )
}

export default App