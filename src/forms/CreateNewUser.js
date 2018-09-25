import React from 'react'
import {Form,Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'


class CreateNewUser extends React.Component{
  state={
    name:'',
    username:'',
    password: '',
    img: '',
    description: '',
    email: ''
  }

  changeHandler=(val, key)=>{
      this.setState({
        [key]: val
      })
    }

    createNewUser= e =>{
      e.preventDefault

        fetch('http://localhost:3000/users/',{
            method:'POST',
            headers:{
              'Content-Type':'application/json',
              Accept:'application/json'
            },
            body: JSON.stringify({user:{
              name: this.state.name,
              username: this.state.username,
              email: this.state.email,
              password: this.state.password,
              description: this.state.description,
              img: this.state.img
            }})
          })
          .then(res => res.json())
          .then(json => console.log(json))
        .then(this.props.history.push('/login'))
      }


  render(){
    return(
      <Form onSubmit={this.createNewUser} style={{padding: '10%', width: '50%', margin: 'auto'}}>
      <Form.Field>
        <label>Name</label>
        <input onChange={(e) => this.changeHandler(e.target.value,'name')} placeholder="Name"/>
      </Form.Field>
      <Form.Field>
        <label>Username</label>
        <input onChange={(e) => this.changeHandler(e.target.value,'username')} placeholder="Username"/>
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <input onChange={(e) => this.changeHandler(e.target.value,'password')} placeholder="Password"/>
      </Form.Field>
      <Form.Field>
        <label>Email</label>
        <input onChange={(e) => this.changeHandler(e.target.value,'email')} placeholder="Email"/>
      </Form.Field>
      <Form.Field>
        <label>Profile Picture</label>
        <input onChange={(e) => this.changeHandler(e.target.value,'img')} placeholder="Insert jpg link here"/>
      </Form.Field>
      <Form.TextArea  onChange={(e) => this.changeHandler(e.target.value,'description')} label='About' placeholder='Tell everyone what kind of gamer you are...' />
      <Button type='submit'>Create</Button>
      </Form>
    )
  }
}
export default CreateNewUser
