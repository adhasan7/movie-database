import data from "../../utils/constants/data";
import Movie from "../Movie/Movie";
import styles from "./Movies.module.css";
// import data module
import { nanoid } from "nanoid";
function Movies (props){
// exstract pakai destracting
const {movies,setMovies}=props;
function tambahFilm(){
    const movie = {
        id: nanoid,
        title: "ajakan nikah",
        year: "2023",
        type: "Movie",
        poster: "https://picsum.photos/300/400",
       
};

//console.log(data);
// movies.push(movie)
// console.log(movies);
setMovies([...movies, movie]);
}
    return (
        <div className={styles.Container}>
            <section className={styles.Movies}>
            <h2 className={styles.Movies__title}>Lates Movies</h2>
            <div className={styles.movie__container}>
            {/* 
            looping data map
            render component movie
            kirim props movie
            */}
             {movies && movies.map(function(movie){
                    return <Movie key={movie.id} movie={movie}  />;
   
            })}
             
            </div>   
            {/* membuat button menambahkan even click */}
            <button onClick = {()=>tambahFilm()}>add movie</button>
            </section>
        </div>
    );
}

export default Movies;
