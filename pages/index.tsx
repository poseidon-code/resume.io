import styles from "../styles/Home.module.scss";
import type { NextPage } from "next";

import About from "../components/About/About";
import TechnicalSkills from "../components/TechnicalSkills/TechnicalSkills";
import Socials from "../components/Socials/Socials";
import Achievements from "../components/Achievements/Achievements";
import Interests from "../components/Interests/Interests";
import SoftSkills from "../components/SoftSkills/Softskills";

import Education from "../components/Education/Education";
import Experiences from "../components/Experiences/Experiences";
import Projects from "../components/Projects/Projects";

const Home: NextPage = () => {
    return (
        <>
            <section className={styles.Left}>
                <About />
                <TechnicalSkills />
                <Socials />
                <Achievements />
                <Interests />
                <SoftSkills />
            </section>
            <section className={styles.Right}>
                <Education />
                <Experiences />
                <Projects />
            </section>
        </>
    );
};

export default Home;
