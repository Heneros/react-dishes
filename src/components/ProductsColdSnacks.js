import React from 'react';
import { Link } from 'react-router-dom';

import ProductsColdSnacksStyles from './styles/ProductsColdSnacksStyles';

import imageMenu from './img/menu-1-small.png';

function ProductsColdSnacks() {
    return (
        <>
            <ProductsColdSnacksStyles />
            <section className='products-coldsnacks'>
                <div className='products-items'>
                    <div className='product-item'>
                        <Link to="/productscoldsnacks/1">
                            <div className='product-item__image'>
                                <img src={imageMenu} alt='menu 2' />
                            </div>
                            <h4>Lamb</h4>
                            <p>stuffed with buckwheat porridge,
                                dried apricots, orange and green apple</p>
                        </Link>
                    </div>
                </div>
            </section>

            <Link to="/productscoldsnacks/1">productscoldsnacks 1</Link>
            <Link to="/productscoldsnacks/2">productscoldsnacks 2</Link>

        </>

    )
}
export default ProductsColdSnacks;
