import PropTypes from 'prop-types';
import Header from './Header';
export default function Page({ children, cool }) {
    return (<>
        <Header />
        <h1>Hello World</h1>
        <p>Test</p>
    </>)
}




Page.propTypes = {
    cool: PropTypes.string,
    children: PropTypes.any
}    