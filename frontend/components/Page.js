import PropTypes from 'prop-types';
import Header from './Header';
import Head from 'next/head';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
     @font-face{
         font-family: 'gilroy';
         src: url('Gilroy-Light.woff2') format('woff2');
         font-weight: normal;
         font-style: normal;
     } 
      body{
           font-family: 'gilroy';
   }
`;

export default function Page({ children }) {
    return (
        <div>
            <GlobalStyles />
            <Header />
            {children}
        </div>
    )
}


