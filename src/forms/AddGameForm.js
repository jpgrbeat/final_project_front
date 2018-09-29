import React from 'react'
import { Search, Grid, Header, Segment } from 'semantic-ui-react'
import _ from 'lodash'


let source;

class AddGameForm extends React.Component{

  componentDidMount=()=>{

    fetch(`http://localhost:3000/games`)
    .then(res => res.json())
    .then(json => {source = json.map(game => {return {title: game.title, description: game.player_count, image: game.img}})})
  }
  componentWillMount() {
   this.resetComponent()
 }

 resetComponent = () => this.setState({ isLoading: false, results: [], value: '' })

 handleResultSelect = (e, { result }) => this.setState({ value: result.title })

 handleSearchChange = (e, { value }) => {
   this.setState({ isLoading: true, value })

   setTimeout(() => {
     if (this.state.value.length < 1) return this.resetComponent()

     const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
     const isMatch = result => re.test(result.title)

     this.setState({
       isLoading: false,
       results: _.filter(source, isMatch),
     })
   }, 300)
 }


 render() {

   const { isLoading, value, results } = this.state

   return (
     <Grid>
       <Grid.Column width={6}>
         <Search
           loading={isLoading}
           onResultSelect={this.handleResultSelect}
           onSearchChange={_.debounce(this.handleSearchChange, 500, { leading: true })}
           results={results}
           value={value}
           {...this.props}
         />
       </Grid.Column>
    </Grid>
     )
}
}
export default AddGameForm
