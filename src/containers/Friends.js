import React from 'react'
import { Image, List, Header,Icon } from 'semantic-ui-react'


class Friends extends React.Component{
  render(){
    return(
      <div style={{ margin: '10%'}}>
  <Header as='h2' icon textAlign='center'>
    <Icon name='users' circular />
    <Header.Content>Friends</Header.Content>
  </Header>
    <List horizontal>
  </List>
  </div>
  )
  }
}

// const mapStateToProps=(state)=>{return{friends: state.friends}}
export default Friends
