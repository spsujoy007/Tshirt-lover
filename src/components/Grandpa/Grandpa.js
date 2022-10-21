import React, { createContext } from 'react';
import Aunty from '../Family/Aunty/Aunty';
import Father from '../Family/Father/Father';
import Uncle from '../Family/Uncle/Uncle';
import './Grandpa.css'

const Grandpa = () => {
    const house = 1;
    const HouseContext = createContext(1)
    return (
        <div className='grandpa'>
            <h1 className='text-center text-2xl'>Grandpa page</h1>
            <HouseContext.Provider value={1}>
            <div className='flex'>
                <Father house={house}></Father>
                <Uncle house={house}></Uncle>
                <Aunty house={house}></Aunty>
            </div>
            </HouseContext.Provider>
        </div>
    );
};

export default Grandpa;