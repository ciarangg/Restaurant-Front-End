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

  deleteMenuItem  = (menuItemId) => {
    const {theMenuList} = this.state;
    let deletedMenuItemArray = theMenuList.filter(menuItem => {return menuItem._id !== menuItemId})
    return this.setState({theMenuList: deletedMenuItemArray});

  }

  editMenuItem = (menuItemId, editedMenuItem) => {
    const {theMenuList} = this.state;

    let deleteEditMenuItemArray = theMenuList.filter(menuItem => {return menuItem._id !== menuItemId})

    deleteEditMenuItemArray.unshift(editedMenuItem);

    return this.setState({theMenuList: deleteEditMenuItemArray});


  }
  render() {

    let {theMenuList} = this.state
    console.log(theMenuList)

    return (       

      <div className="App">
        <MenuList key={theMenuList.id} theMenuList={theMenuList} deleteMenuItem ={this.deleteMenuItem } editMenuItem ={this.editMenuItem } />
        <CreateMenuItem postMenuItem={this.postMenuItem}/>
      </div>
    )
  }
}

export default App;
