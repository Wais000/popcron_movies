import React, { useState, useEffect } from "react";
import "./SwitchTab.scss";
import { useSelector, useDispatch } from "react-redux";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import PhoneIcon from "@mui/icons-material/Phone";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import PersonPinIcon from "@mui/icons-material/PersonPin";
import { BsStarFill } from "react-icons/bs";
import Slider from "react-slick";
import { fetchData } from "../globle/moviesApi";
import { Link } from "react-router-dom";
import {
  getUpcoming,
  getTopRated,
  getPopular,
} from "../features/movieSlice/movieSlice";

function SwitchTab() {
  const [value, setValue] = useState("");

  // const moveToContainer = useRef()
  const navigateToLists = (e) => {
    setValue(e.target.value);
  };
  // moveToContainer.current.scrollIntoView({behavior: "smooth"});
  // const [topRatedMT, setTopRatedMT] = useState("");
  // const [upcomingMT, setUpcomingMT] = useState("");
  // const [popularMT, setPopularMT] = useState("");

  const popDispatch = useDispatch();
  const upDispatch = useDispatch();
  const topDispatch = useDispatch();
  const { popular } = useSelector((state) => state.movies);
  const { topRated } = useSelector((state) => state.movies);
  const { upcoming } = useSelector((state) => state.movies);

  // useEffect(() => {
  //   popHandler();
  //   upHandler();
  //   ratHandler();
  // }, [upDispatch, popDispatch, topDispatch]);

  const popHandler = () => {
    fetchData("/movie/popular").then((setPopularMT) => (Response) => {
      popDispatch(getPopular(Response));
    });
  };
  console.log("popular", popular);

  const upHandler = () => {
    fetchData("/movie/upcoming").then((Response) => {
      upDispatch(getUpcoming(Response));
    });
  };
  console.log("upcomming", upcoming);

  const ratHandler = () => {
    fetchData("/movie/top_rated").then((Response) => {
      topDispatch(getTopRated(Response));
    });
  };
  console.log("topRated", topRated);

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
    <div>
      <div className="tabBar">
        <ul
          className="listsContainer"
          // onChange={navigateToLists}
        >
          {/* <li menueItems onClick={navigateToLists} value="top-rated"> */}
          <button
            className="menueItems"
            onClick={navigateToLists}
            variant="primary"
            value="top-rated"
          >
            top rated
          </button>
          <button
            className="menueItems"
            onClick={navigateToLists}
            variant="primary"
            value="upcomming"
          >
            upcomming
          </button>
          <button
            className="menueItems"
            onClick={navigateToLists}
            variant="primary"
            value="popular"
          >
            popular
          </button>
          {/* top_rated */}
          {/* </li> */}
          {/* <li menueItems onClick={navigateToLists} value="upcomming">
            Upcomming
          </li>
          <li menueItems onClick={navigateToLists} value="popular">
            Popular
          </li> */}
        </ul>
      </div>

      {value === "top-rated" ? (
        <div className="topRateContainer">
          {/* <h2>top rated Movies</h2> */}
          <Slider {...settings}>
            {topRated.results &&
              topRated.results.map((rate) => (
                <div className="caroselBox" key={rate.id}>
                  <Link>
                    <div className="cardInner">
                      <div className="cardTop">
                        <img
                          src={`https://image.tmdb.org/t/p/original${
                            rate && rate.poster_path
                          }`}
                        />
                      </div>

                      <div className="cardBottom">
                        <div className="cardInfo">
                          <div className="rateRelease">
                            <div className="rate">
                              <BsStarFill />{" "}
                              <p> {rate ? rate.vote_average : ""}</p>
                            </div>
                            <div className="release">
                              <p> {rate ? rate.release_date : ""}</p>
                            </div>
                          </div>
                          <p>{rate ? rate.original_title : ""}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
          </Slider>
        </div>
      ) : value === "upcomming" ? (
        <div className="upcommingContainer">
          <h1>I am the the upcomming</h1>
        </div>
      ) : value === "popular" ? (
        <div className="popularContainer">
          <h1>I am the the popular</h1>
        </div>
      ) : (
        value === null
      )}
    </div>
  );
}
export default SwitchTab;
