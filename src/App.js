// import Counter from "./Counter/Counter";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreateMovie from "./pages/movie/create";
import PopularList from "./pages/movie/popular";
import NowPlaying from "./pages/movie/now";
import TopRated from "./pages/movie/top";
import Layout from "./Layout";
function App() {
  return (
    <>
    <Layout>
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/movie/create" element={<CreateMovie/>}></Route>
        <Route path="/movie/popular" element={<PopularList/>}></Route>
        <Route path="/movie/now" element={<NowPlaying/>}></Route>
        <Route path="/movie/top" element={<TopRated/>}></Route>
      </Routes>    
    </Layout>
      
    </>
 );
}


export default App;

