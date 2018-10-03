import React from 'react'
import {Form,Button} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {editUser} from'../redux/actions/index'
import {Link} from 'react-router-dom'
 class EditUser extends React.Component{

  state={
    name: this.props.user.name,
    username:this.props.user.username,
    password: this.props.user.password,
    img: this.props.user.img,
    description: this.props.user.description,
    email: this.props.user.email
  }

  changeHandler=(val, key)=>{
      this.setState({
        [key]: val
      })
    }
  render(){
    return(
      <Form onSubmit={
        this.props.editUser(this.state)

      } style={{padding: '10%', width: '50%', margin: 'auto'}}>
      <Form.Field>
        <label>Name</label>
        <input value= {this.state.name} onChange={(e) => this.changeHandler(e.target.value,'name')} placeholder="Name"/>
      </Form.Field>
      <Form.Field>
        <label>Username</label>
        <input value={this.state.username} onChange={(e) => this.changeHandler(e.target.value,'username')} placeholder="Username"/>
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <input value={this.state.password} onChange={(e) => this.changeHandler(e.target.value,'password')} placeholder="Password"/>
      </Form.Field>
      <Form.Field>
        <label>Email</label>
        <input value={this.state.email} onChange={(e) => this.changeHandler(e.target.value,'email')} placeholder="Email"/>
      </Form.Field>
      <Form.Field>
        <label>Profile Picture</label>
        <input  value= {this.state.img} onChange={(e) => this.changeHandler(e.target.value,'img')} placeholder="Insert jpg link here"/>
      </Form.Field>
      <Form.TextArea value= {this.state.description} onChange={(e) => this.changeHandler(e.target.value,'description')} label='About' placeholder='Tell everyone what kind of gamer you are...' />
      <Button type='submit'><Link to='/profile'>Edit</Link></Button>
      </Form>
    )
  }
}
const mapStateToProps = state =>{return{user: state.activeUser}}

export default connect(mapStateToProps,{editUser})(EditUser)
