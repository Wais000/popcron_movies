import React, { useState, useEffect } from "react";
import { fetchData } from "../../components/globle/moviesApi";
import { useParams } from "react-router-dom";
import { getSearchRersult } from "../../components/features/movieSlice/movieSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./Search.scss";

function Search() {
  const dispatch = useDispatch();
  const { searchRersult } = useSelector((state) => state.movies);

  const { query } = useParams();

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
    <div className="mainContainer">
      {searchRersult.results &&
        searchRersult.results.map((searchResults) => (
          <div className="caroselBox" key={searchResults.id}>
            <Link
            // style={{ textDecoration: "none", color: "white" }}
            // to={`/Search/${movie.id}`}
            >
              <div className="cardInner">
                <div className="cardTop">
                  <img
                    src={`https://image.tmdb.org/t/p/original${
                      searchResults && searchResults.poster_path
                    }`}
                  />
                </div>
                <div className="cardBottom">
                  <div className="cardInfo">
                    <div className="rateRelease">
                      <div className="rate">
                        {searchResults ? searchResults.vote_average : ""}
                      </div>
                      <div className="release">
                        {searchResults ? searchResults.release_date : ""}
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
