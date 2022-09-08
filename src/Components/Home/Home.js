import React from 'react';
import useTShirt from '../../Hooks/useTshirt';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';

const Home = () => {
    const [tShirt, setTShirt] = useTShirt();
    return (
        <div className='grid grid-cols-1  md:grid-cols-7 gap-4 md:w-5/6 md:mx-auto md:px-20'>
            {/* T-shirt container */}
            <div className='col-span-6 mt-7'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
                    {
                        tShirt.map(t_shirt => <TShirt
                            key={t_shirt._id}
                            tShirt={t_shirt} />)
                    }
                </div>
            </div>

            {/* T-shirt cart */}
            <div className='col-span-1'>
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Home;