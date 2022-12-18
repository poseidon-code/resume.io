import styles from './About.module.scss';

import DATA from '../../data.json';

const About = (): JSX.Element => {
    return (
        <article className={styles.About}>
            <p>{DATA.about.text}</p>
            <br />
            <blockquote>"{DATA.about.quote}"</blockquote>
        </article>
    );
};

export default About;
