import styles from "./SoftSkills.module.scss";

import DATA from "../../data.json";

const SoftSkills = (): JSX.Element => {
    return (
        <article className={styles.SoftSkills}>
            <h2 className='title'>SOFT SKILLS</h2>
            <ul>
                {DATA.soft_skills.map((skill: string, i: number) => (
                    <li key={`soft-skill-${i}`}>{skill}</li>
                ))}
            </ul>
        </article>
    );
};

export default SoftSkills;
