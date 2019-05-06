import React, { Component } from 'react';

class EditForm extends Component {
    constructor(props) {
        super(props);
        this.state = { menuItemToBeEdited: this.props.editState };
    }

    handleChange = event => {
        let daNewRecipe = this.state.menuItemToBeEdited;

        daNewRecipe[event.target.name] = event.target.value;

        this.setState({ menuItemToBeEdited: daNewRecipe });
    };

    handleSubmit = event => {
        event.preventDefault();

        let { editMenuItem } = this.props;

        editMenuItem(
            this.state.menuItemToBeEdited.id,
            this.state.menuItemToBeEdited,
        );
    };

    render() {
        return (
            <div>
                <p>
                    <b>
                        <u> Edit</u>
                    </b>
                </p>
                <form className="recipe-form" onSubmit={this.handleSubmit}>
                    <label>
                        <b>Title:</b>{' '}
                    </label>
                    <input
                        type="text"
                        name="title"
                        value={this.state.menuItemToBeEdited.title}
                        onChange={this.handleChange}
                    />
                    <br />
                    <label>
                        <b>Description:</b> (A space between each ingredient){' '}
                    </label>
                    <input
                        type="text"
                        name="description"
                        value={this.state.menuItemToBeEdited.description}
                        onChange={this.handleChange}
                    />
                    <br />
                    <label>
                        <b>Price:</b>{' '}
                    </label>
                    <input
                        type="text"
                        name="price"
                        value={this.state.menuItemToBeEdited.price}
                        onChange={this.handleChange}
                    />
                    <br />
                    <input
                        type="submit"
                        name="submit"
                        value="Submit"
                        onChange={this.handleChange}
                    />
                </form>
            </div>
        );
    }
}

export default EditForm;
