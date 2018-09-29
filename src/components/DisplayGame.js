import React from 'react'
import {Button, Grid} from 'semantic-ui-react'
import {connect} from 'react-redux'


const DisplayGame=(props)=>{
  function clickHandler(event){
    let gameId = event.target.parentNode.id
    let userId = props.user.id
    fetch('http://localhost:3000/user_games',{
    method: 'POST',
    headers:{
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      Authorization: `Bearer ${localStorage.getItem("token")}`
    },
    body:JSON.stringify({user_game:{
      user_id: userId,
      game_id: gameId
    }})
  })
  .then(res => res.json())
  .then(json => console.log(json))

  }
  return(
    <div id={props.game.id} className='game-display' style={{padding: '1px'}}>

      <img  style={{margin: '10px'}}src={props.game.img}/>

      <h4>Player count: {props.game.max_players}</h4>
      <h4>Playing time: {props.game.playing_time}</h4>
      <h4>Publisher: {props.game.publisher}</h4>

       <p style={{margin: '5px'}}>{props.game.description}</p>
       <Button onClick={clickHandler} style={{margin: '5px'}}>Add Game</Button>

    </div>
  )
}
const  mapStateToProps=(state)=>{
  return{ user: state.activeUser}
}
export default connect(mapStateToProps)(DisplayGame)
