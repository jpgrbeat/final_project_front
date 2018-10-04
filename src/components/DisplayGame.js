import React from 'react'
import {Button, Grid} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {addUserGame} from '../redux/actions/index'

const DisplayGame=(props)=>{
  function clickHandler(event){
    let gameId = event.target.parentNode.id
    let userId = props.user.id

    props.addUserGame(gameId,userId)

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
export default connect(mapStateToProps, {addUserGame})(DisplayGame)
