import React, {useState, useEffect} from "react";
import Banner from "../../components/banner/Banner.jsx";
// import SwitchTab from "../../components/switchTab/SwitchTab.jsx";
import MovieTrending from "../trending/movieTrending/MovieTrending.jsx";
// import TvShowTrending from "../trending/tvShowTrending/TvShowTrending.jsx";
import './Home.scss';
function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(false);
  }, []);
  return (
    <>    {isLoading ? (
      <h2>Popcorn...</h2>
    ) : (<div className="HomeMainContainer">
    <Banner />  
     {/* <div className="switchTab"><SwitchTab/></div>  */}
   <br />
         <MovieTrending />
        <br />
    
         {/* <TvShowTrending /> */}
       </div>)}</>
    
  );
}

export default Home;
