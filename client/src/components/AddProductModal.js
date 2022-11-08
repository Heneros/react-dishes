import React from 'react'
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_DISH } from '../mutations/dishMutation';
import { GET_DISHES } from '../graphql/queries';

export default function AddProductModal() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [weight, setWeight] = useState('');

    const [addDish] = useMutation(ADD_DISH, {
        variables: { name, description, price, weight },
        update(cache, { data: { addDish } }) {
            const { dishes } = cache.readQuery({ query: GET_DISHES });
            cache.writeQuery({
                query: GET_DISHES,
                data: { dishes: [...dishes, addDish] },
            });
        }
    });

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(name, description, weight);


        if (name === '' || description === '' || price === '' || weight === '') {
            return alert("Empty fields");
        }

        addDish(name, description, price, weight);

        setName('');
        setDescription('');
        setPrice('');
        setWeight('');
    }

    return (
        <>
            <button type="button" className="btn btn-secondary" data-bs-target="#addDishModal" data-toggle="modal" data-target="#addDishModal">
                Add Dish
            </button>
            <div className="modal fade" id="addDishModal" role="dialog" aria-labelledby="addDishModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="addDishModalLabel">Add Dish</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={onSubmit}>
                                <div className='mb-3'>
                                    <label className='form-label'>
                                        Name
                                    </label>
                                    <input
                                        type='text'
                                        className='form-control'
                                        id='name'
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className='mb-3'>
                                    <label className='form-label'>
                                        Description
                                    </label>
                                    <input
                                        type='text'
                                        className='form-control'
                                        id='description'
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    />
                                </div>
                                <div className='mb-3'>
                                    <label className='form-label'>
                                        Price
                                    </label>
                                    <input
                                        type='text'
                                        className='form-control'
                                        id='price'
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                    />
                                </div>
                                <div className='mb-3'>
                                    <label className='form-label'>
                                        Weight
                                    </label>
                                    <input
                                        type='text'
                                        className='form-control'
                                        id='weight'
                                        value={weight}
                                        onChange={(e) => setWeight(e.target.value)}
                                    />
                                </div>

                                <button type='submit' data-bs-dismiss="modal" className='btn btn-secobdary'>
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
