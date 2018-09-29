import React, { Component } from 'react'
import {Dropdown } from 'semantic-ui-react'
import _ from 'lodash'


let source;

class FriendSearch extends Component{



  changeHandler=(event, data)=>{
    console.log(data)
  }

 render() {
   console.log(source)

   return (
      <Dropdown
      icon='add user'
      className='icon'
      button
      labeled
      search
      text='Find Friends...'
      onChange={this.changeHandler}
      />
     )
}
}
export default FriendSearch
