import React, { useState, useEffect } from "react";
import { fetchData } from "../../components/globle/moviesApi";
import { useParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { RiMovie2Fill } from "react-icons/ri";
import { getSearchRersult } from "../../components/features/movieSlice/movieSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./Search.scss";
import Loading from "../../components/loader/Loading";


function Search() {
  const dispatch = useDispatch();
  const { searchRersult } = useSelector((state) => state.movies);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage]= useState(1)
  const { query } = useParams();

  const searchResults = () => {
    fetchData(`/search/multi?query=${query}`).then((Response) => {
      dispatch(getSearchRersult(Response));
      setIsLoading(false);
    });
    // console.log("I am search query result", searchRersult);
  };

  useEffect(() => {
    searchResults();
  }, [query]);
  const pageHandler =()=>{
    setPage(page + 1)
  }


  return (
    <div className="searchMainContainer">
      {isLoading ? (
       <Loading/>
      ) : (<>
            {searchRersult.results &&
        searchRersult.results.map((searchResults) => (
          <div className="searchCaroselBox" key={searchResults.id}>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={searchResults.media_type === 'movie' ? `/search/movie/${searchResults.id}` : `/search/tv/${searchResults.id}`}
            >
              <div className="searchCardInner">
                <div className="searchCardTop">
                  <img
                    src={`https://image.tmdb.org/t/p/original${
                      searchResults && searchResults.poster_path
                    }`}
                  />
                </div>
                <div className="cardBottomSearch">
                  <div className="cardInfoSearch">
                    <div className="rateReleaseSearch">
                      <div className="rateSearch">
                        <p className="iconOne">
                          <AiFillStar />
                        </p>
                        <p>
                          {searchResults
                            ? searchResults.vote_average.toFixed(1)
                            : ""}
                        </p>
                      </div>
                      <h4>{searchResults ? searchResults.media_type : ""}</h4>
                      <div className="releaseSearch">
                        <p className="iconTow">
                          <RiMovie2Fill />
                        </p>
                       
                        <p> {searchResults ? searchResults.release_date || searchResults.first_air_date  : ""}</p>

                     
                      </div>
                    </div>
                    <p>
                      {" "}
                      {searchResults
                        ?searchResults.name ||searchResults.title .substring(0,9)
                          
                        : ""}{" "}
                    </p>
                  </div>
                </div>{" "}
              </div>
            </Link>
         
          </div>
        ))}</> )}

         </div>
  );
}

export default Search;
