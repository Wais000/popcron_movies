import React, { useEffect, useState } from "react";
import "./Banner.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { fetchData } from "../globle/moviesApi";
import { getPopular } from "../features/movieSlice/movieSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";

function Banner() {
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenu, setMobileMenu] = useState(false);

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


  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
        navigate(`/search/${query}`);
    }
};

  return (
    <div className="poster">
      <Carousel
        showThumbs={false}
        autoPlay={true}
        transitionTime={2}
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

          <div className="searchInput">
            <input
              type="text"
              placeholder="Search for a movie or tv show...."
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
            />

            <button>Search</button>
          </div>{" "}

    </div>
  );
}

export default Banner;
