import React from 'react';
import { Route, Routes } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import Header from './pages/Header';
import ProductsColdSnacks from './components/ProductsColdSnacks';

import GlobalStyles from './components/styles/GlobalStyles';



import ProductPage from './pages/ProductPage';


const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'http://localhost:5000/graphql',
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <GlobalStyles />
        <div className='container'>
          <Header />
        </div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          {/* <Route path="/product" element={<ProductsColdSnacks />} />
          <Route path="/product/:id" element={<ProductPage />} /> */}
        </Routes>
      </ApolloProvider>
    </>
  )
}

export default App;