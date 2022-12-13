import '../styles/globals.scss';
import type { AppProps } from 'next/app';

import Layout from '../components/UI/Layout/Layout';

export default ({ Component, pageProps }: AppProps) => {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
};
