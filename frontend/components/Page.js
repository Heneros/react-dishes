import PropTypes from 'prop-types';
import Header from './Header';
import Head from 'next/head';
import GlobalStyles from './styles/GlobalStyles';
import BannerHomePage from './Banner';

export default function Page({ children, products }) {
    return (
        <div>
            <div className='container'>
                <GlobalStyles />
                <Header />
            </div>
            <BannerHomePage />
            {children}
        </div>
    )
}


// Page.prototype = {
//     children: PropTypes.any


// }