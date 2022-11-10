import React from 'react';
import Header from '../pages/Header';
import Banner from './Banner';
import Navbar from './Navbar';
import ProductsColdSnacks from './ProductsColdSnacks';
function Homepage() {
    return (
        <>
            <div className='homepage'>
                <Banner />
                <div className='container'>
                    <nav>
                        <Navbar />
                    </nav>
                </div>
                <ProductsColdSnacks />
            </div>
        </>

    )
}
export default Homepage;
