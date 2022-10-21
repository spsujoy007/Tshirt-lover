import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';

const Home = () => {
    const tshirts = useLoaderData();
    const [cart, setCart] = useState([]);

    const addToCart = tshirts => {
        const exist = cart.find(ts => ts._id === tshirts._id);
        if (exist){
            alert('Item already added')
        }
        else {
            const newCart = [...cart, tshirts];
            setCart(newCart)
            // alert('Succesfully added')
        }
    }

    const handleRemoveItem = tshirts => {
        const remaining = cart.filter(ts => ts._id !== tshirts._id);
        setCart(remaining)
    }
    return (
        <div className='md:px-10 px-5 md:flex gap-x-20'>
            <div className='grid md:grid-cols-3 gap-10 mt-20'>
            {
                tshirts.map(tshirt => <Tshirt 
                    key={tshirt._id} 
                    tshirt={tshirt}
                    addToCart={addToCart}
                    ></Tshirt>)
            }
            </div>
            <div className='p-5'>
                <Cart 
                cart={cart}
                handleRemoveItem={handleRemoveItem}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;