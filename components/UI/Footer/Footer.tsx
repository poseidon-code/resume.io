import styles from './Footer.module.scss';

import DATA from '../../../data.json';

const Footer = (): JSX.Element => (
    <footer className={styles.Footer}>
        <i className='fa-regular fa-copyright'></i>
        &nbsp;{DATA.name} {new Date().getFullYear()}
    </footer>
);

export default Footer;
