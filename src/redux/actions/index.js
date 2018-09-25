import{
  SET_ACTIVE_USER,
  EDIT_USER,
  GET_EVENTS,
  ADD_EVENT,
  SET_CURRENT_EVENT
} from'./types'
import { push } from 'react-router-redux';


export function setActiveUser(user){
  return {type: SET_ACTIVE_USER, user: user}
}
//
export function editUser(user){
  return function (dispatch){
    fetch(`http://localhost:3000/users/${user.id}`,{
    method: 'PATCH',
    headers:{
      'Content-Type': 'application/json',
      'Accept': 'application/json'
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
  .then(dispatch({type: EDIT_USER, user: user}))
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

export function addEvent(f){
  return function (dispatch){

    fetch('http://localhost:3000/events',{
      method: 'POST',
      headers:{
        'Content-Type':'application/json',
        'Accept':'application/json',
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
export function setCurrentEvent(f){
  return {type: SET_CURRENT_EVENT, event: f}
}
