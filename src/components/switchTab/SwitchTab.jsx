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
  getTvUpcoming,
  getTvTopRated,
  getTvPopular,
} from "../features/movieSlice/movieSlice";

function SwitchTab({ setIsVisible }) {
  const [value, setValue] = useState("");

  const navigateToLists = (e) => {
    setValue(e.target.value);
    handleClick()
  };

  const handleClick = () => {
    setIsVisible(false);
  };

  const popDispatch = useDispatch();
  const upDispatch = useDispatch();
  const topDispatch = useDispatch();
  const popTvDispatch = useDispatch();
  const upTvDispatch = useDispatch();
  const topTvDispatch = useDispatch();

  const { popular, topRated, upcoming, tvPopular, tvTopRated, tvUpcoming } =
    useSelector((state) => state.movies);

  //popular
  const popHandler = () => {
    fetchData("/movie/popular").then((Response) => {
      popDispatch(getPopular(Response));
    });
    console.log("I am movie Popular", Response);
  };

  const popTvHandler = () => {
    fetchData("/tv/popular").then((Response) => {
      popTvDispatch(getTvPopular(Response));
    });
    console.log("I am tv Popular", Response);
  };

  //upcomming
  const upHandler = () => {
    fetchData("/movie/upcoming").then((Response) => {
      upDispatch(getUpcoming(Response));
    });
    console.log("I am movie upcomming", Response);
  };
  const upTvHandler = () => {
    fetchData("/tv/on_the_air").then((Response) => {
      upTvDispatch(getTvUpcoming(Response));
    });
    console.log("I am tv upcomming", Response);
  };

  //top rate

  const ratHandler = () => {
    fetchData("/movie/top_rated").then((Response) => {
      topDispatch(getTopRated(Response));
    });
  };

  const ratTvHandler = () => {
    fetchData("/tv/top_rated").then((Response) => {
      topTvDispatch(getTvTopRated(Response));
    });
    console.log("I am tv top rated", Response);
  };

  useEffect(() => {
    popHandler();
    upHandler();
    ratHandler();
    ratTvHandler();
    upTvHandler();
    popTvHandler();

  }, []);


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
        </ul>
      </div>

      {value === "top-rated" ? (
        <div className="topRateContainer">
          <h2 style={{ color: "#FFD464", marginBottom: "1%" }}>Top Rated</h2>

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
                            <p style={{ color: "#E16B5A" }}>M</p>
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
<br />
          {/* tv Top Rated */}

          <Slider {...settings}>
            {tvTopRated.results &&
              tvTopRated.results.map((tvRate) => (
                <Link to={`/SwitchTabTv/${tvRate.id}`}>
                  <div className="caroselBox" key={tvRate.id}>
                    <div className="cardInner">
                      <div className="cardTop">
                        <img
                          src={`https://image.tmdb.org/t/p/original${
                            tvRate && tvRate.poster_path
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

                              <p> {tvRate ? tvRate.vote_average : ""}</p>
                            </div>
                            <h4 style={{ color: "#E16B5A" }}>T</h4>
                            <div className="releaseSwitch">
                              <p className="iconTow">
                                <RiMovie2Fill />
                              </p>
                              <p>
                                {" "}
                                {tvRate
                                  ? tvRate.first_air_date.substr(0, 4)
                                  : ""}
                              </p>
                            </div>
                          </div>
                          <p>{tvRate ? tvRate.name.substr(0, 19) : ""}</p>
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
          <h2 style={{ color: "#FFD464", marginBottom: "1%" }}>
            Upcoming list
          </h2>

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
                            <p style={{ color: "#E16B5A" }}>M</p>
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
          <br />
          {/* tv upcomming */}

          <Slider {...settings}>
            {tvUpcoming.results &&
              tvUpcoming.results.map((tvUp) => (
                <Link to={`/SwitchTabTv/${tvUp.id}`}>
                  <div className="caroselBox" key={tvUp.id}>
                    <div className="cardInner">
                      <div className="cardTop">
                        <img
                          src={`https://image.tmdb.org/t/p/original${
                            tvUp && tvUp.poster_path
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

                              <p> {tvUp ? tvUp.vote_average : ""}</p>
                            </div>
                            <h4 style={{ color: "#E16B5A" }}>T</h4>
                            <div className="releaseSwitch">
                              <p className="iconTow">
                                <RiMovie2Fill />
                              </p>
                              <p>
                                {" "}
                                {tvUp ? tvUp.first_air_date.substr(0, 4) : ""}
                              </p>
                            </div>
                          </div>
                          <p>{tvUp ? tvUp.name.substr(0, 19) : ""}</p>
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
          <h2 style={{ color: "#FFD464", marginBottom: "1%" }}>
            Popular List
          </h2>
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
                            <p style={{ color: "#E16B5A" }}>M</p>
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
          <br />
          {/* Popular */}
          <Slider {...settings}>
            {tvPopular.results &&
              tvPopular.results.map((tvPop) => (
                <Link to={`/SwitchTabTv/${tvPop.id}`}>
                  <div className="caroselBox" key={tvPop.id}>
                    <div className="cardInner">
                      <div className="cardTop">
                        <img
                          src={`https://image.tmdb.org/t/p/original${
                            tvPop && tvPop.poster_path
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
                              <p> {tvPop ? tvPop.vote_average : ""}</p>
                            </div>
                            <h4 style={{ color: "#E16B5A" }}>T</h4>
                            <div className="releaseSwitch">
                              <p className="iconTow">
                                <RiMovie2Fill />
                              </p>
                              <p>
                                {" "}
                                {tvPop ? tvPop.first_air_date.substr(0, 4) : ""}
                              </p>
                            </div>
                          </div>
                          <p>{tvPop ? tvPop.name.substr(0, 19) : ""}</p>
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
