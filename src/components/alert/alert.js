import styles from "./alert.css"

function alert(props){
    return(
        <div>
            <span className={styles.Keterangan}>{props.children}</span>
        </div>

    );
}

export default alert