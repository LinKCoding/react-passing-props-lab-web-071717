import React from 'react';
import FruitBasket from './FruitBasket';

class App extends React.Component {
  constructor(){
    super()

    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null
    }
  }

  componentWillMount() {
    // this.fetchFilters();
    this.fetchFruit();
  }

  handleFilterChange = (event) => {
    console.log('new filter: ', event.target.value);
    this.setState({ selectedFilter: event.target.value });
  }

  fetchFruit = (event) => {fetch('/api/fruit')
    .then(response => response.json())
    .then(items => this.setState({ items }));
  }

  render(){
    return(
      <div>
        <FruitBasket fruit={this.state.fruit} filters={this.state.filter} currentFilter={this.state.currentFilter} updateHandleFilter={this.handleFilterChange}/>
      </div>
    )
  }
}


export default App;
