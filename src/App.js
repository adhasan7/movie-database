// import Counter from "./Counter/Counter";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import PopularMovie from "./pages/movie/popular";

import CreateMovie from "./pages/movie/Create";
import NowPlayingMovie from "./pages/movie/NowPlaying";
import TopRatedMovie from "./pages/movie/TopRated";

function App() {
  return (
    // <div>
    //  <Home/>
    //  {/* <Counter/> */}
    // </div>
    // <>
    //  <Router>
    //   <Route path="/" element ={<Home />}
    //  </Router>
    // </>
    <>
      <Routes>
        {/* Use "Route" to define the route */}
        <Route path='/' element={<Home />} />
        <Route path='/movie/create' element={<CreateMovie />} />
        <Route path='/movie/popular' element={<PopularMovie />} />
        <Route path='/movie/now' element={<NowPlayingMovie />} />
        <Route path='/movie/top' element={<TopRatedMovie />} />
        {/* <Route path='/movie/top' element={<TopRatedMovie />} /> */}
      </Routes>
    </>
  );
}
export default App;
