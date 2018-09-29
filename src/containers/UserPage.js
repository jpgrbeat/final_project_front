import React from 'react'
import {connect} from 'react-redux'
import Calendar from '../components/ProfileCalendar'
import UserCard from '../components/UserCard'
import Login from '../forms/Login'
import Friends from '../containers/Friends'
import Events from '../containers/Events'
import ProfileGameContainer from '../containers/ProfileGameContainer'
class Profile extends React.Component{

  render(){

    return <div id='user-page'>
    {this.props.user !== null ? <div id= 'right-el'><UserCard user={this.props.user}/></div> : null}
    <div id= 'middle-el'>
      <Friends />
    </div>
    <div id= 'left-el'>
      <Calendar/>
    </div>
    <div id= 'bottom-left-el'>
    <Events/>
    </div>
    <div id='user-games'>
    {this.props.user !== null ? <ProfileGameContainer/> : null}
    </div>
    </div>
  }
}


export default Profile
