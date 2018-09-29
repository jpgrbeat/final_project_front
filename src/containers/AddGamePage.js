import React from 'react'
import AddGameForm from '../forms/AddGameForm'
import {connect} from 'react-redux'
import Game from '../components/Game'
import {getGames} from '../redux/actions/index'
import DisplayGame from '../components/DisplayGame'
import {Grid,Search} from 'semantic-ui-react'
class AddGamePage extends React.Component{

  state={
    input: '',
    displayGame: this.props.games[0]
  }
  componentDidMount(){
    this.props.getGames()
  }

  changeHandler=(event)=>{
    this.setState({input: event.target.value})

  }
  onClick=(gameId)=>{
    let game = this.props.games.filter(game => game.id === gameId)

    this.setState({ displayGame: game[0]})
  }

  render(){
    let games = this.props.games

    return(
      <Grid>
      <Grid.Row style={{marginLeft: '25px', marginTop: '20px'}}>
        <Search onSearchChange={(event)=>this.changeHandler(event)}/>
        </Grid.Row>
        <Grid.Row>
        <Grid.Column width={4} style={{ marginLeft:'20px'}}>
        {games ? games.filter(game => game.name.toLowerCase().includes(this.state.input.toLowerCase())).map(game => <Game game={game} setDisplay={this.onClick}/>):null}
        </Grid.Column>
        <Grid.Column width={8} position='right'>
        {this.state.displayGame ? <DisplayGame game={this.state.displayGame}/> : null}
        </Grid.Column>
        </Grid.Row>

      </Grid>
    )
  }
}
const mapStateToProps=(state)=>{
  return { games: state.games}
}
export default connect(mapStateToProps,{getGames})(AddGamePage)
