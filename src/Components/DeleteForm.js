import React, { Component } from 'react';

class DeleteForm extends Component {

    handleDelete = (event) => {
        event.preventDefault();
        let {deleteMenuItem} = this.props
        deleteMenuItem(event.target.id)
    }

    render() {


        return ( <div>
                    <button id={this.props.menuItemId} onClick={this.handleDelete}> Delete</button> 
                </div>
        );
    }
}

export default DeleteForm