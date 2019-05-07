// Axios is a library for making HTTP requests, fetch is a good API but I've found that axios is preferred an more widely used
import axios from 'axios';
import React, { Component } from 'react';
import './App.css';
import CreateMenuItem from './Components/CreateMenuItem';
import MenuList from './Components/MenuList';

const menuItemUrl = 'http://localhost:5000/menu';

class App extends Component {
    state = {
        menuItemList: [],
    };

    async componentDidMount() {
        let menu = await this.getMenu();
        this.setState({
          menuItemList: menu,
        })
    }

    getMenu = async () => {
        let menu = await axios
            .get(`${menuItemUrl}`)
            .then(({ data }) => {
                return data;
            })
            .catch(error =>
                console.log(`There was an error: ${error.message}`),
            );

        return menu;
    };

    postMenuItem = menuItem => {
        let newMenuItem = axios
            .post(`${menuItemUrl}/create`, menuItem)
            .then((item, error) => {
                if (error) {
                    throw new Error(`
          There was an error creating a new menu item
          Error: ${error.message}  
        `);
                }
                console.log(item);
                return item;
            });
        return newMenuItem;
    };

    deleteMenuItem = menuItemId => {
        const deleteURL = menuItemUrl + '/' + menuItemId + '/delete';
        return fetch(deleteURL, {
            method: 'delete',
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
                            errorMessage:
                                'Please try again later, server is not responding',
                        };
                        throw err;
                    }
                }
            })
            .then(() => {
                const deletedMenuItemArray = this.state.menuItemList.filter(
                    menuItem => {
                        return menuItem._id !== menuItemId;
                    },
                );
                this.setState({ menuItemList: deletedMenuItemArray });
            });
    };

    editMenuItem = (menuItemId, editedMenuItem) => {
        const { menuItemList } = this.state;

        let deleteEditMenuItemArray = menuItemList.filter(menuItem => {
            return menuItem._id !== menuItemId;
        });

        deleteEditMenuItemArray.unshift(editedMenuItem);

        return this.setState({ menuItemList: deleteEditMenuItemArray });
    };
    render() {
        const { menuItemList } = this.state;
        console.log(menuItemList);

        return (
            <div className="App">
                <MenuList
                    menuItemList={menuItemList}
                    deleteMenuItem={this.deleteMenuItem}
                    editMenuItem={this.editMenuItem}
                />
                <CreateMenuItem postMenuItem={this.postMenuItem} />
            </div>
        );
    }
}

export default App;
