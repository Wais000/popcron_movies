import React, { useState, useEffect } from "react";
import "./SwitchTab.scss";
import { useSelector, useDispatch } from "react-redux";
import { AiFillStar } from "react-icons/ai";
import { RiMovie2Fill } from "react-icons/ri";
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

  useEffect(() => {
    popHandler();
    upHandler();
    ratHandler();
  }, [upDispatch, popDispatch, topDispatch]);

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
    <div>
      <div className="tabBar">
        <ul
          className="tabBarContainer"
          // onChange={navigateToLists}
        >
          {/* <li menueItems onClick={navigateToLists} value="top-rated"> */}
          <button
            className="menueButton"
            onClick={navigateToLists}
            variant="primary"
            value="top-rated"
          >
            <a> top rated</a>
          </button>
          <button
            className="menueButton"
            onClick={navigateToLists}
            variant="primary"
            value="upcomming"
          >
            upcomming
          </button>
          <button
            className="menueButton"
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
          <h2>Top Rated Movies</h2>
          {/* <h2>top rated Movies</h2> */}

          <Slider {...settings}>
            {topRated.results &&
              topRated.results.map((rate) => (
                <Link to={`/SwitchTab/${rate.id}`}>
                  <div className="caroselBox" key={rate.id}>
                    <div className="cardInner">
                      <div className="cardTop">
                        <img
                          src={`https://image.tmdb.org/t/p/original${
                            rate && rate.poster_path
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
                              <p> {rate ? rate.vote_average : ""}</p>
                            </div>
                            <div className="releaseSwitch">
                              <p className="iconTow">
                                <RiMovie2Fill />
                              </p>
                              <p>
                                {" "}
                                {rate ? rate.release_date.substr(0, 4) : ""}
                              </p>
                            </div>
                          </div>
                          <p>{rate ? rate.title.substr(0, 19) : ""}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </Slider>
        </div>
      ) : value === "upcomming" ? (
        <div className="upcommingContainer">
          <h2>Upcomming Movies</h2>
          <Slider {...settings}>
            {upcoming.results &&
              upcoming.results.map((comming) => (
                <Link to={`/SwitchTab/${comming.id}`}>
                  <div className="caroselBox" key={comming.id}>
                    <div className="cardInner">
                      <div className="cardTop">
                        <img
                          src={`https://image.tmdb.org/t/p/original${
                            comming && comming.poster_path
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
                              <p> {comming ? comming.vote_average : ""}</p>
                            </div>
                            <div className="releaseSwitch">
                              <p className="iconTow">
                                <RiMovie2Fill />
                              </p>

                              <p>
                                {" "}
                                {comming
                                  ? comming.release_date.substr(0, 4)
                                  : ""}
                              </p>
                            </div>
                          </div>
                          <p>{comming ? comming.title.substr(0, 19) : ""}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </Slider>
        </div>
      ) : value === "popular" ? (
        <div className="popularContainer">
          <h2>Popular Movies</h2>
          <Slider {...settings}>
            {popular.results &&
              popular.results.map((pop) => (
                <Link to={`/SwitchTab/${pop.id}`}>
                  <div className="caroselBox" key={pop.id}>
                    <div className="cardInner">
                      <div className="cardTop">
                        <img
                          src={`https://image.tmdb.org/t/p/original${
                            pop && pop.poster_path
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
                              <p> {pop ? pop.vote_average : ""}</p>
                            </div>
                            <div className="releaseSwitch">
                              <p className="iconTow">
                                <RiMovie2Fill />
                              </p>
                              <p> {pop ? pop.release_date.substr(0, 4) : ""}</p>
                            </div>
                          </div>
                          <p>{pop ? pop.title.substr(0, 19) : ""}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </Slider>
        </div>
      ) : (
        value == null
      )}
    </div>
  );
}
export default SwitchTab;
