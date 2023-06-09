import styles from "./Hero.module.css";
function Hero(){
    return (
        <div className={styles.container}>
         <section className={styles.Hero}>
            <div className={styles.Hero__left}>
                <h2 className={styles.Hero__title}>Spaiderman</h2>
                <h2 className={styles.Hero__genre}>Genre: Thriller,Drama,Romancep</h2>
                <p className={styles.Hero__description}>See the movie is update list</p>
                <button className={styles.Hero__button}>Watch</button>
            </div>
            <div className={styles.Hero__right}>
                 <img className={styles.Hero__img} src="https://picsum.photos/600/400" alt="img" />    
            </div>
        </section>
    </div>
      
    );
}

export default Hero;