import React, { Component } from 'react';

class MenuItem extends Component {
    render() {

        let {info} = this.props


        return ( <div>
                    <h3>{info.title} </h3>

                    <p> {info.description} </p>
                    <p>{info.price}</p>

                </div>
        );
    }
}

export default MenuItem