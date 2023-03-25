import React from "react";
import Banner from "../../components/banner/Banner.jsx";
import TvShowTrending from "../trending/tvShowTrending/TvShowTrending.jsx";
import MovieTrending from "../trending/movieTrending/MovieTrending.jsx";
import SwitchTab from "../../components/switchTab/SwitchTab.jsx";
function Home() {
  return (
    <div>
      <Banner />

      <SwitchTab />
    
      <h2>Movies</h2>
      <MovieTrending />
      <h2>Shows</h2>
      <TvShowTrending />
    </div>
  );
}

export default Home;
