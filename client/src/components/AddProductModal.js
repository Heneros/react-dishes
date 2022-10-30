import React from 'react'
import { useState } from 'react';
import { useMutation } from '@apollo/client';

export default function AddProductModal() {
    const [name, setName] = useState('');

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
                            <form>
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
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
