import styles from "./Interests.module.scss";

import DATA from "../../data.json";

const Interests = (): JSX.Element => {
    return (
        <article className={styles.Interests}>
            <h2 className='title'>INTERESTS</h2>
            {DATA.interests.map((interest: string, i: number) =>
                i < DATA.interests.length - 1 ? (
                    <span key={`interest-${i}`}>{interest} &bull; </span>
                ) : (
                    <span key={`interest-${i}`}>{interest}</span>
                )
            )}
        </article>
    );
};

export default Interests;
