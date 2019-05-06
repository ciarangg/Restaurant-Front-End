import React from 'react';
const MenuItem = ({ info: { title, description, price } }) => (
    <div>
        <h3>{title} </h3>
        <p> {description} </p>
        <p>{price}</p>
    </div>
);

export default MenuItem;
