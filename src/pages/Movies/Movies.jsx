import { useEffect, useState } from "react";
import { fetchData } from "../../components/globle/moviesApi";
import { getMovieTrending } from "../../components/features/movieSlice/movieSlice";
import { useSelector, useDispatch } from "react-redux";
import { AiFillStar } from "react-icons/ai";
import { RiMovie2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./Movies.scss";
import Loading from "../../components/loader/Loading";
function Movies() {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const { MovieTrending } = useSelector((state) => state.movies);
  const resultsPerPage = 10;
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    movieLists();
  }, [dispatch, currentPage]);

  const movieLists = () => {
    fetchData(`/trending/movie/week?page=${currentPage}`).then((response) => {
      dispatch(getMovieTrending(response));
     
     setTotalPages(Math.ceil(response.total_results / resultsPerPage));
  
    });
  };
  setTimeout(function() {
    setIsLoading(false);
  }, 1000);
  const pageHandler = (page) => {
    setCurrentPage(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
  
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
          <div style={{
       display:'inline-block',marginRight:'5px', width: '20px', color:'white', cursor: 'pointer', textAlign:'center'


          }}>
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
      {MovieTrending.results &&
        MovieTrending.results.map((movies) => (
          <div className="movieBox" key={movies.id}>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={`/MovieTrending/${movies.id}`}
            >
              <div className="cardInner">
                <div className="cardTop">
                  <img
                    src={`https://image.tmdb.org/t/p/original${
                      movies && movies.poster_path
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
                        <p> {movies ? movies.vote_average.toFixed(1) : ""}</p>
                      </div>
                      <div className="releaseSwitch">
                        <p className="iconTow">
                          <RiMovie2Fill />
                        </p>
                        <p> {movies ? movies.release_date.substr(0, 4) : ""}</p>
                      </div>
                    </div>
                    <p>{movies ? movies.original_title.substr(0, 19) : ""}</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          
        ))}</> )}
<div className="pagination" style={{ width: '80%', display:'flex', justifyContent:'center'}} >
 

  <div >
    {/* <ul style={{ display:'flex', flexDirection:'row', border:'2px solid red', listStyle:'none'}}> */}
      <p className="pageNumber" > {renderPageNumbers()} </p>
    {/* </ul> */}
  
    
    
     
   
  </div>

  
</div>
    </div>
    
  );
}

export default Movies;
