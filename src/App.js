import React from 'react';
import './App.css';
import Login from './forms/Login'
import CreateNewUser from './forms/CreateNewUser'
import EditUser from './forms/EditUser'
import Profile from './containers/UserPage'
import NavBar from './containers/NavBar'
import AddEvent from './forms/AddEvent'
import EventShow from './components/EventShow'
import {Button} from 'semantic-ui-react'
import { Route, Switch, Link} from 'react-router-dom'
import AddGamePage from './containers/AddGamePage'
import {setActiveUser,getUserGames,getGames,getUsers} from './redux/actions/index'
import {connect} from 'react-redux'
import FriendSearch from './forms/FriendSearch'
const requestHelper = url =>
  fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    }
  }).then(res => {
    if (res.status === 401) {
      alert("login failed");
    } else {
      return res.json();
    }
  });

class App extends React.Component {
  state={
    user: null
  }

  fetchUser = () => {
    console.log('fetch')
    requestHelper("http://localhost:3000/me").then(user => {this.updateUser(user)
  });
  }

  componentDidMount(){
    console.log('mounted')
    if (localStorage.getItem("token")) {
      this.fetchUser();
    }
  }

  updateUser = user => {

    this.setState({ user },()=> console.log(this.state));
    this.props.setActiveUser(user)
    this.props.getUsers()
    console.log('update_uder',user)

    this.props.getUserGames(user.id)
    this.props.getGames()
  }

  logout=()=>{
    this.setState({ user:null})
    localStorage.clear()
    this.props.history.push('/profile')

  }

  render(){
    return (
      <React.Fragment>
      <NavBar logout={this.logout}/>
      <Switch>
      <Route exact path='/' render={() => (
            <React.Fragment>
              <div id="welcome">
                <h1> Welcome to Clever Name</h1>
                <p>The site built to bring Boardgamers together</p>
                <p>Create events and invite your friends or just about anyone</p>
                <p>Login or create an account to get started!</p>

                <Link className="ui purple button" color='purple' to="/login">Log In</Link>
                <Link className="ui yellow button"  color= 'yellow' to="/new_user">Create New User</Link>
              </div>
            </React.Fragment>
          )}/>
          <Route exact path='/login' render={(props) => <Login {...props} updateUser={this.updateUser}  />} />
          <Route exact path= '/new_user' render={(props) => <CreateNewUser {...props}/>}/>
          <Route exact path= '/profile' render={(props) => <Profile{...props} user={this.state.user}/>}/>
          <Route exact path = '/add_event' render={(props) =>< AddEvent {...props} />}/>
          <Route exact path= '/edit_user' render={(props) => <EditUser {...props} />}/>
          <Route to path= '/event' render={(props) => <EventShow {...props} />}/>
          <Route exact path= '/add_game' render={(props) => <AddGamePage {...props}/>}/>
          <Route exact path= '/add_friends' render={(props)=> <FriendSearch {...props}/>}/>
        </Switch>
        </React.Fragment>
    );
  }
}
const mapStateToProps=(state)=>{
  return({
    users: state.users,
    userGames: state.userGames,
  })
}


export default connect(mapStateToProps,{setActiveUser,getUserGames,getGames,getUsers})(App)
