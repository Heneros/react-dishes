import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import { useQuery } from '@apollo/client';

import ProductsColdSnacksStyles from './styles/ProductsColdSnacksStyles';
import { GET_DISHES } from '../graphql/queries';
import imageMenu from './img/menu-1-small.png';
import ProductColdSnack from './ProductColdSnack';

function ProductsColdSnacks() {

    const { data, loading, error } = useQuery(GET_DISHES);



    const settings = {
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
    };

    const productColdSnack = {
        title: "Lamb",
        description: "stuffed with buckwheat porridge dried apricots, orange and green apple",
        thumbnail: "http://localhost:3000/static/media/menu-1-small.618790e0de44daf0a428.png",
        price: 315,
        weight: 235
    }
    if (loading) { return <p>Loading...</p> }
    if (error) { return <p>Error</p> }



    return (
        <>
            <ProductsColdSnacksStyles />
            <section className='products-coldsnacks'>

                <div className='products-items'>
                    {/* <Slider {...settings}>
                        {Array.from({ length: 8 }, () => productColdSnack).map((productColdSnack, i) => (
                            <ProductColdSnacks key={i} productColdSnack={productColdSnack} />
                        ))}
                    </Slider> */}
                    {data.dishes.map(dish => (
                        <ProductColdSnack key={dish.id} dish={dish} />
                    ))}

                </div>
            </section>
            <Link to="/productscoldsnacks/1">productscoldsnacks 1</Link>
            <Link to="/productscoldsnacks/2">productscoldsnacks 2</Link>
        </>

    )
}
export default ProductsColdSnacks;
