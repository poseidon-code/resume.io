import styles from './Footer.module.scss';

type Props = {
    content: JSX.Element;
};

const Footer = ({ content }: Props): JSX.Element => <footer className={styles.Footer}>{content}</footer>;

export default Footer;
