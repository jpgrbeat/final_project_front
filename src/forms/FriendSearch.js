import React, { Component } from 'react'
import { Search, Grid, Header, Segment } from 'semantic-ui-react'



class FriendSearch extends Component{
  render() {
    return (
      <Grid>
        <Grid.Column width={5}>
          <Search
          />
        </Grid.Column>
      </Grid>
    )
  }
}
export default FriendSearch
