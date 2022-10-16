import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, BrowserRouter as Router, Route, Switch, SWitch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';

import client from './graphql/client';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
);


