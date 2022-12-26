import styles from './Header.module.scss';

import { trimURL } from '../../../utilities';
import DATA from '../../../data.json';

const Header = (): JSX.Element => {
    return (
        <header className={styles.Header}>
            <span className={styles.name}>
                {DATA.name.split(' ').map((t, i) => (
                    <h1 key={i}>{t}</h1>
                ))}
            </span>
            <span className={styles.designation}>{DATA.designation}</span>
            <p className={styles.details}>
                <a href={DATA.url} target='_blank' rel='noopener noreferrer'>
                    {trimURL(DATA.url)}
                </a>
                <b>&bull;</b>
                <a href={`mailto:${DATA.details.email}`}>{DATA.details.email}</a>
                <b>&bull;</b>
                <span>{DATA.details.location}</span>
            </p>
        </header>
    );
};

export default Header;
