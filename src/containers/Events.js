import React from 'react'
import {connect} from 'react-redux'
import {getEvents} from '../redux/actions/index'
import Event from '../components/Event'
class Events extends React.Component{
  componentDidMount(){
     this.props.getEvents()
  }

  render(){
    return(
      <div>
        <h2>Events</h2>
        {this.props.events  ? this.props.events.map(event => <Event event={event}/> ):null}
      </div>
    )
  }
}
const mapStateToProps=(state)=>{return{
  events: state.events,
  activeUser: state.activeUser
}}
export default connect(mapStateToProps,{getEvents})(Events)
