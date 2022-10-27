import React from 'react';
import { Route, Routes } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import Header from './components/Header';
import ProductsColdSnacks from './components/ProductsColdSnacks';
// import ProductColdSnacks from './components/ProductColdSnacks';
import GlobalStyles from './components/styles/GlobalStyles';


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
          <Route path="/productscoldsnacks" element={<ProductsColdSnacks />} />
          {/* <Route path="/productscoldsnacks/:id" element={<ProductColdSnacks />} /> */}
        </Routes>
      </ApolloProvider>
    </>
  )
}

export default App;