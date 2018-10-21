import React from 'react'

const EventComment =(props)=>{
let comment = props.comment.content
console.log(props)
  return(
    <div id='event-comment'>
      <h5>{props.comment.name}:</h5>
      <p>{comment}</p>
    </div>
  )
}
export default EventComment
