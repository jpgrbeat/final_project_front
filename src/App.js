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
    user: ''
  }

  fetchUser = () => {
    requestHelper("http://localhost:3000/me").then(user => { this.updateUser(user)
  });
  }
  componentDidMount(){
    if (localStorage.getItem("token")) {
      this.fetchUser();
    }
  }

  updateUser = user => {
    this.setState({ user });
  };

  render(){
    return (
      <React.Fragment>
      <NavBar/>
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
          <Route exact path= '/profile' render={() => <Profile />}/>
          <Route exact path = '/add_event' render={() =><AddEvent />}/>
          <Route exact path= '/edit_user' render={(props) => <EditUser {...props} />}/>
          <Route exact path= '/event' render={(props) => <EventShow {...props} />}/>
        </Switch>
        </React.Fragment>
    );
  }
}

export default App;
