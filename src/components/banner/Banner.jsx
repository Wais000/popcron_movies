import React, { useEffect } from "react";
import "./Banner.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { fetchData } from "../globle/moviesApi";
import { getUrl } from "../features/movieSlice/movieSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";


function Banner() {
  const dispatch = useDispatch();
  const { links } = useSelector((state) => state.movies);
  useEffect(() => {
      popularApi();
  }, [dispatch]);

  const popularApi = () => {
    fetchData("/movie/popular").then((Response) => {
      console.log("I am the response of API", Response);
      dispatch(getUrl(Response));
    });
  };
  console.log(typeof links.results);

  return (
    <div className="poster">
      <Carousel
        showThumbs={false}
        autoPlay={true}
        transitionTime={2}
        infiniteLoop={true}
        showStatus={false}
      >
        {links.results &&
          links.results.map((movie) => (
            <Link style={{textDecoration:"none",color:"white"}} to={`/Banner/${movie.id}`} >
              {/* to={`/movie/${movie.id}`} */}
            
              <div className="posterContainer" key={movie.id}>
                <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`}/>
              </div>
              <div className="posterImage__overlay">
                                    <div className="posterImage__title">{movie ? movie.original_title: ""}</div>
                                    <div className="posterImage__runtime">
                                        {movie ? movie.release_date : ""}
                                        <span className="posterImage__rating">
                                            {movie ? movie.vote_average :""}
                                            <i className="fas fa-star" />{" "}
                                        </span>
                                    </div>
                                    <div className="posterImage__description">{movie ? movie.overview : ""}</div>
                                </div>
            </Link>
          ))}
      </Carousel>
    </div>
  );
}

export default Banner;
