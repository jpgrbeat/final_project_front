import React from 'react'
import {
  Image,
  List,
  Header,
  Icon,
  Segment
} from 'semantic-ui-react'



const FriendItem =(props)=>{
  console.log(props)
  return(

    <List.Item key={props.friend.id}>
      <Image avatar src={props.friend.img} />
    <List.Content>
      <List.Header>{props.friend.name}</List.Header>
    
    </List.Content>

    </List.Item>

  )
}
export default FriendItem
