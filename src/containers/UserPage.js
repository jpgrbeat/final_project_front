import React from 'react'
import {connect} from 'react-redux'
import Calendar from '../components/ProfileCalendar'
import UserCard from '../components/UserCard'
import Login from '../forms/Login'
import Friends from '../containers/Friends'
import Events from '../containers/Events'
import ProfileGameContainer from '../containers/ProfileGameContainer'
import {setActiveUser, setFriends} from '../redux/actions/index'

class Profile extends React.Component{
    state={
      friends:[]
    }
  createFriends(){
    console.log('createFriends',this.props.user)
    let f = [...this.props.user.invitors,...this.props.user.invitees]
    this.setState({friends: f})
    this.props.setFriends(f)
  }
  render(){
    this.props.user && this.state.friends.length === 0 ? this.createFriends() : null

    this.props.setActiveUser(this.props.user)
    return (
      <div class="grid-container-profile">
        <div class="big-calendar">
          <Calendar/>
        </div>
        <div class="my-games-header">
          <h2>My Games</h2>
        </div>
        {this.props.user ?
        <div class="user-details">
          <UserCard history={this.props.history} user={this.props.user}/>
        </div>
        :null}
        <div class="friends-profile-container">
          <Friends/>
        </div>
        <div class="events-profile">
          <Events/>
        </div>
        <div class="profile-games">
          {this.props.user ? <ProfileGameContainer/> : null}
        </div>
      </div>
    )
  }
}


const mapStateToProps=(state)=>{return{
  user: state.activeUser
}}
export default connect (mapStateToProps,{setActiveUser,setFriends}) (Profile)
