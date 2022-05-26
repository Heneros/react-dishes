import Router from 'next/router';
import Head from 'next/head';
import Page from '../components/Page';
function MyApp({ Component, pageProps }) {
    return (
        <>
            <Page>
                <Component {...pageProps} />
            </Page>
        </>
    )
}
export default MyApp;



