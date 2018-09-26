import React from 'react'
import {connect} from 'react-redux'
import Calendar from '../components/ProfileCalendar'
import UserCard from '../components/UserCard'
import Login from '../forms/Login'
import Friends from '../containers/Friends'
import Events from '../containers/Events'
class Profile extends React.Component{

  render(){

    return <div id='user-page'>
    {this.props.activeUser !== null ? <div id= 'right-el'><UserCard/></div> : <div id='right-el'><Login/></div>}
    <div id= 'middle-el'>
      <Friends />
    </div>
    <div id= 'left-el'>
      <Calendar/>
    </div>
    <div id= 'bottom-left-el'>
    <Events/>
    </div>
    </div>
  }
}
const mapStateToProps= state => {
  return{
   activeUser: state.activeUser
 }
}

export default connect(mapStateToProps)(Profile);
