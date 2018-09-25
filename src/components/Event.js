import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {setCurrentEvent} from '../redux/actions/index'
const Event=(props)=>{
 return <div id='event-el'>
  <Modal size='small' trigger={<h3>{props.event.title}</h3>}centered={true}>
  <div id='inner-event-el'>
    <Modal.Header>{props.event.title}</Modal.Header>
    <Modal.Content>
      <h4>{props.event.date}</h4>
    </Modal.Content>
    <Modal.Description>
      <h5>Time Start:{props.event.time_start}- Time End:{props.event.time_end}</h5>
      <p>{props.event.description}</p>
      <Link id='event-detail-button' onClick={()=> props.setCurrentEvent(props.event)} exact to= '/event' className='ui button'>Go to Event Page</Link>
    </Modal.Description>
    </div>
  </Modal>
 </div>

}
export default connect(null,{setCurrentEvent})(Event)
