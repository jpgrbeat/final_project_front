import React from 'react'
import DateTimeForm from './DateTimeForm'
import {Form,Button} from 'semantic-ui-react'
import {addEvent} from '../redux/actions/index'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class AddEvent extends React.Component{
  state={
    title: '',
    description:'',
    address: '',
    player_count: '',
    time_start: '',
    time_end: '',
    date: '',
  }

  onChangeHandler=(key,val)=>{
    this.setState({
      [key]: val
    })
  }
  render(){

    return(
      <div id='event-form'>
        <h1>New Event</h1>
        <Form onSubmit={()=>this.props.addEvent(this.state)}>
        <DateTimeForm setDateTime={this.onChangeHandler}/>
        <Form.Field>
        <label>Name of Event</label>
        <input onChange={(e)=>this.onChangeHandler('title', e.target.value)}/>
        </Form.Field>
        <Form.Field>
        <label>Description of Event</label>
        <textarea onChange={(e)=>this.onChangeHandler('description', e.target.value)}></textarea>
        </Form.Field>
        <Form.Field>
        <label>Address</label>
        <input onChange={(e)=>this.onChangeHandler('address', e.target.value)}/>
        </Form.Field>
        <Form.Field>
        <label>Number of Players</label>
        <input onChange={(e)=>this.onChangeHandler('player_count', e.target.value)}/>
        </Form.Field>
        <Button type='submit'>Create Event</Button>
        </Form>
      </div>
    )
  }
}
export default connect(null,{addEvent})(AddEvent)
