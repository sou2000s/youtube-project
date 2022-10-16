import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from './Header';

export const productsContext = createContext([])
export const cartContext = createContext([])
const Root = () => {
    const products = useLoaderData()
    // console.log(products);
    return (
        <div>
            <productsContext.Provider value={products}>
            <cartContext.Provider>
                <Header></Header>
                <Outlet></Outlet>

            </cartContext.Provider>
            </productsContext.Provider>
        </div>
    );
};

export default Root;