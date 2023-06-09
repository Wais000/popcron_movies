import React, { useEffect, useState } from "react";
import { getUrl } from "../../../components/features/movieSlice/movieSlice";
import { fetchData } from "../../../components/globle/moviesApi";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Loading from "../../../components/loader/Loading";

// import './MovieDetails.scss'

function SearchDetails() {
  // const [movieId, setMovieID]=useState("")
  const dispatch = useDispatch();
  const { mediaType, id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    DetailsApi();
    window.scrollTo(0, 0);
  }, [dispatch]);

  const { links } = useSelector((state) => state.movies);
  const DetailsApi = () => {
    fetchData(`/movie/${id}`).then((Response) => {
      console.log("I am search details", Response);
      dispatch(getUrl(Response));
      setIsLoading(false);
    });
  };
  setTimeout(function () {
    isLoading();
  }, 1000);
  return (
    <>
      {isLoading ? (
        <Loading/>
      ) : (
        <div className="movie">
          <div className="movie__intro">
            <img
              className="movie__backdrop"
              src={`https://image.tmdb.org/t/p/original${
                links ? links.backdrop_path : ""
              }`}
            />
          </div>
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
                <div className="movie__tagline">
                  {links ? links.tagline : ""}
                </div>
                <div className="movie__rating">
                  {links ? links.vote_average : ""} <i class="fas fa-star" />
                  <span className="movie__voteCount">
                    {links ? "(" + links.vote_count + ") votes" : ""}
                  </span>
                </div>
                <div className="movie__runtime">
                  {links ? links.runtime + " mins" : ""}
                </div>
                <div className="movie__releaseDate">
                  {links ? "Release date: " + links.release_date : ""}
                </div>
                <div className="movie__genres">
                  {links && links.genres
                    ? links.genres.map((genre) => (
                        <>
                          <span className="movie__genre" id={genre.id}>
                            {genre.name}
                          </span>
                        </>
                      ))
                    : ""}
                </div>
              </div>
              <div className="movie__detailRightBottom">
                <div className="synopsisText">Synopsis</div>
                <div>{links ? links.overview : ""}</div>
              </div>
            </div>
          </div>
          <div className="movie__links">
            <div className="movie__heading">Useful Links</div>
            {links && links.homepage && (
              <a
                href={links.homepage}
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <p>
                  <span className="movie__homeButton movie__Button">
                    Homepage <i className="newTab fas fa-external-link-alt"></i>
                  </span>
                </p>
              </a>
            )}
            {links && links.imdb_id && (
              <a
                href={"https://www.imdb.com/title/" + links.imdb_id}
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <p>
                  <span className="movie__imdbButton movie__Button">
                    IMDb<i className="newTab fas fa-external-link-alt"></i>
                  </span>
                </p>
              </a>
            )}
          </div>
          <div className="movie__heading">Production companies</div>
          <div className="movie__production">
            {links &&
              links.production_companies &&
              links.production_companies.map((company) => (
                <>
                  {company.logo_path && (
                    <span className="productionCompanyImage">
                      <img
                        className="movie__productionComapany"
                        src={
                          "https://image.tmdb.org/t/p/original" +
                          company.logo_path
                        }
                      />
                      <span>{company.name}</span>
                    </span>
                  )}
                </>
              ))}
          </div>
        </div>
      )}
    </>
  );
}

export default SearchDetails;
