import Face from "./Face.jsx"

export default function Dice({value, isHeld, holdDice, id}) {

  const styles = {
    backgroundColor: isHeld ? "#59E391" : "white"
  }
  return (
    // <div className="dice" style={styles} onClick={holdDice}><h2>{value}</h2></div>
    <div className="dice" style={styles} onClick={holdDice}><Face value={value}/></div>
  )
}