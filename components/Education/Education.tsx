import styles from "./Education.module.scss";

import DATA from "../../data.json";

const Education = (): JSX.Element => {
    return (
        <article className={styles.Education}>
            <h2 className='title'>EDUCATION</h2>
            <ul>
                {DATA.education.map(
                    (
                        e: { institution: string; board: string; course: string; completion: string; score: string },
                        i: number
                    ) => {
                        return (
                            <li key={`education-${i}`}>
                                <h3>
                                    {e.institution.toUpperCase()} <em>{e.board}</em>
                                </h3>
                                <span>{e.course}</span>
                                <p>
                                    {e.completion} | <b>{e.score}</b>
                                </p>
                            </li>
                        );
                    }
                )}
            </ul>
        </article>
    );
};

export default Education;
