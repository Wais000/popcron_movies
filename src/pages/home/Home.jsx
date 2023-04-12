import React from "react";
import Banner from "../../components/banner/Banner.jsx";
import SwitchTab from "../../components/switchTab/SwitchTab.jsx";
import MovieTrending from "../trending/movieTrending/MovieTrending.jsx";
import TvShowTrending from "../trending/tvShowTrending/TvShowTrending.jsx";
import './Home.scss';
function Home() {
  return (
    <div className="HomeMainContainer">
 <Banner />  
  <div className="switchTab"><SwitchTab/></div> 
<br />
      <MovieTrending />
     <br />
 
      <TvShowTrending />
    </div>
  );
}

export default Home;
