import Head from 'next/head';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

import DATA from '../../../data.json';

type Props = {
    children: React.ReactNode;
    name: string;
};

const Layout = ({ name, children }: Props): JSX.Element => {
    return (
        <>
            <Head>
                <title>{`Resume | ${name}`}</title>
            </Head>

            <Navbar download={DATA.pdf} link={{ url: DATA.url, text: 'Portfolio' }} />

            <main>{children}</main>

            <Footer
                content={
                    <>
                        <i className='fa-regular fa-copyright'></i>
                        &nbsp;{name} 2022
                    </>
                }
            />
        </>
    );
};

export default Layout;
