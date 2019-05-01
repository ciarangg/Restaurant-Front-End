import React, { Component } from 'react'
import './App.css';
import MenuList from './Components/MenuList';
import CreateMenuItem from './Components/CreateMenuItem';

const menuItemUrl = 'http://localhost:5000/menu'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {theMenuList: []};
  }


  componentDidMount() {
    this.getMenu();
  }

  getMenu = () => {
    return fetch(menuItemUrl)
      .then(response => response.json())
      .then(theList => this.setState({theMenuList: theList}))
  }


  postMenuItem = async menuItem => {
    const response = await fetch(menuItemUrl + "/create", {
      method: "post",
      headers: new Headers({
        "Content-Type": "application/json",
        Accept: "application/json"
      }),
      body: JSON.stringify(menuItem)
    })
    
    const posts = await response.json();

    let {theMenuList} = this.state;
    theMenuList.unshift(menuItem);
    return this.setState({theMenuList});

    return posts
    
  }

  // postMenuItem = (menuItem) => {
  //   let {theMenuList} = this.state;
  //   theMenuList.unshift(menuItem);
  //   return this.setState({theMenuList});
  // }


  deleteMenuItem  = (menuItemId) => {
    const deleteURL = menuItemUrl + "/" + menuItemId + "/delete";
    return fetch(deleteURL, {
          method: "delete"
        })
        .then(resp => {
          if (!resp.ok) {
            if (resp.status >= 400 && resp.status < 500) {
              return resp.json().then(data => {
                let err = { errorMessage: data.message };
                throw err;
              });
            } else {
              let err = {
                errorMessage: "Please try again later, server is not responding"
              };
              throw err;
            }
          }
        })
        .then(() => {
          const deletedMenuItemArray = this.state.theMenuList.filter(menuItem => {return menuItem._id !== menuItemId})
          this.setState({theMenuList: deletedMenuItemArray});
        });
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
