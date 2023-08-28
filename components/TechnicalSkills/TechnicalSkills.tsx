import styles from "./TechnicalSkills.module.scss";

import { keyCapitalise } from "../../utilities";
import DATA from "../../data.json";

const TechnicalSkills = (): JSX.Element => {
    return (
        <article className={styles.TechnicalSkills}>
            <h2 className='title'>TECHNICAL SKILLS</h2>
            {Object.keys(DATA.technical_skills).map((key: string, i: number) => {
                return (
                    <div key={`ts-group-${key}-${i}`}>
                        <h4>{keyCapitalise(key)}</h4>
                        {DATA.technical_skills[key as keyof typeof DATA.technical_skills].map((ts: string, j: number) =>
                            DATA.technical_skills[key as keyof typeof DATA.technical_skills].length !== j + 1 ? (
                                <span key={`ts-item-${key}-${j}`}> {ts} &bull;</span>
                            ) : (
                                <span key={`ts-item-${key}-${j}`}> {ts}</span>
                            )
                        )}
                    </div>
                );
            })}
        </article>
    );
};

export default TechnicalSkills;
