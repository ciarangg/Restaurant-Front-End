import React, { Component } from 'react'
import './App.css';
import MenuList from './MenuList';
import CreateMenuItem from './CreateMenuItem';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {theMenuList: []};
  }


  componentDidMount() {
    this.getMenu();
  }

  getMenu = () => {
    return fetch('http://localhost:5000/menu')
      .then(response => response.json())
      .then(theList => this.setState({theMenuList: theList}))
  }


  postMenuItem = (recipe) => {
    let {theMenuList} = this.state;
    theMenuList.unshift(recipe);
    return this.setState({theMenuList});
  }

  render() {

    let {theMenuList} = this.state

    return (       

      <div className="App">
        <MenuList key={theMenuList.id} theMenuList={theMenuList} />
        <CreateMenuItem postMenuItem={this.postMenuItem}/>
      </div>
    )
  }
}

export default App;
