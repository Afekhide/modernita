import Layout from '../components/Layout';

import '../styles/fonts.scss';
import '../styles/globals.scss';


export default function App({Component, pageProps}){
    return (
        <Layout>
            <Component {...pageProps}/>
        </Layout>
    )
}