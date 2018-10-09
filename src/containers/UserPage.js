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
    let f = [...this.props.user.invitors,...this.props.user.invitees]
    this.setState({friends: f})
    this.props.setFriends(f)
  }
  render(){
    this.props.user && this.state.friends.length === 0 ? this.createFriends() : null

    this.props.setActiveUser(this.props.user)
    return <div id='user-page'>
    {this.props.user !== null ? <div id= 'right-el'><UserCard history={this.props.history} user={this.props.user}/></div> : null}
    <div id= 'middle-el'>
      <Friends/>
    </div>
    <div id= 'left-el'>
      <Calendar/>
    </div>
    <div id= 'bottom-left-el'>
    <Events/>
    </div>
    <div id='user-games'>
    {this.props.user ? <ProfileGameContainer/> : null}
    </div>
    </div>
  }
}


const mapStateToProps=(state)=>{return{
  user: state.activeUser
}}
export default connect (mapStateToProps,{setActiveUser,setFriends}) (Profile)
