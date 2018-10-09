import React, { Component } from 'react'
import {Dropdown } from 'semantic-ui-react'
import _ from 'lodash'
import {connect} from 'react-redux'
import UserCard from '../components/UserCard'


let source;
class FriendSearch extends Component{

state={
  selected:false,
  selectedUser: ''
}

  changeHandler=(event, data)=>{
    let friend = this.props.users.find(user=> user.id === data.value)
    this.setState({
      selected:true,
      selectedUser: friend
    })
  }

 render() {
   this.props.users ? source = this.props.users.map(user=>{return{ text: user.name, image: user.img, description: user.username, value: user.id}}): null
   return (
     <div>
      <Dropdown
      icon='add user'
      className='icon'
      button
      options={source}
      labeled
      search
      text='Find Friends...'
      onChange={this.changeHandler}
      />
      {this.state.selected ? <UserCard history={this.props.history} user={this.state.selectedUser}/> : null}
      </div>
     )
}
}
const mapStateToProps=(state)=>{
  return{
    users: state.users,
    user: state.activeUser,
    friends: state.friends
  }
}
export default connect(mapStateToProps)(FriendSearch)
