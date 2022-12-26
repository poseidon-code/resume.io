import styles from './TechnicalSkills.module.scss';

import { keyCapitalise } from '../../utilities';
import DATA from '../../data.json';

const TechnicalSkills = (): JSX.Element => {
    return (
        <article className={styles.TechnicalSkills}>
            <h2 className='title'>TECHNICAL SKILLS</h2>
            {Object.keys(DATA.technical_skills).map((key: string) => {
                return (
                    <>
                        <h4 key={`${key}`}>{keyCapitalise(key)}</h4>
                        {DATA.technical_skills[key as keyof typeof DATA.technical_skills].map((ts: string, i: number) =>
                            DATA.technical_skills[key as keyof typeof DATA.technical_skills].length !== i + 1 ? (
                                <span key={`${ts}-${i}`}> {ts} &bull;</span>
                            ) : (
                                <span> {ts}</span>
                            )
                        )}
                    </>
                );
            })}
        </article>
    );
};

export default TechnicalSkills;
