import React from 'react'
import FriendSearch from '../forms/FriendSearch'
import {Menu,Dropdown} from 'semantic-ui-react'
import { NavLink } from "react-router-dom"
import {connect} from 'react-redux'

 class NavBar extends React.Component{

  state={
    activeItem: 'home'
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render(){
    const {activeItem} = this.state
    return(
      <div>
      <Menu inverted>
          <Menu.Item as={NavLink} exact to= '/' color= 'purple' name='home' onClick={this.handleItemClick} />

          <Menu.Item
            name='Profile'
            color= 'yellow'
            active={activeItem === 'Profile'}
            as={NavLink}
            exact to='/profile'

            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Add Event'
            color='purple'
            active={activeItem === 'Add/Edit Event'}
            as={NavLink}
            exact to= 'add_event'
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name= 'Find Friends'
            as={NavLink}
            active={activeItem === 'Find Friends'}
            exact to = 'add_friends'
            onClick={this.handleItemClick}
          />

          <Menu.Item
            name= 'Find Events'
            color='purple'
            active={activeItem === 'Find Events'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name= 'Add Game'
            color='yellow'
            active={activeItem === 'Add Game'}
            as={NavLink}
            exact to= '/add_game'
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name= 'Logout'
            color='purple'
            active={activeItem === 'Logout'}
            onClick={this.props.logout}
          />

        </Menu>
      </div>

    )
  }
}
const mapStateToProps = state =>{return{user: state.activeUser}}
export default connect(mapStateToProps)(NavBar)
