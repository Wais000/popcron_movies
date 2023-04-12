import React, { useEffect, useState } from "react";
import "./Banner.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { fetchData } from "../globle/moviesApi";
import { getPopular } from "../features/movieSlice/movieSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";



function Banner() {

  const dispatch = useDispatch();
  const { popular } = useSelector((state) => state.movies);
  useEffect(() => {
    popularApi();
  }, [dispatch]);

  const popularApi = () => {
    fetchData("/movie/popular").then((Response) => {
      console.log("I am the response of API", Response);
      dispatch(getPopular(Response));
    });
  };


  return (
    <div className="poster">
      <Carousel
        showThumbs={false}
        autoPlay={true}
        transitionTime={3}
        infiniteLoop={true}
        showStatus={false}
      >
        {popular.results &&
          popular.results.map((movie) => (
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={`/Banner/${movie.id}`}
            >
              <div className="posterImage" key={movie.id}>
                <img
                  src={`https://image.tmdb.org/t/p/original${
                    movie && movie.backdrop_path
                  }`}
                />
              </div>
              <div className="posterImage__overlay">
                <div className="posterImage__title">
                  {movie ? movie.original_title : ""}
                </div>
                <div className="posterImage__runtime">
                  {movie ? movie.release_date : ""}
                  <span className="posterImage__rating">
                    {movie ? movie.vote_average : ""}
                    <i className="fas fa-star" />{" "}
                  </span>
                </div>
                <div className="posterImage__description">
                  {movie ? movie.overview : ""}
                </div>
                  
              </div>
            </Link>
            
          ))}
      </Carousel>
     {/* <div className="wellcome">
      <span className="wellcomPop">Welcome to Popcron</span>
      <br/>
      <span className="subSentence">where you'll find all the latest infos about your favorite films and Tv shows !</span>
     </div> */}
      {/* <form className="inputbox">
        <input
        required="required"
          type="text"
          class="input"
          name="txt"
          onmouseout="this.value = ''; this.blur();"
          placeholder="Search for a movie or tv show...."
          onChange={(e) => setQuery(e.target.value)}
          onKeyUp={searchQueryHandler}
        />
 <button type="reset" class="del"></button>
      </form>{" "} */}

 
      </div>
 
  );
}

export default Banner;
