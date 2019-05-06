import React, { Component } from 'react';

const blankMenuItem = {
    title: '',
    ingredients: '',
    price: '',
};

class CreateMenuItem extends Component {
    constructor(props) {
        super(props);
        this.state = { newMenuItem: { ...blankMenuItem } };
    }

    handleChange = e => {
        const { name, type, value } = e.target;
        const val = type === 'number' ? parseFloat(value) : value;
        this.setState({ [name]: val });
    };

    handleSubmit = event => {
        event.preventDefault();

        const CONSTANTRECIPE = this.state.newMenuItem;
        let { postMenuItem } = this.props;

        postMenuItem(CONSTANTRECIPE);
        this.setState({ newMenuItem: { ...blankMenuItem } });
    };

    render() {
        return (
            <form className="recipe-form" onSubmit={this.handleSubmit}>
                <label>
                    <b>Title:</b>{' '}
                </label>
                <input type="text" name="title" onChange={this.handleChange} />
                <br />
                <label>
                    <b>Description:</b> (A space between each ingredient){' '}
                </label>
                <input
                    type="text"
                    name="description"
                    onChange={this.handleChange}
                />
                <br />
                <label>
                    <b>Price:</b>{' '}
                </label>
                <input type="text" name="price" onChange={this.handleChange} />
                <br />
                <input
                    type="submit"
                    name="submit"
                    value="Submit"
                    onChange={this.handleChange}
                />
            </form>
        );
    }
}

export default CreateMenuItem;
