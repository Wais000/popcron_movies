import React, { useState, useEffect } from "react";
import { fetchData } from "../../components/globle/moviesApi";
import { useParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { RiMovie2Fill } from "react-icons/ri";
import { getSearchRersult } from "../../components/features/movieSlice/movieSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./Search.scss";

function Search() {
  const dispatch = useDispatch();
  const { searchRersult } = useSelector((state) => state.movies);

  const {query} = useParams();

  const searchResults = () => {
    fetchData(`/search/movie?query=${query}`).then((Response) => {
      dispatch(getSearchRersult(Response));
    });
    console.log("I am search query result", searchRersult);
  };

  useEffect(() => {
    searchResults();
  }, [query]);

  return (
    <div className="searchMainContainer">
      {searchRersult.results &&
        searchRersult.results.map((searchResults) => (
          <div className="searchCaroselBox" key={searchResults.id}>
            <Link
           style={{ textDecoration: "none", color: "white" }}
          to={`/search/${searchResults.id}`}
            >
              <div className="searchCardInner">
                <div className="searchCardTop">
                  <img
                    src={`https://image.tmdb.org/t/p/original${
                      searchResults && searchResults.poster_path
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
                       <p>{searchResults ? searchResults.vote_average.toFixed(1): ""}</p> 
                      </div>
                      <div className="releaseSwitch">
                      <p className="iconTow">
                                <RiMovie2Fill />
                              </p>
                       <p>{searchResults ? searchResults.release_date.substr(0,4) : ""}</p> 
                        {/* {searchResults ? searchResults.vote_average.substr(0,4): ""} */}
                      </div>
                    </div>
                    <p> {searchResults ? searchResults.title.substr(0,19) : ""} </p>
                  </div>
                </div>{" "}
              </div>
            </Link>
          </div>
        ))}
    </div>
  );
}

export default Search;
