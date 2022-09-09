import React from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/solid'

const TShirt = ({tShirt, handleAddToCart}) => {
    const {name , price, picture} = tShirt;
    return (
        <div className='border p-3 rounded-md text-white'>
            <img src={picture} className = 'w-full h-60 rounded-t-md' alt="t-shirt" />
            <h1>{name}</h1>
            <p>price: ${price}</p>
            <div className='w-full flex justify-center'>
                <button onClick={()=> handleAddToCart(tShirt)} className='border mt-3 px-3 rounded-md py-1 flex justify-center items-center'><ShoppingCartIcon className="h-5 w-5 white mr-1"/> <span>Add To Cart</span></button>
            </div>
        </div>
    );
};

export default TShirt;