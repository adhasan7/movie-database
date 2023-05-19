import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero.js";
import Movies from "../components/Movies/Movies";
import Herobawah from "../components/Herobawah/Herobawah";
import { useState } from "react";
import data from "../utils/constants/data";

// function Main({ movies, setMovies }) {
//   return <main> </main>
  
// }

function Home() {
  const [movies,setMovies] = useState(data);
  console.log(movies);
  return (
    <div>
    {/* <Navbar/> */}
    <Hero />
       <Movies movies={movies} setMovies={setMovies}/>
    {/* <Main movies={movies} setMovies={setMovies} /> */}
    <Herobawah movies={movies} setMovies={setMovies} />
    {/* <Footer/> */}
    </div>

 );
}


export default Home;



