import React from 'react';
import { Route, Routes } from "react-router-dom";
import Homepage from './components/Homepage';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Header from './components/Header';
import ProductsColdSnacks from './components/ProductsColdSnacks';
import ProductColdSnacks from './components/ProductColdSnacks';

function App() {
    return (<>
        <Header />
        <nav>
            <Navbar />
        </nav>
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/productscoldsnacks" element={<ProductsColdSnacks />} />
            <Route path="/productscoldsnacks/:id" element={<ProductColdSnacks />} />
        </Routes>
    </>
    )
}

export default App;