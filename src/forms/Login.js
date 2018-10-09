import React from 'react'
import {setActiveUser} from '../redux/actions/index'
import {connect} from 'react-redux'
import {Button, Form} from 'semantic-ui-react'
 class Login extends React.Component{
  handleSubmit = e => {
    let data = JSON.stringify({
      username: e.target.querySelector('input[name="username"]').value,
      password: e.target.querySelector('input[name="password"]').value
    });

    fetch('http://localhost:3000/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Accept': "application/json"
      },
      body: data
    })
      .then(res => {

        if (res.status === 401) {
          alert("login failed");
        } else {
          return res.json();

        }
      })
      .then(json => {
        const user = {...json.user, games: json.user_games, invitees: json.invitees, invitors: json.invitors}
        this.props.updateUser(user);
        console.log('login', user)
        this.props.setActiveUser(user)
        localStorage.setItem("token", json.token);
        this.props.history.push('/profile')

      });
  };
  render(){
    return (
      <Form onSubmit={this.handleSubmit} style={{padding: '10%', width: '50%', margin: 'auto'}}>
      <Form.Field>
        <label>Username</label>
        <input name= 'username' placeholder="Username"/>
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <input name= 'password' placeholder="Password"/>
      </Form.Field>
      <Button  type='submit'>Login</Button>
      </Form>
    )
  }
}
export default connect(null,{setActiveUser})(Login)
