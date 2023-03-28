import React from "react";
import Banner from "../../components/banner/Banner.jsx";
import SwitchTab from "../../components/switchTab/SwitchTab.jsx";
import MovieTrending from "../trending/movieTrending/MovieTrending.jsx";
import TvShowTrending from "../trending/tvShowTrending/TvShowTrending.jsx";
function Home() {
  return (
    <div>
      <Banner />

      <SwitchTab />
    
<br />
      <MovieTrending />
     <br />
      <TvShowTrending />
    </div>
  );
}

export default Home;
