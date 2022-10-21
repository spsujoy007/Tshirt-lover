import React from 'react';
import './Cart.css'

const Cart = ({cart, handleRemoveItem}) => {
    let massage;
    if(cart.length === 0){
        massage = <p>Please buy at least one item!!!</p>
    }
    else{
        massage = <p className='mt-5'>Thanks for buying!</p>
    }
    
    return (
        <div className='text-center order-summury'>
            <h1 className={`text-2xl ${cart.length > 0 ? `text-primary` : ``}`}>Order summary</h1>
            <h2 className='text-lg font-bold mb-6'>Quantity: {cart.length}</h2> <hr />
            <div className='mt-5'>
            {
                cart.map(tshirt => <p 
                key={tshirt._id}
                >
                <div className='flex justify-between items-center'>
                {tshirt.name}
                <button onClick={()=> handleRemoveItem(tshirt)} className='btn m-1'>X</button>
                </div>

                </p>)
            }
            {
                massage
            }
            {
                cart.length >= 5 ? <p className='text-primary uppercase'>Wow you are borolox</p> : <p>Kino kino</p>
            }
            </div>
        </div>
    );
};

export default Cart;

// Conditional Rendering 
// 1. use element in a variable and then use if-else to set getValue
// 2. ternary operration condition ? true : false
// 3. && operator (if condition is true, i want to show a something)
// 4. || operator (if condition is false, i want to show a something)