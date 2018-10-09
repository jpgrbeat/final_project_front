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
    console.log('event props',this.props)
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
    console.log(this.state)
    let friends = [...this.state.event_users,json.user]
    this.setState({
    event_users: friends
  })
})
  }
  gameClick=(game)=>{
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
  render(){
  return(
    <Grid columns={3} divided style={{padding:'0 24px'}}>
    <Grid.Row style={{textAlign:'center'}}>
      <h1>Event</h1>
    </Grid.Row>
    <Grid.Row>
    {this.props.event ?
      <Grid.Column>

        <h1>{this.props.event.title}</h1>
        <h3>Date: {this.props.event.date}</h3>
        <h3> Starts At: {this.props.event.time_start} | Ends At: {this.props.event.time_end}</h3>
        <a href= {`https://www.google.com/maps/dir/?api=1/${this.props.event.address}`}>  Location: {this.props.event.address}</a>
        <br></br>
        <h4>{this.props.event.description}</h4>
      </Grid.Column> : null}
      <Grid.Column>
        <h2>Attending</h2>
        {this.state.event_users.length > 0 ? this.state.event_users.map(user => <h4>{user.name}</h4>) : null}
      </Grid.Column>
      <Grid.Column>
        <h2>Games At this Event</h2>
        {this.props.event ? this.state.event_games.map(game => <h4>{game.name}</h4>): null}
        </Grid.Column>
    </Grid.Row>

    <Grid.Row>

    <Grid.Column>
    </Grid.Column>

      <Grid.Column style={{paddingTop:'40px'}}>
      <h3> Invite Friends</h3>
        {this.props.user && this.props.user.invitors? this.props.user.invitors.concat(this.props.user.invitees).map(friend => <EventFriend friendClick={this.friendClick} friend={friend}/>) : null}
      </Grid.Column>
      <Grid.Column style={{paddingTop:'40px'}}>
      <h3> Add Games to Event</h3>

        {this.props.user ? this.props.user.games.map(game => <EventGame gameClick={this.gameClick} game= {game}/>) : null}
      </Grid.Column>
      </Grid.Row>
    </Grid>
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
