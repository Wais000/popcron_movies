import { useEffect,useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../../components/globle/moviesApi";
import {  getTvShowTrending } from "../../../components/features/movieSlice/movieSlice";
import "react-alice-carousel/lib/scss/alice-carousel.scss";
import { BsStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./TvShowTrending.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function TvShowTrending() {
  // const [endpoint, setEndpoint] = useState("movie");
    const Dispatch = useDispatch();
  const { TvShowTrending } = useSelector((state) => state.movies);
  useEffect(() => {
    tvShowTrending();
  }, [Dispatch]);

  const tvShowTrending = () => {
    fetchData("/trending/tv/week").then((Response) => {
      Dispatch(getTvShowTrending(Response));
    });
  };
  console.log("i am the type of TvShowTrending", TvShowTrending);
  const settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 8,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <div className="mainContainer">
    <Slider {...settings}>
      {TvShowTrending.results &&
        TvShowTrending.results.map((movieTrend) => (
         
          <div className="caroselBox" key={movieTrend.id}>
            <Link
                 style={{ textDecoration: "none", color: "white" }}
                 to={`/TvShowTrending/${movieTrend.id}`}
          >
              <div className="cardInner">
                <div className="cardTop">
                  <img
                    src={`https://image.tmdb.org/t/p/original${
                      movieTrend && movieTrend.poster_path
                    }`}
                  />
                </div>
              

              <div className="cardBottom">
                <div className="cardInfo">
                  <div className="rateRelease">
                    <div className="rate">
                      <BsStarFill />{" "}
                      <p> {movieTrend ? movieTrend.vote_average : ""}</p>
                    </div>
                    <div className="release">
                      <p> {movieTrend ? movieTrend.release_date : ""}</p>
                    </div>
                  </div>
                  <p>{movieTrend ? movieTrend.original_title : ""}</p>
                </div>
                </div>
              </div>
            </Link>
          </div>
        
        ))}
    </Slider>
      </div>
   
  );
}

export default TvShowTrending