import{
  SET_ACTIVE_USER,
  EDIT_USER,
  GET_EVENTS,
  ADD_EVENT,
  SET_CURRENT_EVENT,
  GET_GAMES,
  GET_USER_GAMES,
  GET_USERS,
  SET_FRIENDS,
  DROP_GAME,
  ADD_FRIEND
} from'./types'
import { push } from 'react-router-redux';


export function setActiveUser(user){
  return {type: SET_ACTIVE_USER, user: user}
}
//
export function editUser(user){
  return function (dispatch){
    return fetch(`http://localhost:3000/users/${user.id}`,{
    method: 'PATCH',
    headers:{
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      Authorization: `Bearer ${localStorage.getItem("token")}`
    },
    body:JSON.stringify({
      name: user.name,
      username:user.username,
      password: user.password,
      img: user.img,
      description: user.description,
      email: user.email
    })
  })
  .then(res => res.json())
  .then(json=>{
    dispatch({type: EDIT_USER, user: user})
    return true
  })
}
}
export function getEvents(){
  return function(dispatch){
  fetch("http://localhost:3000/events")
  .then(res => res.json())
  .then(events=>{
    dispatch({type: GET_EVENTS, payload: events})
  })
  }
}
export function getGames(){
  return function(dispatch)
  {
  fetch(`http://localhost:3000/games`)
  .then(res => res.json())
  .then(json =>{
    dispatch({type: GET_GAMES, payload: json})
  })
}

}

export function addEvent(f){
  return function (dispatch){

    fetch('http://localhost:3000/events',{
      method: 'POST',
      headers:{
        'Content-Type':'application/json',
        'Accept':'application/json',
        Authorization: `Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify({
        time_start: f.time_start,
        time_end: f.time_end,
        description: f.description,
        date: f.date,
        title: f.title,
        address: f.address,
        player_count: f.player_count
      })
    })
  .then(res => res.json())
  .then(json =>{
    dispatch({type: ADD_EVENT, payload: json})
    dispatch({type: SET_CURRENT_EVENT, event: json})
  })
  // .then(dispatch(push('/event')))
  }
}
export function setCurrentEvent(id){
  return function(dispatch){
    return fetch(`http://localhost:3000/events/${id}`,{
      headers:{
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    }
    )
    .then(res=> res.json())
    .then(json=>{
      dispatch({type: SET_CURRENT_EVENT, event: json})
      return true
    })
  }
}

export function getUserGames(id){
  return function(dispatch){
    fetch('http://localhost:3000/user_games')
    .then(res => res.json())
    .then(user_games =>{
      let r = user_games.filter(x => x.user_id === id)
      dispatch({type: GET_USER_GAMES, payload: r, id: id})
    })
  }
}

export function getUsers(){
  return function(dispatch){
    fetch('http://localhost:3000/users')
    .then(res => res.json())
    .then(json =>{
      console.log(json)
      dispatch({type: GET_USERS, payload: json})
    }
    )
  }
}

export function setFriends(friends){
  return {type: SET_FRIENDS, payload: friends}
}
export function addFriend(friendId, userId){
  return function(dispatch){
  fetch('http://localhost:3000/friends',{
method: "POST",
headers:{
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  Authorization: `Bearer ${localStorage.getItem("token")}`
},
body: JSON.stringify({friend:{
  invitor_id: userId,
  invitee_id: friendId
}})
}).then(res=> res.json())
.then(json=>{
  dispatch({type: ADD_FRIEND, payload: json.invitee})
})
}
}

export function dropGame(userGameId){
  return function(dispatch){
  fetch(`http://localhost:3000/user_games/${userGameId}`,{
    method:'PATCH',
    headers:{
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      Authorization: `Bearer ${localStorage.getItem("token")}`
    },
    body:JSON.stringify({user_game:{
      active:false
    }})
  }).then(res => res.json())
  .then(json=>{
    dispatch({type:DROP_GAME, id: userGameId, userGame: json})
  })
}
}
