import React from 'react'
import Calendar from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import {connect} from 'react-redux'
import {getEvents} from '../redux/actions/index'

Calendar.setLocalizer(Calendar.momentLocalizer(moment))
class ProfileCalendar extends React.Component{
  state = {
    events: [
      {
        start: new Date('2018-10-06 03:24:00'),
        end: new Date('2018-10-06 10:15:00'),
        title: "Board game things"
      },
      {
        start: new Date(),
        end: new Date(),
        title: "More Board Games"
      }
    ]
  };

  render() {
    let events = this.props.events ? this.props.events.map(e =>  {return{start: new Date(e.date), end: new Date(e.date), title: e.title}}): null

    console.log(this.props.events[0])
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
