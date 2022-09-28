import React from 'react';
import { Route, Routes } from "react-router-dom";


import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import Header from './components/Header';
import ProductsColdSnacks from './components/ProductsColdSnacks';
import ProductColdSnacks from './components/ProductColdSnacks';
import GlobalStyles from './components/styles/GlobalStyles';

function App() {
    return (
        <>
            <GlobalStyles />
            <div className='container'>
                <Header />
            </div>
            <div className='container'>
                <nav>
                    <Navbar />
                </nav>
            </div>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/productscoldsnacks" element={<ProductsColdSnacks />} />
                <Route path="/productscoldsnacks/:id" element={<ProductColdSnacks />} />
            </Routes>

        </>
    )
}

export default App;