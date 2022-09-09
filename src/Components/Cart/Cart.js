import React from 'react';
import { TrashIcon } from '@heroicons/react/24/solid'

const Cart = ({ cart, handleRemoveFromCart }) => {
    let command;
    if (cart.length === 0) {
        command = <p>Please add on at least one item!!!</p>;
    } else if (cart.length === 1) {
        command = <p>Please add more...</p>;
    } else {
        command = <p>thanks for adding item!!</p>;
    };
    return (
        <div className='text-black border bg-blue-200 md:rounded-md p-3'>
            <div>
                <h1 className='text-center'>Total Item: {cart.length}</h1>
                {
                    cart.map(item => <div className='flex justify-between'>
                        <p>{item.name}</p>
                        <TrashIcon onClick={() => handleRemoveFromCart(item)} className="h-5 w-5 white mr-1 cursor-pointer" />
                    </div>)
                }
                <div className='text-center'>
                    {command}
                </div>
            </div>


        </div>
    );
};

export default Cart;