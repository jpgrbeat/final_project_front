import React from 'react'
import {
  Image,
  List,
  Header,
  Icon,
  Segment
} from 'semantic-ui-react'
import FriendItem from '../components/FriendItem'
import {
  connect
} from 'react-redux'
import {setFriends} from '../redux/actions/index.js'
class Friends extends React.Component {
  state = {
    friends: []
  }

  render() {
    return ( <
      div style = {
        {
          margin: '10%',
          align: 'center'
        }
      } >
      <Segment size='mini'  color='yellow' >

      <Header as = 'h2'icon textAlign = 'center' >
      <Icon name = 'users' circular />
      <Header.Content > Friends </Header.Content>
      </Header >
      <List horizontal >
        {this.props.friends ? this.props.friends.map(friend =>
          <FriendItem friend={friend}/>) : null}
      </List>
      </Segment>
      </div >
    )
  }
}

const mapStateToProps = (state) => {
  return {
    friends: state.friends
  }
}
export default connect(mapStateToProps)(Friends)
