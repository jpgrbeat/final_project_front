import React from 'react'
import Calendar from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import {connect} from 'react-redux'
import {getEvents} from '../redux/actions/index'

Calendar.setLocalizer(Calendar.momentLocalizer(moment))
class ProfileCalendar extends React.Component{

  render() {
    let events = this.props.events ? this.props.events.map(e =>  {return{start: new Date(new Date(new Date(e.date.replace(/-/g, '\/')).setHours(e.time_start.split(':')[0])).setMinutes(e.time_start.split(':')[1])), end: new Date(new Date(new Date(e.date.replace(/-/g, '\/')).setHours(e.time_end.split(':')[0])).setMinutes(e.time_end.split(':')[1])), title: e.title}}): null

    return (
      <div className="Calendar">
        <Calendar
          defaultDate={new Date()}
          defaultView="month"
          events={events}
          style={{ height: "50vh", width:"40vw", margin: "15px" }}
        />
      </div>
    );
  }
}
const mapStateToProps=(state)=>{return{events: state.events}}
export default connect(mapStateToProps,{getEvents})(ProfileCalendar)
