import React from 'react';
import { addtodb } from '../util/fakedb';

const Card = ({product}) => {
    const {name , price , picture, id} = product;

    const handleAddTocart = (id) =>{
       addtodb(id)
    
     }
    return (
        <div>
             <h1>{name}</h1>
             <h1>{price}</h1>
             <button className='btn btn-primary' onClick={()=>handleAddTocart(id)}>Add to cart</button>
        </div>
    );
};

export default Card;