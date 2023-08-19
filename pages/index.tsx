import styles from "../styles/Home.module.scss";
import type { NextPage } from "next";

import About from "../components/About/About";
import TechnicalSkills from "../components/TechnicalSkills/TechnicalSkills";
import Socials from "../components/Socials/Socials";
import Achievements from "../components/Achievements/Achievements";

const Home: NextPage = () => {
    return (
        <>
            <section className={styles.Left}>
                <About />
                <TechnicalSkills />
                <Socials />
                <Achievements />
            </section>
            <section className={styles.Right}></section>
        </>
    );
};

export default Home;
