import React, { useState, useEffect } from "react";
import { fetchData } from "../../components/globle/moviesApi";
import { useParams } from "react-router-dom";
import { BsStarFill } from "react-icons/bs";
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
                <div className="searchCardBottom">
                  <div className="searchCardInfo">
                    <div className="searchRateRelease">
                      <div className="rate">
                      <BsStarFill /> 
                       <p>{searchResults ? searchResults.vote_average.toFixed(1): ""}</p> 
                      </div>
                      <div className="release">
                        {searchResults ? searchResults.release_date.substr(0,4) : ""}
                        {/* {searchResults ? searchResults.vote_average.substr(0,4): ""} */}
                      </div>
                    </div>
                    <p> {searchResults ? searchResults.title : ""} </p>
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
