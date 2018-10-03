import React from 'react'
import {Segment,Image,Button} from 'semantic-ui-react'

const EventGame = (props) =>{
  return(
    <Segment style={{margin:'10px'}} color='purple'>
      <h4> {props.game.name}</h4>
      <Image  size='tiny' src={props.game.img} floated='right'/>
      <Button style={{margin:'10px'}} onClick={()=>props.gameClick(props.game)}>Add Game to Event</Button>
    </Segment>
  )
}
export default EventGame
