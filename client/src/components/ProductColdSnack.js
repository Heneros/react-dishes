import React from 'react';
import { useParams } from 'react-router-dom';

export default function ProductColdSnack({ dish }) {
    const { name, description, price, weight } = dish;
    const { id } = useParams();
    return (

        <div className='product-item'>
            {/* <div className='product-item__image'>
                    <img src={thumbnail} alt='menu 2' />
                </div> */}
            <div className='product-top'>
                <h4>{name}</h4>
                <span className='weight'>{weight}</span>
            </div>
            <p>{description}</p>
            <p>{price}$</p>
            <div className='product-bottom'>
                <button className="btn-cart">Add to cart</button>
            </div>
        </div>

    )
}

