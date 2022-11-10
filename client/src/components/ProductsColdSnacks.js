import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import { useQuery } from '@apollo/client';

import ProductsColdSnacksStyles from './styles/ProductsColdSnacksStyles';

import { GET_DISHES } from '../graphql/queries';
import ProductColdSnack from './ProductColdSnack';
import AddProductModal from './AddProductModal';

import Spinner from './Spinner';


function ProductsColdSnacks() {

    const { data, loading, error } = useQuery(GET_DISHES);
    const settings = {
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
    };

    if (loading) { return <Spinner /> }
    if (error) { return <p>Error</p> }


    return (
        <>
            <ProductsColdSnacksStyles />
            <AddProductModal />
            <Slider {...settings}>
                {data.dishes.map(dish => (
                    <ProductColdSnack key={dish.id} dish={dish} />
                ))}
            </Slider>
        </>

    )
}
export default ProductsColdSnacks;
