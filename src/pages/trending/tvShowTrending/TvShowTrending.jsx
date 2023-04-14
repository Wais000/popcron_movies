import { useEffect,useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../../components/globle/moviesApi";
import {  getTvShowTrending } from "../../../components/features/movieSlice/movieSlice";
import "react-alice-carousel/lib/scss/alice-carousel.scss";
import { BsStarFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { RiMovie2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./TvShowTrending.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function TvShowTrending() {
  // const [endpoint, setEndpoint] = useState("movie");
    const Dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);
  const { TvShowTrending } = useSelector((state) => state.movies);
  useEffect(() => {
    tvShowTrending();
  }, [Dispatch]);

  const tvShowTrending = () => {
    fetchData("/trending/tv/week").then((Response) => {
      Dispatch(getTvShowTrending(Response));
    });
    setIsLoading(false);
  };
  // console.log("i am the type of TvShowTrending", TvShowTrending);
  const settings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 7,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 6,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          // infinite: false,
          // dots: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          // infinite: false,
          // dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 6,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="mainContainer">
     
      <h2 style={{color:'#FFD464', marginBottom:'1%'}}>Tv Show list</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
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
              

              <div className="cardBottomSwitch">
                <div className="cardInfoSwitch">
                  <div className="rateReleaseSwitch">
                    <div className="rateSwitch">
                    <p className="iconOne">
                                {" "}
                                <AiFillStar />
                              </p>
                      <p> {movieTrend ? movieTrend.vote_average.toFixed(1) : ""}</p>
                    </div>
                    <div className="releaseSwitch">
                    <p className="iconTow">
                                <RiMovie2Fill />
                              </p>
                              <p> {movieTrend ? movieTrend.first_air_date.substr(0,4) : ""}</p>
                     
                    </div>
                  </div>
                  <p>{movieTrend ? movieTrend.name.substr(0, 19) : ""}</p>
                </div>
                </div>
              </div>
            </Link>
          </div>
        
        ))}
    </Slider>
    )}
      </div>
   
  );
}

export default TvShowTrending