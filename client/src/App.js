import React from 'react';
import { Route, Routes } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import GlobalStyles from './components/styles/GlobalStyles';
import Homepage from './pages/HomePage';

import ProductPage from './pages/ProductPage';
import NotFound from './pages/NotFound';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'http://localhost:5000/graphql',
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path='*' element={<NotFound />} />
          <Route path="/product/:id" element={<ProductPage />} />

          {/* <Route path="/product" element={<ProductsColdSnacks />} />
         */}
        </Routes>
      </ApolloProvider>
    </>
  )
}

export default App;