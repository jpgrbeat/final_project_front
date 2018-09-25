import {combineReducers} from 'redux'



function userReducer (state=[],action){
  switch(action.type){
    case 'UPDATE_USER':
      let newUsers = state.users.filter(user=> user.id !== action.user.id)
      return [...state, action.user]

    default:
      return state
  }
}
  function activeUserReducer(state=null,action){
    switch(action.type){
      case 'SET_ACTIVE_USER':
        return action.user
      case 'EDIT_USER':
        return action.user
      default:
        return state
    }
  }

  function eventsReducer(state=[],action){
    switch (action.type) {
      case 'GET_EVENTS':
      return action.payload
      case 'ADD_EVENT':
      return [...state, action.payload]
      default:
        return state;
    }
  }
  function currentEventReducer(state=null, action){
    switch(action.type){
      case 'SET_CURRENT_EVENT':
        return action.event
      default:
        return state
    }
  }

const rootReducer=combineReducers({
  users: userReducer,
  activeUser: activeUserReducer,
  events: eventsReducer,
  currentEvent: currentEventReducer
})
export default rootReducer
