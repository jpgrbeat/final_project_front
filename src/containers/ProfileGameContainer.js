import React from 'react'
import {connect} from 'react-redux'
import {Dropdown,Modal,Button,Icon,Image} from 'semantic-ui-react'
let games;
class ProfileGameContainer extends React.Component{
  state={
    activeGame: null,
    open: false
  }
  changeHandler=(event,data)=>{
    let game = this.props.user.games.find(game => game.id === data.value)
    this.setState({
      activeGame: game,
      open: true
    })
  }
  onClose=()=>{
    this.setState({
      open: false
    })
  }

  componentDidMount(){
  }
  onDrop=()=>{
    let id = this.props.user.user_games.find(userGame => userGame.game_id === this.state.activeGame.id)
  }
  render(){
    {games = this.props.user  ? this.props.user.games.map(game => {return{key: game.id, value: game.id, image: game.img, text: game.name }}) : null}

    return(
      <div>
      <div id="games-dropdown">
        <Dropdown placeholder= 'Games...' fluid search selection options={games} onChange={this.changeHandler}/>
      </div>

      <div id='game-modal'>
          {this.state.activeGame ? <Modal basic size= 'mini' open={this.state.open}  onClose={this.onClose} c>
            <Modal.Header>{this.state.activeGame.name}</Modal.Header>
            <Modal.Content image scro>
              <Image src= {this.state.activeGame.img}/>
              <h4> Max Player Count: {this.state.activeGame.max_players}</h4>
              {this.state.activeGame.playing_time > 0 ?<h4>Takes around {this.state.activeGame.playing_time} minutes to play</h4> : null}
              <p style={{margin: '10px'}}>{this.state.activeGame.description}</p>
            </Modal.Content>
            <Button style={{margin: '7px'}} onClick={this.onDrop}>Drop Game</Button>
          </Modal> : null}
      </div>
      </div>
    )
  }
}
const mapStateToProps=(state)=>{
  return {
    user: state.activeUser
  }
}
export default connect (mapStateToProps)(ProfileGameContainer)
