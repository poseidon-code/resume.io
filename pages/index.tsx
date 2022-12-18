import type { NextPage } from 'next';

import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
    return (
        <>
            <section className={styles.Left}></section>
            <section className={styles.Right}></section>
        </>
    );
};

export default Home;
