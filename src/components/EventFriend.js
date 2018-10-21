import React from 'react'
import {Segment,Image,Button} from 'semantic-ui-react'

const EventFriend = props =>{

  return(
    <div>
    <Segment style={{margin:'10px'}} color='yellow' >
      <h4>{props.friend.name}</h4>
      <Image size= 'small' circular src= {props.friend.img} floated='right'/>
      <Button style={{margin: '5px'}}  onClick={()=>props.friendClick(props.friend)}>invite</Button>
      </Segment>
    </div>
  )
}
export default EventFriend
