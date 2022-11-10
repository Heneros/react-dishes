import React from 'react';
import { useParams } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { DELETE_DISH } from '../mutations/dishMutation';
import { GET_DISHES } from '../graphql/queries';

export default function ProductColdSnack({ dish }) {
    const [deleteDish] = useMutation(DELETE_DISH, {
        variables: { id: dish.id },
        refetchQueries: [{ query: GET_DISHES }]
    });


    const { id, name, description, price, weight } = dish;

    return (
        <div className='product-item'>
            <div className='product-top'>
                <h4><a href={`/product/${id}`}>{name}</a></h4>
                <span className='weight'>{weight}</span>
            </div>
            <p>{description}</p>
            <p>{price}$</p>
            <div className='product-bottom'>
                <button className="btn-cart">Add to cart</button>
                <button className="btn-cart" onClick={deleteDish}>Delete product</button>
            </div>

        </div>

    )
}

