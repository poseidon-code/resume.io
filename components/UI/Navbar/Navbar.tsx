import styles from './Navbar.module.scss';

import DATA from '../../../data.json';

const Navbar = (): JSX.Element => {
    return (
        <nav className={styles.Navbar}>
            {DATA.url ? (
                <a href={DATA.url} target='_blank' rel='noopener noreferrer'>
                    <i className='fa-regular fa-arrow-up-right-from-square'></i>
                    Portfolio
                </a>
            ) : (
                'Resume'
            )}
            <a href={DATA.pdf} download>
                <i className='fa-regular fa-file-arrow-down'></i>
                PDF
            </a>
        </nav>
    );
};

export default Navbar;
