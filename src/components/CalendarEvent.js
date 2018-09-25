import React from 'react'



const CalendarEvent=(props)=>{
  debugger
  console.log('hi')
  return (
    {
      start: new Date(props.event.date, props.event.time_start),
      end: new Date(props.event.date, props.event.time_end),
      title: props.event.title,
    }
  )
}
export default CalendarEvent
