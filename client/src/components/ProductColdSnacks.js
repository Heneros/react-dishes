import React from 'react';
import { useParams } from 'react-router-dom';

function ProductColdSnacks() {
    const { id } = useParams();
    return (
        <>
            ProductColdSnack {id}
        </>

    )
}
export default ProductColdSnacks;
