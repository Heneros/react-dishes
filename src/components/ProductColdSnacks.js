import React from 'react';
import { useParams } from 'react-router-dom';

function ProductColdSnacks() {
    const { id } = useParams();
    return (
        <>

            ProductColdSnacks {id}
        </>

    )
}
export default ProductColdSnacks;
