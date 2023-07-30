import styles from "./Footer.module.css";
function Footer() {
    return (
        <div className={styles.container}>
            <footer>
                <h1 className={styles.footer__title}>Movie App</h1> 
                <p className={styles.footer__autor}>Create by Team Creative</p>
            </footer>
        </div>
    );
}
export default Footer;