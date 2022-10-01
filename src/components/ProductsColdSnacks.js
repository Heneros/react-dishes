import React from 'react';
import { Link } from 'react-router-dom';

import ProductsColdSnacksStyles from './styles/ProductsColdSnacksStyles';

import imageMenu from './img/menu-1-small.png';

function ProductsColdSnacks() {
    // http://localhost:3000/static/media/menu-1-small.618790e0de44daf0a428.png
    const productColdSnack = {
        title: "Lamb",
        description: "stuffed with buckwheat porridge dried apricots, orange and green apple",
        thumbnail: "http://localhost:3000/static/media/menu-1-small.618790e0de44daf0a428.png",
        price: 315,
        weight: 235
    }
    function ProductColdSnacks({ productColdSnack }) {
        const { thumbnail, title, description } = productColdSnack;
        return (
            <div className='product-item'>
                <Link to="/productscoldsnacks/1">
                    <div className='product-item__image'>
                        <img src={thumbnail} alt='menu 2' />
                    </div>
                    <h4>{title}</h4>
                    <p>{description}</p>
                </Link>
            </div>
        )
    }
    return (
        <>
            <ProductsColdSnacksStyles />
            <section className='products-coldsnacks'>
                <div className='products-items'>
                    {Array.from({ length: 8 }, () => productColdSnack).map((productColdSnack, i) => (
                        <ProductColdSnacks key={i} productColdSnack={productColdSnack} />
                    ))}

                </div>
            </section>
            <Link to="/productscoldsnacks/1">productscoldsnacks 1</Link>
            <Link to="/productscoldsnacks/2">productscoldsnacks 2</Link>
        </>

    )
}
export default ProductsColdSnacks;
