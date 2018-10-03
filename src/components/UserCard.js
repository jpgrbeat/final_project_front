import React from 'react'
import { Card,Image,Button } from 'semantic-ui-react'
import {Link} from "react-router-dom"
import {connect} from 'react-redux'
import {addFriend} from '../redux/actions/index'

const UserCard = props =>{
  const addFriend=()=>{
    props.addFriend(props.user.id,props.activeUser.id )

    props.history.push('/profile')
  }
  return(
  <Card>
    <Image id='user-image' src= {props.user.img} />
    <Card.Content>
      <Card.Header>{props.user.username}</Card.Header>
      <Card.Meta>{props.user.name}</Card.Meta>
      <Card.Description>{props.user.description}</Card.Description>
      {props.activeUser && props.user && props.user.id !== props.activeUser.id ?   <Button onClick= {addFriend}style={{margin: '5px'}}>Add Friend</Button> : <Button id='edit-user-button'><Link to='/edit_user'>Edit</Link></Button>}
    </Card.Content>

  </Card>
)
}
const mapStateToProps=(state)=>{
  return{
    activeUser: state.activeUser,
    users: state.users
  }
}
export default connect(mapStateToProps,{addFriend})(UserCard)
