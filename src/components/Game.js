import React from 'react'


const Game=(props)=>{
  return (
    <div id='game' onClick={()=>props.setDisplay(props.game.id)}>
    <h2 className= 'game-name'>{props.game.name}</h2>
    </div>
  )
}
export default Game
