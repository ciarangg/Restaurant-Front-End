import React, { Component } from 'react';
import MenuItem from './MenuItem';


class MenuList extends Component {

    render() {

        let {theMenuList} = this.props

        let menuItems = theMenuList.map((menuItem) => {
            return (<MenuItem key={menuItem.id} info={menuItem} /> )
        })

        return ( <div>
                    <h1><u>Menu</u></h1>
                    {menuItems}
                </div>
        );
    }
}

export default MenuList