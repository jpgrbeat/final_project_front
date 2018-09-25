import React from 'react'
import {connect} from 'react-redux'


const EventShow=(props)=>{
  return(
    <div>
    <h1>{props.event.title}</h1>
    <h3>{props.event.date}</h3>
    <h3>{props.event.time_start}</h3>{' '}<h3>{props.event.time_end}</h3>
    </div>
  )
}
const mapStateToProps=(state)=>{
  return {
    event: state.currentEvent
  }
}
export default connect(mapStateToProps)(EventShow)
