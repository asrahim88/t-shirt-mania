import React from 'react';
import { useState } from 'react';
import useTShirt from '../../Hooks/useTshirt';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';

const Home = () => {
    const [tShirt, setTShirt] = useTShirt();
    const [cart, setCart] = useState([]);

    const handleAddToCart = (selectedItem) => {
        const exist = cart.find(t_shirt => t_shirt._id === selectedItem._id);
        if (!exist) {
            const newCart = [...cart, selectedItem];
            setCart(newCart);
        } else {
            alert('This item is already added!')
        };
    };

    const handleRemoveFromCart = (removeItem) => {
        const rest = cart.filter(item => item._id !== removeItem._id);
        setCart(rest);
    };

    return (
        <div className='grid grid-cols-1  md:grid-cols-7 gap-4 md:w-5/6 md:mx-auto md:px-20'>
            {/* T-shirt container */}
            <div className='col-span-6 md:pt-7 '>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
                    {
                        tShirt.map(t_shirt => <TShirt
                            handleAddToCart={handleAddToCart}
                            key={t_shirt._id}
                            tShirt={t_shirt} />)
                    }
                </div>
            </div>

            {/* T-shirt cart */}
            <div className='col-span-1 order-first md:order-last md:pt-7 '>
                <div className='fixed  md:w-1/4 lg:w-64 xl:w-80 w-full'>
                    <Cart
                        cart={cart}
                        handleRemoveFromCart={handleRemoveFromCart}
                    ></Cart>
                </div>
            </div>
        </div>
    );
};

export default Home;