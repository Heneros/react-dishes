import React from 'react';
import Header from './Header';
import Banner from './Banner';
import Navbar from './Navbar';
import ProductsColdSnacks from '../components/ProductsColdSnacks';



function Homepage() {
    return (
        <>
            <div className='homepage'>
                <Header />
                <Banner />
                <div className='container'>
                    <nav>
                        <Navbar />
                    </nav>
                </div>

                <section className='products-coldsnacks'>
                    <div className='products-items'>
                        <ProductsColdSnacks />
                    </div>
                </section>

            </div>
        </>

    )
}
export default Homepage;
