import styles from './Navbar.module.scss';

type Props = {
    link?: {
        url: string;
        text: string;
    };
    download: string;
};

const Navbar = (props: Props): JSX.Element => {
    return (
        <nav className={styles.Navbar}>
            {props.link ? (
                <a href={props.link.url} target='_blank' rel='noopener noreferrer'>
                    <i className='fa-regular fa-arrow-up-right-from-square'></i>
                    {props.link.text}
                </a>
            ) : (
                'Resume'
            )}
            <a href={props.download} download>
                <i className='fa-regular fa-file-arrow-down'></i>
                PDF
            </a>
        </nav>
    );
};

export default Navbar;
