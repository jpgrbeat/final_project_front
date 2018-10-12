import React from 'react'
import {connect} from 'react-redux'
import EventFriend from '../components/EventFriend'
import EventGame from '../components/EventGame'
import {Grid, Header} from 'semantic-ui-react'
import {setCurrentEvent} from '../redux/actions/index'
class EventShow extends React.Component{
  state={
    event_user: '',
    event_game: '',
    event_games: [],
    event_users: []
  }
  componentDidMount(){
    let id = parseInt(this.props.history.location.pathname.split('/')[2])
    this.props.setCurrentEvent(id).then(()=>{
      this.setGames()
      this.setFriends()
    })
  }

  setGames=()=>{
      this.setState({
        event_games: this.props.event.games
      })
  }
  setFriends=()=>{
      this.setState({
        event_users: this.props.event.users
      })
  }
  friendClick=(friend)=>{
    let e_user = this.state.event_users.find(e_friend => e_friend.id === friend.id)
    if(e_user){
      alert('Friend already invited to event.')
    }else{
    fetch('http://localhost:3000/user_events',{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        Authorization: `Bearer ${localStorage.getItem("token")}`
      },
      body:JSON.stringify({
        event_id: this.props.event.id,
        user_id: friend.id
      })

    }
  ).then(res => res.json())
  .then(json => {
    let friends = [...this.state.event_users,json.user]
    this.setState({
    event_users: friends
  })
})
}
  }
  gameClick=(game)=>{
     let here = this.state.event_games.find(e_game => e_game.id === game.id)
     if(here){
       alert('Game is already coming to event')
     }else{
    fetch('http://localhost:3000/event_games',{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        Authorization: `Bearer ${localStorage.getItem("token")}`
      },
      body:JSON.stringify({
        event_id: this.props.event.id,
        game_id: game.id
      })

    }
  ).then(res => res.json())
  .then(json => {
    let games = [...this.state.event_games, json.game]
    this.setState({
    event_games: games
  })
})
}
  }
  render(){
  return(
    <div class="grid-container">
      <div class="event-page-header">
        <h1>Event</h1>
      </div>

      <div class="event-header">
      {this.props.event ?
        <h1>{this.props.event.title}</h1>
        :null}
      </div>
      <div class="event-details">
        {this.props.event ?
          <div>
        <h3>Date: {this.props.event.date}</h3>
        <h3> Starts At: {this.props.event.time_start} | Ends At: {this.props.event.time_end}</h3>
        <a href= {`https://www.google.com/maps/dir/?api=1/${this.props.event.address}`}>  Location: {this.props.event.address}</a>
        <br></br>
        <h4>{this.props.event.description}</h4>
        </div>
        : null}
      </div>
      <div class="friends-coming-header">
        <h2>Attending</h2>
      </div>
      <div class="friends-coming-list">
        {this.state.event_users.length > 0 ? this.state.event_users.map(user => <h4 style={{marginLeft: '10px'}}>{user.name}</h4>) : null}
      </div>
      <div class="games-coming-header">
        <h2> Games at This Event</h2>
      </div>
      <div class="games-coming-list">
        {this.props.event ? this.state.event_games.map(game => <h4 style={{marginLeft: '10px'}}>{game.name}</h4>): null}
      </div>
      <div class="comments-header">
        <h2>Comments</h2>
      </div>
      <div class="comments-list">
      </div>
      <div class="friends-list-header">
      <h2> Invite Friends</h2>
      </div>
      <div class="friends-list">
        {this.props.user && this.props.user.invitors? this.props.user.invitors.concat(this.props.user.invitees).map(friend => <EventFriend friendClick={this.friendClick} friend={friend}/>) : null}
      </div>
      <div class="games-list-header">
        <h2>Add Games</h2>
      </div>
      <div class="games-list">
      {this.props.user ? this.props.user.games.map(game => <EventGame gameClick={this.gameClick} game= {game}/>) : null}
      </div>
    </div>
  )
}
}
const mapStateToProps=(state)=>{
  return {
    event: state.currentEvent,
    user: state.activeUser
  }
}
export default connect(mapStateToProps,{setCurrentEvent})(EventShow)
