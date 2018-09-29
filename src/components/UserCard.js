import React from 'react'
import { Card,Image,Button } from 'semantic-ui-react'
import {Link} from "react-router-dom"
import {connect} from 'react-redux'


const UserCard = props =>{
  console.log(props.user)
  return(
  <Card>
    <Image id='user-image' src= {props.user.img} />
    <Card.Content>
      <Card.Header>{props.user.username}</Card.Header>
      <Card.Meta>{props.user.name}</Card.Meta>
      <Card.Description>{props.user.description}</Card.Description>
      <Button id='edit-user-button'><Link to='/edit_user'>Edit</Link></Button>
    </Card.Content>
  </Card>
)
}
export default UserCard
