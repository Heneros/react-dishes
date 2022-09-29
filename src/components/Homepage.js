import React from 'react';
import Header from './Header';
import Banner from './Banner';
import Navbar from './Navbar';
import ProductsColdSnacks from './ProductsColdSnacks';
function Homepage() {
    return (
        <>
            <section>
                <Banner />
                <div className='container'>
                    <nav>
                        <Navbar />
                    </nav>
                </div>
                <ProductsColdSnacks />
            </section>
        </>

    )
}
export default Homepage;
