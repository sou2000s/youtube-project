import React, { useContext } from 'react';
import Card from './Card';
import { productsContext } from './Root';

const Shop = () => {
const products = useContext(productsContext)
console.log(products);
    return (
        <div className='grid grid-cols-4 gap-4'> 
        {
            products.map(product => <Card product = {product}></Card>)
        }
            
        </div>
    );
};

export default Shop;