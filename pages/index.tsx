import styles from '../styles/Home.module.scss';
import type { NextPage } from 'next';

import About from '../components/About/About';

const Home: NextPage = () => {
    return (
        <>
            <section className={styles.Left}>
                <About />
            </section>
            <section className={styles.Right}></section>
        </>
    );
};

export default Home;
