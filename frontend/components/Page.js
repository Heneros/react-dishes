import PropTypes from 'prop-types';
import Header from './Header';
import Head from 'next/head';
export default function Page({ children }) {
    return (
        <>
        <Header/>
            {children}
        </>
    )
}


