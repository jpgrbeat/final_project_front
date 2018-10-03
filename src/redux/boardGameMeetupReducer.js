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
      console.log('here')
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
  function gamesReducer(state=[],action){
    switch (action.type) {
      case 'GET_GAMES':
        return action.payload
      default:
        return state

    }
  }
  function userGamesReducer(state=[],action){
    switch (action.type){
      case 'GET_USER_GAMES':
        return action.payload.filter(userGame => userGame.active ===  true && userGame.user_id === action.id)
      case 'DROP_GAME':
        return state.filter(
          userGame => (userGame.id !== action.id)
        )
      default:
        return state;
    }
  }
  function usersReducer(state=[],action){
    switch(action.type){
      case 'GET_USERS':
        return action.payload
      default:
        return state;
    }
  }

function friendsReducer(state=[], action){
  switch (action.type) {
    case 'SET_FRIENDS':
      return action.payload
    case 'ADD_FRIEND':
      return [...state, action.payload]

    default:
      return state;
  }
}

const rootReducer=combineReducers({
  users: userReducer,
  activeUser: activeUserReducer,
  events: eventsReducer,
  currentEvent: currentEventReducer,
  games: gamesReducer,
  userGames: userGamesReducer,
  users: usersReducer,
  friends: friendsReducer
})
export default rootReducer
