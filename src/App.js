import React from 'react';
import { Route, Routes } from "react-router-dom";
import Homepage from './components/Homepage';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import ColdSnacks from './components/ColdSnacks';
import Information from './components/Information';


function App() {
    return (<>
        <Information />
        <Banner />
        <nav>
            <Navbar />
        </nav>
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/coldsnacks" element={<ColdSnacks />} />
        </Routes>
    </>
    )
}

export default App;