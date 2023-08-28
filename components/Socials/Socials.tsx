import styles from "./Socials.module.scss";

import DATA from "../../data.json";

const Socials = (): JSX.Element => {
    return (
        <article className={styles.Socials}>
            <h2 className='title'>SOCIAL LINKS</h2>
            <ul>
                {DATA.socials.map((social: { link: string; text: string }, i: number) => (
                    <li key={`social-${i}`}>
                        <a href={social.link} target='_blank' rel='noopener noreferrer'>
                            <i className='fa-regular fa-link-horizontal'></i>
                            {social.text}
                        </a>
                    </li>
                ))}
            </ul>
        </article>
    );
};

export default Socials;
