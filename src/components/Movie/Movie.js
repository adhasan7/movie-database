import styles from"./Movie.module.css"
function Movie(props){
    // extraxt data pakai destructing
    const {movie} = props;
    return (
        <div className={styles.Movie}>
                <div className={styles.Wrapper__movie}>
                <img className={styles.Movie__image} src={movie.poster} alt="film"/>
                <h2 className={styles.Images__title}>{movie.title}</h2>
                <h2 className={styles.Movie__genre}>{movie.type}</h2>
                <p className={styles.Movie__date}>{movie.year}</p>
                </div> 
                </div>           
    );
}

export default Movie