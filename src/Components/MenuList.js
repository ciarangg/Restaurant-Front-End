import React, { Component } from 'react';
import DeleteForm from './DeleteForm';
import EditForm from './EditForm';
import MenuItem from './MenuItem';

class MenuList extends Component {
    render() {
        const { menuItemList, deleteMenuItem, editMenuItem } = this.props;
        return menuItemList.map(menuItem => {
            console.log(menuItem);
            return (
                <div key={menuItem._id}>
                    <MenuItem key={menuItem.id} info={menuItem} />
                    <br />
                    <DeleteForm
                        menuItemId={menuItem._id}
                        deleteMenuItem={deleteMenuItem}
                    />
                    <br />
                    <EditForm
                        editState={menuItem}
                        editMenuItem={editMenuItem}
                    />
                </div>
            );
        });
    }
}

export default MenuList;
