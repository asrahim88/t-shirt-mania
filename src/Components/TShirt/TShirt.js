import React from 'react';

const TShirt = (props) => {
    const {name , price, picture} = props.tShirt;
    return (
        <div className='border p-3 rounded-md text-white'>
            <img src={picture} className = 'w-full h-60 rounded-t-md' alt="t-shirt" />
            <h1>{name}</h1>
            <p>price: ${price}</p>
        </div>
    );
};

export default TShirt;