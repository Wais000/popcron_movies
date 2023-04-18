import React, { useEffect } from "react";
import './App.scss'
// import { fetchData } from "./components/globle/moviesApi";
// import { useSelector, useDispatch } from "react-redux";
// import { getUrl } from "./components/features/movieSlice/movieSlice";
import Home from "./pages/home/Home";
import Explore from "./pages/explore/Explore";
import MovieDetails from "./pages/Details/movieDetails/MovieDetails";
import PageNotFound from "./pages/pageNotFound/PageNotFound";
import Search from "./pages/search/Search";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import TvDetails from "./pages/Details/TvDetails/TvDetails";
import SearchDetails from "./pages/Details/searchDetails/SearchDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SeasonDetails from "./pages/Details/searchDetails/SearchDetails";
import Movies from "./pages/Movies/Movies";

function App() {
  
  // const dispatch = useDispatch();
  // const { links } = useSelector((state) => state.movies);
  // useEffect(() => {
  //   apiTest();
  // }, []);

  // const apiTest = () => {
  //   fetchData("/movie/popular").then((Response) => {
  //     console.log(Response);
  //     dispatch(getUrl(Response));
  //   });
  // };
  return (
    <div className="App">

      <Router>

        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Movies/"element={<Movies />} />
          <Route path="/Banner/:id" element={<MovieDetails />} />
          <Route path="/search/multi/:query" element={<Search />} />
          <Route path="/search/:id" element={<SearchDetails />} />
          <Route path="/SwitchTab/:id" element={<MovieDetails />} />
          <Route path="/search/movie/:id" element={<MovieDetails />} />
          <Route path="/search/tv/:id" element={<TvDetails />} />
          <Route path="/search/:id" element={<MovieDetails />} />
          <Route path="/TvShowTrending/:id" element={<TvDetails />} />
          <Route path="/seasonDetail/:id" element={<SeasonDetails />} />
          <Route path="/MovieTrending/:id" element={<MovieDetails />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
