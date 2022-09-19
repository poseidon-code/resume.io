import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import DATA from '../data.json';

import Layout from '../components/UI/Layout/Layout';

export default ({ Component, pageProps }: AppProps) => {
    return (
        <Layout name={DATA.name}>
            <Component {...pageProps} />
        </Layout>
    );
};
