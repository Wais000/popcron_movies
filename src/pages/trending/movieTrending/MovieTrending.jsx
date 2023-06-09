import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../../components/globle/moviesApi";
import { getMovieTrending } from "../../../components/features/movieSlice/movieSlice";
import "react-alice-carousel/lib/scss/alice-carousel.scss";
import TvShowTrending from "../tvShowTrending/TvShowTrending";
import { AiFillStar } from "react-icons/ai";
import { RiMovie2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import './MovieTrending.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SwitchTab from "../../../components/switchTab/SwitchTab";
import Loading from "../../../components/loader/Loading";

function MovieTrending() {
    const Dispatch = useDispatch();
    const [isVisible, setIsVisible] = useState(true);

    const [isOtherComponentVisible, setIsOtherComponentVisible] = useState(false);
    const handleHideOtherComponent = () => {
      setIsOtherComponentVisible(true);
    };

  const { MovieTrending } = useSelector((state) => state.movies);
  useEffect(() => {
    movieLists();
    handleHideOtherComponent()
  }, [Dispatch]);



  const movieLists = () => {
    fetchData(`/trending/movie/week`).then((Response) => {
      Dispatch(getMovieTrending(Response));
    });
  };
  console.log("this api comes from latest movie", MovieTrending);



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
          slidesToScroll: 5,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2,
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
<div style={{
  marginBottom:'4%'
}}>
{isOtherComponentVisible && <SwitchTab setIsVisible={setIsVisible} onHide={handleHideOtherComponent} />}
</div>
  <div  style={{ display: isVisible ? 'block' : 'none' }}> 
  <h2 style={{color:'#FFD464', marginBottom:'1%'}}>Movie list</h2>
    <Slider {...settings}
   >

      {
      MovieTrending.results && 
        MovieTrending.results.map((movieTrend) => (
          
          <div key={movieTrend.id}>
          
            <Link
            style={{ textDecoration: "none", color: "white"}}
            to={`/MovieTrending/${movieTrend.id}`}>
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
                               
                                <AiFillStar />
                              </p>
                      <p> {movieTrend ? movieTrend.vote_average.toFixed(1) : ""}</p>
                    </div>
                    <div className="releaseSwitch">
                    <p className="iconTow">
                                <RiMovie2Fill />
                              </p>
                      <p> {movieTrend ? movieTrend.release_date.substr(0, 4) : ""}</p>
                    </div>
                  </div>
                  <p>{movieTrend ? movieTrend.original_title.substr(0, 19) : ""}</p>
                </div>
                </div>
              </div>
            </Link>
          </div>
        
        ))} 
    
    </Slider>
    <br />
    </div>
    <div style={{ display: isVisible ? 'block' : 'none' }}><TvShowTrending  /></div>
    


      </div>
   
  );
}

export default MovieTrending