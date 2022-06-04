import PropTypes from 'prop-types';
import Header from './Header';
import Head from 'next/head';
import GlobalStyles from './styles/GlobalStyles';

export default function Page({ children }) {
    return (
        <div>
            <div className='container'>
                <GlobalStyles />
                <Header />
                {children}
            </div>
        </div>
    )
}


