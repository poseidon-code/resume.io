import Head from 'next/head';

import DATA from '../../../data.json';

import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

type Props = {
    children: React.ReactNode;
};

const Layout = ({ children }: Props): JSX.Element => {
    return (
        <>
            <Head>
                <title>{`Resume | ${DATA.name}`}</title>
            </Head>
            <Navbar />
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
