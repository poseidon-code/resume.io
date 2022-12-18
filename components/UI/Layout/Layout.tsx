import Head from 'next/head';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

import DATA from '../../../data.json';
import Header from '../Header/Header';

type Props = {
    children: React.ReactNode;
};

const Layout = ({ children }: Props): JSX.Element => {
    return (
        <>
            <Head>
                <title>{`Resume | ${DATA.name}`}</title>
            </Head>
            <Navbar download={DATA.pdf} link={{ url: DATA.url, text: 'Portfolio' }} />
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
