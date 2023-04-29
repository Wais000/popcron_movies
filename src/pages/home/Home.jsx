import React, { useState, useEffect } from "react";
import Banner from "../../components/banner/Banner.jsx";
import MovieTrending from "../trending/movieTrending/MovieTrending.jsx";
import Loading from "../../components/loader/Loading.jsx";
import "./Home.scss";
function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(false);
  }, []);
  return (
    <>
      {" "}
      {isLoading ? (
        <Loading />
      ) : (
        <div className="HomeMainContainer">
          <Banner />
          <br />
          <MovieTrending />
          <br />
        </div>
      )}
    </>
  );
}

export default Home;
