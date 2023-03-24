import React, { useEffect } from "react";
import './App.scss'
// import { fetchData } from "./components/globle/moviesApi";
// import { useSelector, useDispatch } from "react-redux";
// import { getUrl } from "./components/features/movieSlice/movieSlice";
import Home from "./pages/home/Home";
import Explore from "./pages/explore/Explore";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import PageNotFound from "./pages/pageNotFound/PageNotFound";
import Search from "./pages/search/Search";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
          <Route path="/Banner/:id" element={<MovieDetails />} />
          <Route path="/movieTrend/:id" element={<MovieDetails />} />
          <Route path="/mediaType/:id" element={<Explore />} />
          <Route path="/search/:query" element={<Search />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
