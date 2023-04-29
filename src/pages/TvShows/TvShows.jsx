import { useEffect, useState } from "react";
import { fetchData } from "../../components/globle/moviesApi";
import { getTvShowTrending } from "../../components/features/movieSlice/movieSlice";
import { useSelector, useDispatch } from "react-redux";
import { AiFillStar } from "react-icons/ai";
import { RiMovie2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import Loading from "../../components/loader/Loading";
// import "./Movies.scss";

function TvShows() {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const { TvShowTrending } = useSelector((state) => state.movies);
  const resultsPerPage = 10;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    tvLists();
  }, [dispatch, currentPage]);


  const tvLists = () => {
    fetchData(`/trending/tv/week?page=${currentPage}`).then((response) => {
      dispatch(getTvShowTrending(response));
      setTotalPages(Math.ceil(response.total_results / resultsPerPage));
  
    });
   
  };

  const pageHandler = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

 
  setTimeout(function() {
    setIsLoading(false);
  }, 1000); 

  const renderPageNumbers = () => {
    const pageNumbers = [];
    // window.scrollTo(0, 0);
    const maxPages = Math.min(totalPages, 25);

    for (let i = 1; i <= maxPages; i++) {
      if (i === currentPage) {
        pageNumbers.push(
          <span key={i} className="active" onClick={() => pageHandler(i)}>
            {i}
          </span>
        );
      } else {
        pageNumbers.push(
          <div
            style={{
              display: "inline-block",
              marginRight: "5px",
              width: "20px",
              color: "white",
              cursor: "pointer",
              textAlign: "center",
            }}
          >
            <p key={i} onClick={() => pageHandler(i)}>
              {i}
            </p>
          </div>
        );
      }
    }

    return pageNumbers;
  };

  return (
    <div className="mainContainerMovies">
            {isLoading ? (
       <Loading/>
      ) : (<>
      {TvShowTrending.results &&
        TvShowTrending.results.map((tvs) => (
          <div className="movieBox" key={tvs.id}>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={`/TvShowTrending/${tvs.id}`}
            >
              <div className="cardInner">
                <div className="cardTop">
                  <img
                    src={`https://image.tmdb.org/t/p/original${
                      tvs && tvs.poster_path
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
                        <p> {tvs ? tvs.vote_average.toFixed(1) : ""}</p>
                      </div>
                      <div className="releaseSwitch">
                        <p className="iconTow">
                          <RiMovie2Fill />
                        </p>
                        <p> {tvs ? tvs.first_air_date.substr(0, 4) : ""}</p>
                      </div>
                    </div>
                    <p>{tvs ? tvs.name.substr(0, 19) : ""}</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      <div
        className="pagination"
        style={{ width: "80%", display: "flex", justifyContent: "center" }}
      >
        <div>
          <p className="pageNumber"> {renderPageNumbers()} </p>
        </div>
      </div>
      </> )}
    </div>
  );
}

export default TvShows;
