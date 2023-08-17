import styles from "./Achievements.module.scss";

import DATA from "../../data.json";

const Achievements = (): JSX.Element => {
    return (
        <article className={styles.Achievements}>
            <h2 className='title'>ACHIEVEMENTS</h2>
            <ul>
                {DATA.achievements.map((achievement: { link: string; text: string }, i: number) => (
                    <li>
                        <a key={`achievement-${i}`} href={achievement.link} target='_blank' rel='noopener noreferrer'>
                            <i className='fa-regular fa-medal'></i>
                        </a>
                        <span> {achievement.text}</span>
                    </li>
                ))}
            </ul>
        </article>
    );
};

export default Achievements;
