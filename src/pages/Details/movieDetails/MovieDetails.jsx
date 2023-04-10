import React, { useEffect, useState } from "react";
import { getUrl } from "../../../components/features/movieSlice/movieSlice";
import { fetchData } from "../../../components/globle/moviesApi";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import "./MovieDetails.scss";

function MovieDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    DetailsApi();
    window.scrollTo(0, 0);
  }, [dispatch]);

  const { links } = useSelector((state) => state.movies);
  const DetailsApi = () => {
    fetchData(`/movie/${id}`).then((Response) => {
      console.log("I am the response details", Response);
      dispatch(getUrl(Response));
    });
  };

  return (
    <div
      className="movie"
      style={{
        backgroundImage: `linear-gradient(to bottom,  rgba(45, 68, 82, 0.711), rgb(22, 35, 43)), url(https://image.tmdb.org/t/p/original${
          links ? links.backdrop_path : ""
        })`,
        width: "100%",
        height: "auto",
        backgroundPosition: "center",
        backgroundtSize: "cover",
      }}
    >
      <div className="movie__detail">
        <div className="movie__detailLeft">
          <div className="movie__posterBox">
            <img
              className="movie__poster"
              src={`https://image.tmdb.org/t/p/original${
                links ? links.poster_path : ""
              }`}
            />
          </div>
        </div>
        <div className="movie__detailRight">
          <div className="movie__detailRightTop">
            <div className="movie__name">
              {links ? links.original_title : ""}
            </div>
            <div className="movieShortMessage">
              <p>"{links ? links.tagline : ""}"</p>
            </div>
            <div className="MovieShortInfo">
              <ul>
                <li className="movieRating">
                  {links ? links.vote_average.toFixed(1) : ""}
                </li>
                <li className="movieVoteCount">
                  {links ? "(" + links.vote_count + ") votes" : ""}
                </li>
                <li className="movieRuntime">
                  {" "}
                  {links ? links.runtime + " mins" : ""}
                </li>
                <li className="movieReleaseDate">
                  {" "}
                  {links ? "Release date: " + links.release_date : ""}
                </li>
              </ul>
            </div>
            <div className="movieGenres">
              {links && links.genres
                ? links.genres.map((gen) => (
                    <>
                      <span className="movieGenre" id={gen.id}>
                        {gen.name}
                      </span>
                    </>
                  ))
                : ""}
            </div>
          </div>
          <div className="movieDetails">
            <h3 className="synopsisTitle"> Overview </h3>
                <p>{links ? links.overview : ""}</p>
         
          </div>
        </div>
      </div>
      <div className="movieProductionCompanies">
        <h3>Production companies</h3>{" "}
      </div>
      <div className="production">
        {links &&
          links.production_companies &&
          links.production_companies.map((company) => (
            <>
              {company.logo_path && (
                <span className="CompanyLogoContainer">
                  <img
                    className="ComapanyLogos"
                    src={
                      "https://image.tmdb.org/t/p/original" + company.logo_path
                    }
                  />
                  <span>{company.name}</span>
                </span>
              )}
            </>
          ))}
      </div>
    </div>
  );
}

export default MovieDetails;
