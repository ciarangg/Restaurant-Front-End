import React, { Component } from 'react';
import MenuItem from './MenuItem';
import EditForm  from './EditForm';
import DeleteForm  from './DeleteForm';


class MenuList extends Component {

    render() {

        let {theMenuList} = this.props

        let menuItems = theMenuList.map((menuItem) => {
            return (<div>
                    <MenuItem key={menuItem.id} info={menuItem} />
                    <br />
                    <DeleteForm menuItemId={menuItem._id} deleteMenuItem={this.props.deleteMenuItem} />
                    <br />
                    <EditForm editState={menuItem} editMenuItem={this.props.editMenuItem} />
                    </div>
                     )
        })

        return ( <div>
                    <h1><u>Menu</u></h1>
                    {menuItems}
                </div>
        );
    }
}

export default MenuList