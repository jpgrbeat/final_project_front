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
    <List.Item>
      <Image avatar src='https://react.semantic-ui.com/images/avatar/small/tom.jpg' />
      <List.Content>
        <List.Header>Tom</List.Header>
        Top Contributor
      </List.Content>
    </List.Item>
    <List.Item>
      <Image avatar src='https://react.semantic-ui.com/images/avatar/small/christian.jpg' />
      <List.Content>
        <List.Header>Christian Rocha</List.Header>
        Admin
      </List.Content>
    </List.Item>
    <List.Item>
      <Image avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
      <List.Content>
        <List.Header>Matt</List.Header>
        Top Rated User
      </List.Content>
    </List.Item>
  </List>
  </div>
  )
  }
}
export default Friends
